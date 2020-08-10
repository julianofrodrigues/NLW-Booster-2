import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage'

function TeacherList(){
    const [isFiltersVisible, setisFiltersVisible] = useState(false);
    const [ subject, Setsubject]  = useState('');
    const [ week_day, SetWeekDay]  = useState('');
    const [ time, SetTime]  = useState('');
    const [teachers, setTeachers] = useState([]);
    const [ favorites, setFavorites] = useState<number[]>([]);

    useEffect(()=>{
        AsyncStorage.getItem('favorites').then(response=>{
            if(response){
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map( (teacher: Teacher)=> {return teacher.id})
                setFavorites(favoritedTeachersIds);
            }
        });
    }, [])

    function handleToggleFilterVisible() {
        setisFiltersVisible(!isFiltersVisible)
    }

   async function handleFilterSubmit(){
        const response = await api.get('classes', {
            params:{
                subject,
                 week_day,
                 time
            }
        });
        setisFiltersVisible(false);
        setTeachers(response.data);
    }
    return(
        <View style={styles.containe}>
            <PageHeader 
                title='Professores Disponíveis' 
                headerRight={
                    <BorderlessButton onPress={handleToggleFilterVisible}>
                        <Feather name='filter' size={20} color='#FFF'/>
                    </BorderlessButton>
                } >
                { isFiltersVisible && (
                    <View style={styles.searchForm}>
                            <Text style={styles.label}>Materia</Text>
                            <TextInput 
                            style={styles.input}
                            placeholder="Qual a Matéria?"
                            value={subject}
                            onChangeText={ text=> Setsubject(text)}
                            placeholderTextColor="#C1BCCC"
                            />
                        
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput 
                                style={styles.input}
                                value={week_day}
                                onChangeText={ text=> SetWeekDay(text)}
                                placeholder="Qual o dia?"
                                placeholderTextColor="#C1BCCC"
                                /> 
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horáio</Text>
                                <TextInput 
                                style={styles.input}
                                value={time}
                                onChangeText={ text=> SetTime(text)}
                                placeholder="Qual Horário?"
                                placeholderTextColor="#C1BCCC"
                                /> 
                            </View>
                        </View>
                        <RectButton style={styles.submitButton} onPress={handleFilterSubmit}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                    )}
               
            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {teachers.map((teacher: Teacher) =>{
                    return ( 
                        <TeacherItem 
                            key={teacher.id} 
                            teacher={teacher} 
                            favorited={favorites.includes(teacher.id)}
                            />

                    )
                })}
            </ScrollView>
        </View>
    )
}

export default TeacherList;
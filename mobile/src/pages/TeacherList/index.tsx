import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

function TeacherList(){
    const [isFiltersVisible, setisFiltersVisible] = useState(false);

    function handleToggleFilterVisible() {
        setisFiltersVisible(!isFiltersVisible)
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
                            placeholderTextColor="#C1BCCC"
                            />
                        
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput 
                                style={styles.input}
                                placeholder="Qual o dia?"
                                placeholderTextColor="#C1BCCC"
                                /> 
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horáio</Text>
                                <TextInput 
                                style={styles.input}
                                placeholder="Qual Horário?"
                                placeholderTextColor="#C1BCCC"
                                /> 
                            </View>
                        </View>
                        <RectButton style={styles.submitButton}>
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
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    )
}

export default TeacherList;
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

function TeacherList(){
    return(
        <View style={styles.containe}>
            <PageHeader title='Professores Disponíveis' >
                <TeacherItem />
            </PageHeader>
        </View>
    )
}

export default TeacherList;
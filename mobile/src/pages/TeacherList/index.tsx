import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';

function TeacherList(){
    return(
        <View style={styles.containe}>
            <PageHeader title='Professores Disponíveis' />
        </View>
    )
}

export default TeacherList;
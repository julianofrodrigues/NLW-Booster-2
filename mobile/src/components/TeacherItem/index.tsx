import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';


function TeacherItem(){
    return(
        <View style={styles.containe}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: '' }} />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Nome</Text>
                    <Text style={styles.subject}>Materia</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                texto
            </Text>

        </View>
    )
}

export default TeacherItem;
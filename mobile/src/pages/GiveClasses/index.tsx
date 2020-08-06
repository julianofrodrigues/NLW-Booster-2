import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import GiveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


function GiveClasses(){
    const {goBack} = useNavigation();
    function handleNavigateBack(){goBack()};

    return(
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" source={GiveClassesBgImage} style={styles.content}>
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.desciption}>
                    Para começar. você precisa se cadastrar como professor na noss plataforma web.
                </Text>
            </ImageBackground>

            <RectButton style={styles.okButton}>
                <Text onPress={handleNavigateBack} style={styles.okButtonText}>Tudo Bem</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses;
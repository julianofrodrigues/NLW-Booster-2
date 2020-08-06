import React from 'react';
import { View, Text } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function Favorites(){
    return(
        <View style={styles.containe}>
            <PageHeader title='Meus Professores Favoritos' />
        </View>
    )
}

export default Favorites;
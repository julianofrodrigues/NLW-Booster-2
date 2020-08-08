import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';



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

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora { '' }
                    <Text style={styles.priceValue}>
                        R$ 28,00
                    </Text>
                </Text>
                <View style={styles.buttonContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;
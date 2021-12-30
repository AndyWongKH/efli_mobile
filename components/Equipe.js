import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Equipe = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.illustration} source={require('../assets/image/equipe_illu.jpeg')}/>
            <Text style={styles.h1}>L'équipe</Text>
            <Text style={styles.h2}>
                Notre équipe est composée de : 
            </Text>
            <Text style={styles.role}>
                Développeur du site web 
            </Text>
            <Text style={styles.liste}>
                Andy Brian WONG KOH HENG 
            </Text>
            <Text style={styles.liste}>
                Delphine KODONDI
            </Text>
            <Text style={styles.role}>
                Développeur de la base de données 
            </Text>
            <Text style={styles.liste}>
                Eliass DJEBBOUR
            </Text>
            <Text style={styles.liste}>
                Guershom GASSIHOUN
            </Text>
            <Text style={styles.liste}>
                Yijie YU
            </Text>

        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        marginHorizontal : 20,
        alignItems : 'center',
        justifyContent :'center',
    },
    illustration : {
        width : 250,
        height : 160,
        marginBottom : 10,
    },
    h1 : {
        fontWeight : 'bold',
        fontSize : 20,
        alignSelf : 'flex-start',
    },
    h2 : {
        fontWeight : 'bold',
        fontSize : 15,
        alignSelf : 'flex-start',
        marginBottom : 10,
    },
    texte:{
        textAlign : 'justify',
        marginVertical : 10,
    },
    liste : {
        
    },
    role : {
        fontWeight : 'bold',
        marginVertical : 7,
    }
});

export default Equipe;
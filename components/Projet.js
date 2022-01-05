import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Projet = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.illustration} source={require('../assets/image/projet_illu.jpg')}/>
            <Text style={styles.h1}>Le projet</Text>
            <Text style={styles.texte}>
                Notre entreprise, ELFI, a décidé de fournir aux clients un site web/app permettant d'inventer des recettes saines en fonction des aliments, de leurs âges, ou de leurs IMC, et de répondre aux besoins quotidiens de nos utilisateurs en matière de santé. Ainsi qu'un scanneur permettant de scanner les tickets de caisse pour enregistrer les produits disponibles chez vous.
            </Text>
            <Text style={styles.texte}>
                Dans l'entreprise, nous avons lancé des sections clés telles que "Recettes", "Information", pour populariser les connaissances en matière de santé et de fitness, partager les recettes entre les utilisateurs, améliorer la santé physique et la qualité de vie, et rendre tout le monde sain et fort.
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
    texte:{
        textAlign : 'justify',
        marginVertical : 10,
    },
});

export default Projet;
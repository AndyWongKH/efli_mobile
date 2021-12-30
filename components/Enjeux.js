import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Enjeux = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.illustration} source={require('../assets/image/enjeux_illu.jpg')}/>
            <Text style={styles.h1}>Les enjeux</Text>
            <Text style={styles.texte}>
                Selon la FAO, depuis la dernière décennie, la malnutrition connaît une hausse avec notamment en 2016, 38 millions de malnutris en plus. Les conséquences de ce mal sont nombreuses : anémie chez la femme en âge de procréer, retard de croissance chez l’enfant ou encore surpoids chez l’adulte.
            </Text>
            <Text style={styles.texte}>
                C’est pourquoi notre groupe a décidé de lutter à son échelle et avec ses propres moyens contre la malnutrition. Pour ce faire nous avons pris l’initiative de mettre en place un site web préventif, ELFI contre la malnutrition en mettant à la disposition des utilisateurs différentes rubriques apportant différentes informations quant au sujet abordé. Par exemple une rubrique définissant plus précisément les risques de la malnutrition, les mesures prises à l’échelle mondiale afin de lutter contre ce fléau, l’importance de se nourrir correctement et comment se nourrir correctement.
            </Text>
            <Text style={styles.texte}>
                Pour ce projet nous comptons aussi mettre en place une application pour les ménages. Cette application permettrait de pouvoir établir un inventaire des denrées alimentaires se trouvant présentes dans le ménage par le scan d’un ticket de caisse.
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

export default Enjeux;
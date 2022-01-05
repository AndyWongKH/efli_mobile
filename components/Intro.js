import * as React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const Intro = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Dans le cadre du Master 1 MIAGE IM, il nous a été demandé de réaliser un projet intégratif pour acquérir une connaissance dans différentes matières liées à la transformation numérique.
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container : {
        justifyContent : 'center',
        alignItems:'center',
        marginHorizontal : 20,
        marginVertical : 20,
    },
    text : {
        textAlign : 'justify'
        
    }
})

export default Intro;

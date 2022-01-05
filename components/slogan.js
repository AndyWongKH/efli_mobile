import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const Slogan = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.texte}>Mangez <Text style={styles.mieux}> mieux</Text></Text>
            <Text style={styles.texte}>Mangez <Text style={styles.sainement}> sainement</Text>.</Text>
        </View>
           
    )
};

const styles = StyleSheet.create({
    texte : {
        fontSize : 25,
        fontWeight :'bold',
        fontStyle : 'italic',
    },
    mieux:{
        color : '#2A9D8F',
        fontWeight :'bold',
        fontStyle : 'italic',
    },
    sainement:{
        color : '#F4A261',
        fontWeight :'bold',
        fontStyle : 'italic',
    },
    container:{
        marginTop : 127,
        marginLeft : 27,
    }
})

export default Slogan;
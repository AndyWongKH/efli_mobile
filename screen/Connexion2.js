import * as React from 'react';
import { Button, View, Text, StyleSheet,
         SafeAreaView,ScrollView, ImageBackground,
         TextInput, TouchableOpacity, Image, KeyboardAvoidingView
        } from 'react-native';

const Connexion = () => {
return (
    <View style={styles.container}>
        <View>
            <ImageBackground style={styles.background} source={require('../assets/image/banniere_connexion.jpg')}>
                <Image style={styles.logo} source = {require('../assets/image/logo.png')} />
            </ImageBackground>
        </View>

        <View style={styles.cadre} >
            <Text style={styles.h1}>Connectez-vous</Text>
            <View>
                <Text style={styles.label}>Pseudo</Text>
                <TextInput style={styles.input}/>

                <Text style={styles.label}>Mot de passe</Text>
                <TextInput secureTextEntry={true} style={styles.input}/>
                
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Connexion</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text>S'inscrire</Text>
                <Text>Mot de passe oublié ?</Text>
            </View>
            
        </View>
    </View>
)
};

const styles = StyleSheet.create({
    background:{
        width : 440,
        height : 400,
        alignItems : 'center',
    },
    logo : {
        width : 150,
        height : 115,
        marginTop : 111,
    },
    container : {
       justifyContent : 'center',
       alignItems : 'center',
       backgroundColor : 'white',
    },
    h1 : {
        fontSize : 20,
        fontWeight : 'bold',
        marginTop : 30,
        alignSelf : 'flex-start',
        fontStyle : 'italic',
        marginBottom: 43,
    },
    cadre : {
        backgroundColor : 'white',
        width : 425,
        padding : 15,
        position : 'absolute',
        top : 350,
        borderTopRightRadius : 50,
        borderTopLeftRadius : 50,
    },
    input : {
        borderWidth : 2,
        padding : 5,
        marginBottom : 15,
        borderRadius : 10,
        borderColor : '#2A9D8F',
        backgroundColor : 'white',
        paddingLeft : 10,
    },
    label : {
        fontSize : 15,
        marginBottom : 5,
        fontWeight : 'bold',
    }, 
    button : {
        backgroundColor : '#F4A261',
        borderRadius : 30,
        padding : 15,
        alignItems : 'center',
    },
    textButton : {
        color : 'white',
        fontSize : 24,
    }
});

export default Connexion; 
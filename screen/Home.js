import * as React from 'react';
import { Button, View, Text, StyleSheet,
         SafeAreaView,ScrollView, ImageBackground,
         TextInput, TouchableOpacity, Image,
        } from 'react-native';

import Slogan from '../components/slogan';
import Intro from '../components/Intro';
import Projet from '../components/Projet';
import Enjeux from '../components/Enjeux';
import Equipe from '../components/Equipe';

const Home = () => {
    return (
        <SafeAreaView>
            <View style={styles.navbar}>
                
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={styles.backgroundImage} source={require('../assets/image/background_home.jpg')}>
                        <Slogan/>
                    </ImageBackground>
                    <Intro/>
                    <Projet/>
                    <Enjeux/>
                    <Equipe/>
                </View>
            </ScrollView>
        </SafeAreaView>
        
        
    )
};

const styles = StyleSheet.create({
    // Header
    

    // Body
    backgroundImage:{
        width : 430,
        height : 720,
    },
    container : {
        backgroundColor : 'white',
        paddingBottom : 200,
    }
    
})
export default Home;
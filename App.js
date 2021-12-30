// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home';
import Connexion from './screen/Connexion';

function HomeScreen({navigation}) {
  return (
    <View>
      {/* _______________NAVIGATION BAR_______________ */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.menu}>
          <Image style={styles.menuLogo} source={require('./assets/icon/menu.png')}/>
        </TouchableOpacity>
        <TextInput style={styles.seacrh} placeholder='Rechercher ...' />
        <TouchableOpacity 
          style={styles.profil}
          onPress={() =>
            navigation.navigate('Connexion')
          }
        ></TouchableOpacity>
      </View>
      
      {/* _______________PAGE_D'ACCUEIL_______________ */}
      <Home/>
    </View>
  );
}

function ConnexionScreen({navigation}) {
  return (
    <View>
      <Connexion/>
      <TouchableOpacity 
      style={styles.back}
      onPress={() =>
      navigation.navigate('Home')
      }>
        <Image style={styles.arrow} source={require('./assets/icon/back.png')}/>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Connexion" component={ConnexionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ?________________________________STYLES___________________________________________________

const styles = StyleSheet.create({
  navbar:{
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    marginTop : 30,
    marginBottom : 10,
    marginHorizontal : 10,
  },
  menu : {
      width : 50,
      height : 50,
      backgroundColor : '#E76F51',
      borderRadius: 10,
      justifyContent : 'center',
      alignItems : 'center',
  },
  menuLogo:{
      tintColor : 'white',
  },
  profil : {
      width : 50,
      height : 50,
      backgroundColor : 'black',
      borderRadius : 50,
  },
  seacrh : {
      width: 200,
      padding : 5,
      paddingHorizontal : 20,
      borderWidth : 2,
      borderRadius : 20,
      borderColor : 'lightgray',
      backgroundColor : 'white',
  },
  back : {
    marginTop : 50,
    marginLeft : 25,
    position : 'absolute',
    width : 30,
    height : 30,
    backgroundColor : 'transparent',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 50,
  },
  arrow : {
    tintColor : 'white',
    
  },
})

export default App;
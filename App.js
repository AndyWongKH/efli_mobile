import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
  ImageBackground,
   
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Slogan from './components/slogan';
import Intro from './components/Intro';
import Projet from './components/Projet';
import Enjeux from './components/Enjeux';
import Equipe from './components/Equipe';

// ?___________________________SCREENS__________________________________

function HomeScreen({ navigation }) {
  return (
    
    <View>
    {/* NavBar */}
    <View style={homeStyles.navbar}>
      <TouchableOpacity style={homeStyles.menu}>
        <Image 
          style={homeStyles.menuLogo}
          source={require('./assets/icon/menu.png')}
        />
      </TouchableOpacity>

      <TextInput 
        style={homeStyles.seacrh}
        placeholder='Rechercher ...'
      />

      <TouchableOpacity 
        style={homeStyles.profil}
        onPress={() => navigation.navigate("Connexion")}
      >
        <Text style={homeStyles.initiale}>U</Text>
      </TouchableOpacity>
    </View>
    
    {/* Body */}
    <SafeAreaView>
            <ScrollView>
                <View style={homeStyles.container}>
                    <ImageBackground style={homeStyles.backgroundImage} source={require('./assets/image/background_home.jpg')}>
                        <Slogan/>
                    </ImageBackground>
                    <Intro/>
                    <Projet/>
                    <Enjeux/>
                    <Equipe/>
                </View>
            </ScrollView>
        </SafeAreaView>

    </View>
  )
};

function ConnexionScreen({ navigation }) {
  return (
    <View>
      <View style={ConnexionStyle.container}>
        <View>
            <ImageBackground style={ConnexionStyle.background} source={require('./assets/image/banniere_connexion.jpg')}>
                <Image style={ConnexionStyle.logo} source = {require('./assets/image/logo.png')} />

                <View style={ConnexionStyle.cadre} >
                    <Text style={ConnexionStyle.h1}>Connectez-vous</Text>
                    <View>
                        <Text style={ConnexionStyle.label}>Pseudo</Text>
                        <TextInput style={ConnexionStyle.input}/>

                        <Text style={ConnexionStyle.label}>Mot de passe</Text>
                        <TextInput secureTextEntry={true} style={ConnexionStyle.input}/>
                
                        <TouchableOpacity 
                          style={ConnexionStyle.button}
                          onPress={() => navigation.navigate("Utilisateur")}
                        >
                            <Text style={ConnexionStyle.textButton}>Connexion</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={ConnexionStyle.annexe}>
                        <TouchableOpacity>
                            <Text>S'inscrire</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Mot de passe oublié ?</Text>
                        </TouchableOpacity>
                    </View>
            
                </View>

            </ImageBackground>
        </View>

        
    </View>
    </View>
  )
};

function UtilisateurScreen({navigation}) {
  return (
    <View style={{flex : 1}}>
      {/* Partie foncé */}
      <View style={UserStyle.headerBox}>
        {/* Menu + Nom Utilisateur */}
        <View style={UserStyle.header}>
          <TouchableOpacity style={UserStyle.box}>
            <Image 
              style = {UserStyle.menuIcon}
              source={require('./assets/icon/menu.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image 
              style = {UserStyle.editProfil}
              source={require('./assets/icon/edit.png')}
            />
            <Text style={UserStyle.userName}>
              Utilisateur
            </Text>
          </TouchableOpacity>
          <View style={UserStyle.emptyBox}>
            {/* vide */}
          </View>
        </View>

        {/* IMC + Suggestion */}
        <View style={UserStyle.imcSugg}>
          <View style={UserStyle.imcBox}>
            <Text style = {UserStyle.imcText}>
              IMC
            </Text>
            <TouchableOpacity style={UserStyle.imcCadre}>
              <Text style={UserStyle.imcValue}>
                21.5
              </Text>
            </TouchableOpacity>
          </View>
          <View style={UserStyle.suggBox}>
            <Text style={UserStyle.suggText}>
              Suggestion
            </Text>
            <TouchableOpacity style={UserStyle.suggCadre}>
              {/* insert image here */}
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Partie claire */}
      <View style={UserStyle.background}>
        <TouchableOpacity 
          style={UserStyle.container}
          onPress={() => navigation.navigate("Inventaire")}
        >
          <Text style={UserStyle.title}>
            Mon Inventaire
          </Text>
          <View style={UserStyle.content}>
            <Text> extrait produit --------------------1</Text>
            <Text> extrait produit --------------------1</Text>
            <Text> extrait produit --------------------1</Text>
            <Text> extrait produit --------------------1</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={UserStyle.container}
          onPress={() => navigation.navigate("Recette")}
        >
          <Text style={UserStyle.title}>
            Mes Recettes
          </Text>
          <View style={UserStyle.content}>
            <Text> Recette enregistré </Text>
            <Text> Recette enregistré </Text>
            <Text> Recette enregistré </Text>
            <Text> Recette enregistré </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* NavBar */}
      <View style={UserStyle.bar}>
        <TouchableOpacity>
          <Image 
          style={UserStyle.icon}
          source={require('./assets/icon/edit2.png')}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image 
          style={UserStyle.icon}
          source={require('./assets/icon/qrCode.png')}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image 
          style={UserStyle.icon}
          source={require('./assets/icon/search.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  )
};

function InventaireScreen({navigation}) {
  return (
    <View style={{flex : 1, backgroundColor : '#264653'}}>
      {/* Partie foncé */}
      <View style={InventaireStyle.headerBox}>
        {/* Menu + Nom Utilisateur */}
        <View style={UserStyle.header}>
          <TouchableOpacity style={UserStyle.box}>
            <Image 
              style = {UserStyle.menuIcon}
              source={require('./assets/icon/menu.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image 
              style = {UserStyle.editProfil}
              source={require('./assets/icon/edit.png')}
            />
            <Text style={UserStyle.userName}>
              Utilisateur
            </Text>
          </TouchableOpacity>
          <View style={UserStyle.emptyBox}>
            {/* vide */}
          </View>
        </View>
      </View>
      <SafeAreaView style={InventaireStyle.content}>
        <ScrollView>
          <Text style={InventaireStyle.title}>
            Mon Inventaire
          </Text>
          <View style={InventaireStyle.filtreBox}>
            <Text style={InventaireStyle.filtreItems}>
              Affichage :
            </Text>
            <TouchableOpacity>
              <Text style={InventaireStyle.filtreItems}>Liste</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={InventaireStyle.filtreItems}>Cartes</Text>
            </TouchableOpacity>
          </View>
          
        </ScrollView>
      </SafeAreaView>
      {/* NavBar */}
      <View style={InventaireStyle.bar}>
        <TouchableOpacity>
          <Image 
          style={UserStyle.icon}
          source={require('./assets/icon/edit2.png')}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image 
          style={UserStyle.icon}
          source={require('./assets/icon/qrCode.png')}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image 
          style={UserStyle.icon}
          source={require('./assets/icon/search.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  )
} ;
function RecetteScreen({navigation}) {
  return (
    <View style={{flex : 1, backgroundColor : '#264653'}}>
      {/* Partie foncé */}
      <View style={InventaireStyle.headerBox}>
        {/* Menu + Nom Utilisateur */}
        <View style={UserStyle.header}>
          <TouchableOpacity style={UserStyle.box}>
            <Image 
              style = {UserStyle.menuIcon}
              source={require('./assets/icon/menu.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image 
              style = {UserStyle.editProfil}
              source={require('./assets/icon/edit.png')}
            />
            <Text style={UserStyle.userName}>
              Utilisateur
            </Text>
          </TouchableOpacity>
          <View style={UserStyle.emptyBox}>
            {/* vide */}
          </View>
        </View>
      </View>
      <SafeAreaView style={InventaireStyle.content}>
        <ScrollView>
          <Text style={InventaireStyle.title}>
            Mes Recettes
          </Text>
          <View style={InventaireStyle.filtreBox}>
            <Text style={InventaireStyle.filtreItems}>
              Affichage :
            </Text>
            <TouchableOpacity>
              <Text style={InventaireStyle.filtreItems}>Liste</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={InventaireStyle.filtreItems}>Cartes</Text>
            </TouchableOpacity>
          </View>
          
        </ScrollView>
      </SafeAreaView>
      {/* NavBar */}
      <View style={InventaireStyle.bar}>
        <TouchableOpacity>
          <Image 
          style={UserStyle.icon}
          source={require('./assets/icon/edit2.png')}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image 
          style={UserStyle.icon}
          source={require('./assets/icon/qrCode.png')}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image 
          style={UserStyle.icon}
          source={require('./assets/icon/search.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  )
};
// ?___________________________STACKS___________________________________

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Connexion" component={ConnexionScreen} />
        <Stack.Screen name="Utilisateur" component={UtilisateurScreen} />
        <Stack.Screen name="Inventaire" component={InventaireScreen} />
        <Stack.Screen name="Recette" component={RecetteScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

// ?___________________________Styles___________________________________

const homeStyles = StyleSheet.create({
  // Style NavBar
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  menu: {
    width: 50,
    height: 50,
    backgroundColor: "#E76F51",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  menuLogo: {
    tintColor: "white",
  },
  profil: {
    width: 50,
    height: 50,
    backgroundColor: "#f4a261",
    borderRadius: 50,
    justifyContent : 'center',
    alignItems : 'center',
  },
  seacrh: {
    width: 200,
    padding: 5,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "lightgray",
    backgroundColor: "white",
  },
  initiale : {
    fontWeight : 'bold',
    fontSize : 25,
    color : '#fff'
  },

  // style boby
  backgroundImage:{
    width : 430,
    height : 720,
  },
  container : {
    backgroundColor : 'white',
    paddingBottom : 300,
  },
})
const ConnexionStyle = StyleSheet.create ({
  background:{
    width : 440,
     height : 750,
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
     fontSize : 25,
     fontWeight : 'bold',
     marginTop : 20,
     alignSelf : 'flex-start',
     fontStyle : 'italic',
     marginBottom: 43,
 },
 cadre : {
     backgroundColor : 'white',
     width : 425,
     padding : 50,
     marginTop :80,
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
},
annexe:{
    flexDirection : 'row',
    marginTop : 10,
    padding : 15,
    alignItems : 'center',
    justifyContent : 'space-evenly',
    paddingBottom : 300,
},
})
const UserStyle = StyleSheet.create ({
  // Style foncé partie supérieure
  headerBox : {
    backgroundColor : '#264653',
    height : '40%',
    flex : 0.4,
  },

  // Style Menu + Nom utilisateur
  header : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    marginHorizontal : 20,
    marginTop : 40,
  },
  box : {
    backgroundColor : '#e76f51',
    alignItems : 'center',
    justifyContent : 'center',
    width : 60,
    height : 60,
    borderRadius : 10,
  },
  menuIcon : {
    tintColor : 'white',
  },
  emptyBox : {
    width : 60,
    height : 60,
  }, 
  userName : {
    fontSize : 30,
    fontWeight : '100',
    color : 'white',
    letterSpacing : 2,
  },
  editProfil : {
    tintColor : 'white',
    marginLeft : 150,
    width : 15,
    height : 15
  },

  // Style Zone IMC + Suggestion
  imcSugg : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-around',
    marginTop : 25,
  },


  // Style IMC
  imcBox : {
    // backgroundColor : 'blue',
  },
  imcText : {
    fontSize : 20,
    fontWeight : 'bold',
    color : 'white',
    marginLeft : 10,
    marginBottom : 5,
  },
  imcCadre : {
    alignItems:'center',
    justifyContent : 'center',
    width : 113,
    height : 100,
    backgroundColor : '#2A9d8f',
    borderColor : 'white',
    borderWidth : 3,
    borderRadius : 15,
    borderStyle : 'solid',
  },
  imcValue : {
    color : 'white',
    fontSize : 40,
  },

  // Style Suggestion
  suggBox : {

  },
  suggCadre : {
    width : 145,
    height : 181,
    backgroundColor : 'white',
    borderRadius : 15,
  },
  suggText : {
    fontSize : 15,
    color : 'white',
    fontWeight : 'bold',
    marginBottom : 5,
    marginLeft : 10,
  },

  // Style body
  background : {
    backgroundColor : 'rgba(42, 157, 143, 0.05)',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems:'center',
    flex : 0.52,
  },
  container : {
    backgroundColor : 'white',
    borderRadius : 15,
    width : '90%',
    height : 184,
    marginVertical : 30,
    padding: 15,
  },
  title : {
    color : '#264653',
    fontSize : 20,
    fontWeight : 'bold',
  },
  content : {
    width : '100%',
    justifyContent : 'center',
    marginVertical : 20,
  },

  // Style Bottom Nav Bar
  bar : {
    flexDirection : 'row',
    justifyContent : 'space-around',
    flex : 0.08,
    marginTop : 15,
  },
  icon : {
    tintColor : '#264653',
  },
})
const InventaireStyle = StyleSheet.create({
  headerBox : {
    height : '20%',
    flex : 0.2,
  },
  bar : {
    backgroundColor : 'white',
    flexDirection : 'row',
    justifyContent : 'space-around',
    flex : 0.08,
    marginTop : 0,
  },
  content : {
    backgroundColor : 'white',
    flex : 0.72,
    borderTopLeftRadius : 15,
    borderTopRightRadius : 15,
    
  },
  title : {
    fontSize : 30,
    color : '#264653',
    margin : 20,
  },
  filtreBox : {
    flexDirection : 'row',
    marginHorizontal : 20,
    marginBottom : 0
  },
  filtreItems : {
    marginHorizontal : 15,
  },
})
// !____________________________________________________________________
export default App;
  

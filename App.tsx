  
  import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';

  
  import Login from './login/login';
  import Register from './login/register';
  import Home from './home/home';
  import MoviesScreen from './peliculas/Movies';
  import MoviesCreate from './peliculas/components/MoviesCreate';
  import ScenesScreen from './Escenas/ecenas';
  import ScenesCreate from './Escenas/components/ScenesCreate';
  import CharacterCreate from './personajes/components/CharactersCeate';
  import CharacterScreen from './personajes/Characters';
  import MoviesEdit from './peliculas/components/MoviesEdit';
  import ScenesEdit from './Escenas/components/SceneEdit';
  import CharacterEdit from './personajes/components/CharactersEdit';
  

  export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
    MoviesScreen: undefined;
    MoviesCreate: undefined;
    ScenesScreen: { movieId: number; movieTitle: string }; // Definición de ruta con parámetros
    ScenesCreate: { movieId: number }; // Definición de ruta con parámetros
    CharactersScreen: { sceneId: number; sceneTitle: string };
    CharactersCreate: { sceneId: number };
    MoviesEdit: { movieId: number }; 
    SceneEdit: { sceneId: number };   
    CharacterEdit: { characterId: number }; 
  }
  

  const Stack = createStackNavigator<RootStackParamList>();

  const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MoviesScreen" component={MoviesScreen} />
          <Stack.Screen name="MoviesCreate" component={MoviesCreate} />
          <Stack.Screen name="MoviesEdit" component={MoviesEdit} /> 
          <Stack.Screen name="ScenesScreen" component={ScenesScreen} />
          <Stack.Screen name="ScenesCreate" component={ScenesCreate} />
          <Stack.Screen name="SceneEdit" component={ScenesEdit} />
          <Stack.Screen name="CharactersScreen" component={CharacterScreen} />
          <Stack.Screen name="CharactersCreate" component={CharacterCreate} />
          <Stack.Screen name="CharacterEdit" component={CharacterEdit} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  export default App;

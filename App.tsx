// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home/home';
import MoviesScreen from './peliculas/Movies';
import MoviesCreate from './peliculas/components/MoviesCreate';
import ScenesScreen from './Escenas/ecenas';
import ScenesCreate from './Escenas/components/ScenesCreate';
import CharacterCreate from './personajes/components/CharactersCeate';
import CharacterScreen from './personajes/Characters';

export type RootStackParamList = {
  Home: undefined;
  MoviesScreen: undefined;
  MoviesCreate: undefined;
  ScenesScreen: undefined;
  ScenesCreate: undefined;
  CharacterScreen: undefined;
  CharacterCreate: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MoviesScreen" component={MoviesScreen} />
        <Stack.Screen name="MoviesCreate" component={MoviesCreate} />
        <Stack.Screen name="ScenesScreen" component={ScenesScreen} />
        <Stack.Screen name="ScenesCreate" component={ScenesCreate} />
        <Stack.Screen name="CharacterScreen" component={CharacterScreen} />
        <Stack.Screen name="CharacterCreate" component={CharacterCreate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

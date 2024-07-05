  // Movies/Movies.tsx
  import React from 'react';
  import { View, StyleSheet } from 'react-native';
  import MoviesHeader from './components/MoviesHeader';
  import MoviesBody from './components/MoviesBody';
  import MoviesFooter from './components/MoviesFooter';

  const movies = [
    {
      id: '1',
      title: 'Jurassic Park',
      director: 'Steven Spielberg',
      duration: '2h 7m',
    },
    {
      id: '2',
      title: 'The Lost World: Jurassic Park',
      director: 'Steven Spielberg',
      duration: '2h 9m',
    },
    {
      id: '3',
      title: 'Jurassic Park',
      director: 'Steven Spielberg',
      duration: '2h 7m',
    },
    {
      id: '4',
      title: 'The Lost World: Jurassic Park',
      director: 'Steven Spielberg',
      duration: '2h 9m',
    },
    // Agrega más películas aquí
  ];

  const MoviesScreen = () => {
    return (
      <View style={styles.container}>
        <MoviesHeader />
        <MoviesBody movies={movies} />
        <MoviesFooter />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });

  export default MoviesScreen;

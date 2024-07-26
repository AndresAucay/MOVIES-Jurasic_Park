import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import MovieCard from './MoviesCard';

interface Movie {
  id: number;
  title: string;
  timeMovies: string;
  director: string;
}

interface MoviesBodyProps {
  movies: Movie[];
}

const MoviesBody: React.FC<MoviesBodyProps> = ({ movies }) => {
  const handleEdit = (movieId: number) => {
    // Lógica para editar
  };

  const handleDelete = (movieId: number) => {
    // Lógica para eliminar
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          director={movie.director}
          duration={movie.timeMovies}
          onEdit={() => handleEdit(movie.id)}
          onDelete={() => handleDelete(movie.id)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'transparent',
    height: 2500,
  },
});

export default MoviesBody;

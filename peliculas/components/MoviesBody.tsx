    // Movies/components/MoviesBody.tsx
    import React from 'react';
    import { View, ScrollView, StyleSheet } from 'react-native';
    import MovieCard from './MoviesCard';

    interface Movie {
    id: string;
    title: string;
    director: string;
    duration: string;
    }

    interface MoviesBodyProps {
    movies: Movie[];
    }

    const MoviesBody: React.FC<MoviesBodyProps> = ({ movies }) => {
    const handleEdit = (movieId: string) => {
        // Lógica para editar
    };

    const handleDelete = (movieId: string) => {
        // Lógica para eliminar
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
        {movies.map((movie) => (
            <MovieCard
            key={movie.id}
            title={movie.title}
            director={movie.director}
            duration={movie.duration}
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
        backgroundColor:'black',
        height:1000
    },
    });

    export default MoviesBody;

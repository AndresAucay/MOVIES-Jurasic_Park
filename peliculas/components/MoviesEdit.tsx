    import React, { useState, useEffect } from 'react';
    import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
    import { useNavigation, useRoute } from '@react-navigation/native';
    import { NavigationProp, RouteProp } from '@react-navigation/native';
    import { RootStackParamList } from '../../App';

    const MoviesEdit = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, 'MoviesEdit'>>();
    const { movieId } = route.params;

    // Estados para los campos de entrada
    const [title, setTitle] = useState('');
    const [timeMovies, setTimeMovies] = useState('');
    const [director, setDirector] = useState('');

    useEffect(() => {
        // Función para obtener los datos de la película
        const fetchMovieData = async () => {
        try {
            const response = await fetch(`http://10.0.1.133:8081/movies/${movieId}`);
            if (response.ok) {
            const movieData = await response.json();
            setTitle(movieData.title);
            setTimeMovies(movieData.time_movies);
            setDirector(movieData.director);
            } else {
            throw new Error('Failed to fetch movie data');
            }
        } catch (error) {
            console.error('Error fetching movie data:', error);
            Alert.alert('Error', 'No se pudo obtener los datos de la película');
        }
        };

        fetchMovieData();
    }, [movieId]);

    const handleUpdate = async () => {
        if (!title || !timeMovies || !director) {
        Alert.alert('Error', 'Todos los campos son obligatorios');
        return;
        }

        const updatedMovie = {
        title,
        timeMovies,
        director,
        };

        try {
        const response = await fetch(`http://10.0.1.133:8081/movies/${movieId}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedMovie),
        });

        if (response.ok) {
            navigation.navigate('MoviesScreen');
            Alert.alert('Éxito', 'Película actualizada exitosamente.');
        } else {
            const errorText = await response.text();
            throw new Error(`Network response was not ok. Status: ${response.status}. ${errorText}`);
        }
        } catch (error) {
        console.error('Error updating movie:', error);
        Alert.alert('Error', 'Hubo un problema al actualizar la película');
        }
    };

    return (
        <View style={styles.container}>
        <Text style={styles.header}>Editar Película</Text>
        <TextInput
            style={styles.input}
            placeholder="Nombre de la película"
            placeholderTextColor="#aaa"
            value={title}
            onChangeText={setTitle}
        />
        <View style={styles.horizontalContainer}>
            <TextInput
            style={styles.smallInput}
            placeholder="Duración"
            placeholderTextColor="#aaa"
            value={timeMovies}
            onChangeText={setTimeMovies}
            keyboardType="numeric"
            />
            <TextInput
            style={styles.smallInput}
            placeholder="Director"
            placeholderTextColor="#aaa"
            value={director}
            onChangeText={setDirector}
            />
        </View>
        <Pressable style={styles.button} onPress={handleUpdate}>
            <Text style={styles.buttonText}>Actualizar Película</Text>
        </Pressable>
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#e36b2c', // Color rojo oscuro
        gap: 30,
        justifyContent: 'center',
    },
    header: {
        padding: 10,
        fontSize: 44,
        fontWeight: 'bold',
        marginBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        paddingRight: 100,
        width: '100%',
        color: 'white',
    },
    input: {
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        marginBottom: 20,
        paddingHorizontal: 20,
        color: 'white',
    },
    horizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        height: 50,
    },
    smallInput: {
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        paddingHorizontal: 10,
        flex: 1,
        marginRight: 10,
        color: 'white',
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    });

    export default MoviesEdit;

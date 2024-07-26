  import React, { useState } from 'react';
  import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import { NavigationProp } from '@react-navigation/native';
  import { RootStackParamList } from '../../App';

  const MoviesCreate = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    // Estados para los campos de entrada
    const [title, setTitle] = useState('');
    const [timeMovies, setTimeMovies] = useState('');
    const [director, setDirector] = useState('');

    const handleCreate = async () => {
      // Validación básica
      if (!title || !timeMovies || !director) {
        Alert.alert('Error', 'Todos los campos son obligatorios');
        return;
      }

      // Preparar los datos para enviar
      const newMovie = {
        title,
        timeMovies,
        director,
      };

      try {
        const response = await fetch('http://10.0.1.133:8081/movies', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newMovie),
        });

        if (response.ok) {
          const result = await response.json();
          if (response.status === 201) { // Cambia a 201 para indicar éxito en la creación
            navigation.navigate('MoviesScreen');
            Alert.alert('Éxito', 'Película creada exitosamente.');
          }
        } else {
          const errorText = await response.text();
          throw new Error(`Network response was not ok. Status: ${response.status}. ${errorText}`);
        }
      } catch (error) {
        console.error('Error creating movie:', error);
        Alert.alert('Error', 'Hubo un problema al crear la película');
      }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.header}>FILMS</Text>
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
        <Pressable style={styles.button} onPress={handleCreate}>
          <Text style={styles.buttonText}>Crear Película</Text>
        </Pressable>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'black',
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

  export default MoviesCreate;

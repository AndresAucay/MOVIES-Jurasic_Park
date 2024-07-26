  import React from 'react';
  import { View, Text, StyleSheet, Button, Alert } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import { NavigationProp } from '@react-navigation/native';
  import { RootStackParamList } from '../../App';
  import { deleteMovie } from '../../api/deleteService';// Asegúrate de que la ruta sea correcta

  interface MovieCardProps {
    id: number;
    title: string;
    director: string;
    duration: string;
    onEdit: () => void; // Cambiar esta línea
    onDelete: () => void;
  }

  const MovieCard: React.FC<MovieCardProps> = ({ id, title, director, duration, onEdit, onDelete }) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    // Actualizar onEdit para usar la navegación
    const handleEdit = () => {
      navigation.navigate('MoviesEdit', { movieId: id });
    };

    const handlePress = () => {
      navigation.navigate('ScenesScreen', { movieId: id, movieTitle: title });
    };

    const handleDelete = async () => {
      Alert.alert(
        'Confirmar Eliminación',
        '¿Estás seguro de que quieres eliminar esta película?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Eliminar',
            onPress: async () => {
              try {
                await deleteMovie(id);
                Alert.alert('Éxito', 'Película eliminada exitosamente.');
                onDelete(); // Llama a la función onDelete pasada como prop
              } catch (error) {
                Alert.alert('Error', 'Hubo un problema al eliminar la película.');
              }
            },
          },
        ],
        { cancelable: true }
      );
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>Director: {director}</Text>
        <Text style={styles.info}>Duración: {duration}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Editar" onPress={handleEdit} color="green" />
          <Button title="Eliminar" onPress={handleDelete} color="red" />
        </View>
        <Button title="Ver Escenas" onPress={handlePress} />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 15,
      margin: 15,
      opacity: 0.8,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    info: {
      fontSize: 16,
      marginBottom: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      backgroundColor: 'transparent',
      paddingHorizontal: 30,
      marginVertical: 15,
    },
  });

  export default MovieCard;

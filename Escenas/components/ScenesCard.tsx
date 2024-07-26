    import React from 'react';
    import { View, Text, StyleSheet, Button, Alert } from 'react-native';
    import { useNavigation } from '@react-navigation/native';
    import { NavigationProp } from '@react-navigation/native';
    import { RootStackParamList } from '../../App';
    import { deleteScene } from '../../api/deleteService'; // Asegúrate de que la ruta sea correcta

    interface SceneCardProps {
        id: number;
        title: string;
        budget: number;
        duration: number;
        onEdit: () => void;
        onDelete: () => void;
    }

    const SceneCard: React.FC<SceneCardProps> = ({ id, title, budget, duration, onEdit, onDelete }) => {
        const navigation = useNavigation<NavigationProp<RootStackParamList>>();

        const handlePress = () => {
            navigation.navigate('CharactersScreen', { sceneId: id, sceneTitle: title });
        };

        const handleEditPress = () => {
            navigation.navigate('SceneEdit', { sceneId: id });
        };

        const handleDelete = async () => {
            try {
                await deleteScene(id);
                Alert.alert('Éxito', 'Escena eliminada exitosamente.');
                onDelete(); 
            } catch (error) {
                Alert.alert('Error', 'Hubo un problema al eliminar la escena.');
            }
        };

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.info}>Presupuesto: {budget} dólares</Text>
                <Text style={styles.info}>Duración: {duration} minutos</Text>
                <View style={styles.buttonContainer}>
                    <Button title="Editar" onPress={handleEditPress} color="green" />
                    <Button title="Eliminar" onPress={handleDelete} color="red" />
                </View>
                <Button title="Ver Personajes" onPress={handlePress} />
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
            opacity: 0.7,
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

    export default SceneCard;

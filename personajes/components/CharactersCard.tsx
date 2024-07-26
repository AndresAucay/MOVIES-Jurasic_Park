    import React from 'react';
    import { View, Text, StyleSheet, Button, Alert } from 'react-native';
    import { useNavigation } from '@react-navigation/native';
    import { NavigationProp } from '@react-navigation/native';
    import { RootStackParamList } from '../../App';
    import { deleteCharacter } from '../../api/deleteService';

    interface CharacterCardProps {
        id: number;
        name: string;
        cost: number;
        actor: string;
        onEdit: () => void;
        onDelete: () => void;
    }

    const CharacterCard: React.FC<CharacterCardProps> = ({ id, name, cost, actor, onEdit, onDelete }) => {
        const navigation = useNavigation<NavigationProp<RootStackParamList>>();

        const handleEditPress = () => {
            navigation.navigate('CharacterEdit', { characterId: id });
        };

        const handleDelete = async () => {
            try {
                await deleteCharacter(id);
                Alert.alert('Éxito', 'Personaje eliminado exitosamente.');
                onDelete(); // Llama a la función onDelete pasada como prop
            } catch (error) {
                Alert.alert('Error', 'Hubo un problema al eliminar el personaje.');
            }
        };

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.info}>Costo: {cost} dólares</Text>
                <Text style={styles.info}>Actor: {actor}</Text>
                <View style={styles.buttonContainer}>
                    <Button title="Editar" onPress={handleEditPress} color="green" />
                    <Button title="Eliminar" onPress={handleDelete} color="red" />
                </View>
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

    export default CharacterCard;

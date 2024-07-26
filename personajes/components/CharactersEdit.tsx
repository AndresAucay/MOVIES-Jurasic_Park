    import React, { useState, useEffect } from 'react';
    import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
    import { useNavigation, useRoute } from '@react-navigation/native';
    import { NavigationProp, RouteProp } from '@react-navigation/native';
    import { RootStackParamList } from '../../App';

    const CharacterEdit = () => {
        const navigation = useNavigation<NavigationProp<RootStackParamList>>();
        const route = useRoute<RouteProp<RootStackParamList, 'CharacterEdit'>>();
        const { characterId } = route.params;

        // Estados para los campos de entrada
        const [name, setName] = useState<string>('');
        const [cost, setCost] = useState<number | string>('');
        const [actor, setActor] = useState<string>('');

        useEffect(() => {
            // Función para obtener los datos del personaje
            const fetchCharacterData = async () => {
                try {
                    const response = await fetch(`http://10.0.1.133:8081/characters/${characterId}`);
                    if (response.ok) {
                        const characterData = await response.json();
                        setName(characterData.nameCharacter || '');
                        setCost(characterData.cost || '');
                        setActor(characterData.actor || '');
                    } else {
                        throw new Error('Failed to fetch character data');
                    }
                } catch (error) {
                    console.error('Error fetching character data:', error);
                    Alert.alert('Error', 'No se pudo obtener los datos del personaje');
                }
            };

            fetchCharacterData();
        }, [characterId]);

        const handleUpdate = async () => {
            if (!name || !cost || !actor) {
                Alert.alert('Error', 'Todos los campos son obligatorios');
                return;
            }

            const updatedCharacter = {
                nameCharacter: name,
                cost,
                actor,
            };

            try {
                const response = await fetch(`http://10.0.1.133:8081/characters/${characterId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedCharacter),
                });

                if (response.ok) {
                    Alert.alert('Éxito', 'Personaje actualizado exitosamente.');
                    navigation.navigate('CharactersScreen');
                } else {
                    const errorText = await response.text();
                    throw new Error(`Network response was not ok. Status: ${response.status}. ${errorText}`);
                }
            } catch (error) {
                console.error('Error updating character:', error);
                Alert.alert('Error', 'Hubo un problema al actualizar el personaje');
            }
        };

        return (
            <View style={styles.container}>
                <Text style={styles.header}>Editar Personaje</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre del personaje"
                    placeholderTextColor="#aaa"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Costo"
                    placeholderTextColor="#aaa"
                    value={cost.toString()}
                    onChangeText={(text) => setCost(Number(text))}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Actor"
                    placeholderTextColor="#aaa"
                    value={actor}
                    onChangeText={setActor}
                />
                <Pressable style={styles.button} onPress={handleUpdate}>
                    <Text style={styles.buttonText}>Actualizar Personaje</Text>
                </Pressable>
            </View>
        );
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: '#003366', // Color rojo oscuro
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

    export default CharacterEdit;

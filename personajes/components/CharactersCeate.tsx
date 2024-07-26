    import React, { useState } from 'react';
    import { View, StyleSheet, Text, TextInput, Pressable, Alert } from 'react-native';
    import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
    import { RootStackParamList } from '../../App';
    import { StackNavigationProp } from '@react-navigation/stack';

    type CharactersCreateNavigationProp = StackNavigationProp<RootStackParamList, 'CharactersCreate'>;
    type CharactersCreateRouteProp = RouteProp<RootStackParamList, 'CharactersCreate'>;

    const CharactersCreate: React.FC = () => {
    const navigation = useNavigation<CharactersCreateNavigationProp>();
    const route = useRoute<CharactersCreateRouteProp>();
    const { sceneId } = route.params;

    const [nameCharacter, setNameCharacter] = useState('');
    const [cost, setCost] = useState('');
    const [actor, setActor] = useState('');

    const handleCreateCharacter = async () => {
        try {
        const response = await fetch('http://10.0.1.133:8081/characters', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            nameCharacter,
            cost: parseInt(cost, 10),
            actor,
            sceneId,
            }),
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Network response was not ok');
        }

        Alert.alert('Éxito', 'Personaje creado exitosamente.');
        navigation.goBack();
        } catch (error) {
        Alert.alert('Error', error.message || 'Hubo un problema al crear el personaje.');
        console.error('Error creating character:', error);
        }
    };

    return (
        <View style={styles.container}>
        <Text style={styles.header}>PERSONAJES</Text>
        <TextInput
            style={styles.input}
            placeholder="Nombre del Personaje"
            placeholderTextColor="#aaa"
            value={nameCharacter}
            onChangeText={setNameCharacter}
        />
        <View style={styles.horizontalContainer}>
            <TextInput
            style={styles.smallInput}
            placeholder="Costo"
            keyboardType="numeric"
            placeholderTextColor="#aaa"
            value={cost}
            onChangeText={setCost}
            />
            <TextInput
            style={styles.smallInput}
            placeholder="Actor"
            placeholderTextColor="#aaa"
            value={actor}
            onChangeText={setActor}
            />
        </View>
        <Pressable style={styles.button} onPress={handleCreateCharacter}>
            <Text style={styles.buttonText}>Crear Personaje</Text>
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
        fontSize: 38,
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

    export default CharactersCreate;

import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type ScenesCreateNavigationProp = StackNavigationProp<RootStackParamList, 'ScenesCreate'>;
type ScenesCreateRouteProp = RouteProp<RootStackParamList, 'ScenesCreate'>;

const ScenesCreate: React.FC = () => {
    const navigation = useNavigation<ScenesCreateNavigationProp>();
    const route = useRoute<ScenesCreateRouteProp>();
    const { movieId } = route.params;

    const [nameScene, setNameScene] = useState('');
    const [budget, setBudget] = useState('');
    const [minutes, setMinutes] = useState('');

    const handleSave = async () => {
        if (!nameScene || !budget || !minutes) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        const newScene = {
            nameScene,
            budget: parseInt(budget, 10),
            minutes: parseInt(minutes, 10),
            movieId,
        };

        try {
            const response = await fetch('http://10.0.1.133:8081/scenes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newScene),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Network response was not ok');
            }

            navigation.goBack();
        } catch (error) {
            console.error('Error creating scene:', error);
            Alert.alert('Error', 'Hubo un problema al crear la escena');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>ESCENAS</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre de la escena"
                placeholderTextColor="#aaa"
                value={nameScene}
                onChangeText={setNameScene}
            />
            <View style={styles.horizontalContainer}>
                <TextInput
                    style={styles.smallInput}
                    placeholder="Presupuesto"
                    placeholderTextColor="#aaa"
                    value={budget}
                    onChangeText={setBudget}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.smallInput}
                    placeholder="Minutos"
                    placeholderTextColor="#aaa"
                    value={minutes}
                    onChangeText={setMinutes}
                    keyboardType="numeric"
                />
            </View>
            <Pressable style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Crear Escena</Text>
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

export default ScenesCreate;

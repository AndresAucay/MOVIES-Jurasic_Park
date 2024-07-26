    import React, { useEffect, useState } from 'react';
    import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
    import axios from 'axios';
    import { useNavigation } from '@react-navigation/native';
    import { NavigationProp } from '@react-navigation/native';
    import { RootStackParamList } from '../../App';

    interface SceneEditProps {
        route: {
            params: {
                sceneId: number;
            };
        };
    }

    const SceneEdit: React.FC<SceneEditProps> = ({ route }) => {
        const { sceneId } = route.params;
        const [scene, setScene] = useState<any>(null);
        const [nameScene, setNameScene] = useState<string>('');
        const [budget, setBudget] = useState<number>(0);
        const [minutes, setMinutes] = useState<number>(0);
        const navigation = useNavigation<NavigationProp<RootStackParamList>>();

        useEffect(() => {
            const fetchScene = async () => {
                try {
                    const response = await axios.get(`http://10.0.1.133:8081/scenes/${sceneId}`);
                    setScene(response.data);
                    setNameScene(response.data.nameScene);
                    setBudget(response.data.budget);
                    setMinutes(response.data.minutes);
                } catch (error) {
                    console.error('Error fetching scene:', error);
                }
            };

            fetchScene();
        }, [sceneId]);

        const handleSave = async () => {
            try {
                await axios.put(`http://10.0.1.133:8081/scenes/${sceneId}`, {
                    nameScene,
                    budget,
                    minutes,
                });
                Alert.alert('Éxito', 'Escena actualizada exitosamente.', [
                    {
                        text: 'OK',
                        onPress: () => navigation.goBack(),
                    },
                ]);
            } catch (error) {
                Alert.alert('Error', 'Hubo un problema al actualizar la escena.');
                console.error('Error updating scene:', error);
            }
        };

        if (!scene) return <Text>Loading...</Text>;

        return (
            <View style={styles.container}>
                <Text style={styles.header}> Editar Escena</Text>
                <TextInput
                    value={nameScene}
                    placeholderTextColor="#aaa"
                    onChangeText={setNameScene}
                    placeholder="Nombre de la escena"
                    style={styles.input}
                />
                <View style={styles.horizontalContainer}>
                    <TextInput
                        value={budget.toString()}
                        onChangeText={(text) => setBudget(Number(text))}
                        placeholder="Budget"
                        placeholderTextColor="#aaa"
                        keyboardType="numeric"
                        style={styles.smallInput}
                    />
                    <TextInput
                        value={minutes.toString()}
                        onChangeText={(text) => setMinutes(Number(text))}
                        placeholder="Minutes"
                        placeholderTextColor="#aaa"
                        keyboardType="numeric"
                        style={styles.smallInput}
                    />
                </View>
                <Pressable style={styles.button} onPress={handleSave}>
                    <Text style={styles.buttonText}>Actualizar Escena</Text>
                </Pressable>
            </View>
        );
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: '#2F4F4F', // Color rojo oscuro
            gap: 25,
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
            paddingRight: 10,
            width: '100%',
            color: 'black',
        },
        input: {
            height: 40,
            borderColor: 'black',
            borderWidth: 2,
            marginBottom: 20,
            paddingHorizontal: 30,
            color: 'white',
        },
        horizontalContainer: {
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 0,
            height: 50,
        },
        smallInput: {
            height: 40,
            borderColor: 'black',
            borderWidth: 2,
            paddingHorizontal: 10,
            flex: 1,
            marginRight: 10,
            color: 'white',
        },
        button: {
            backgroundColor: 'black',
            padding: 10,
            alignItems: 'center',
            borderRadius: 5,
        },
        buttonText: {
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
        },
    });

    export default SceneEdit;

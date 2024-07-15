        // Movies/components/MoviesCreate.tsx
        import React from 'react';
        import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
        import { useNavigation } from '@react-navigation/native';
        import { NavigationProp } from '@react-navigation/native';
        import { RootStackParamList } from '../../App';

        const CharacterCreate = () => {
        const navigation = useNavigation<NavigationProp<RootStackParamList>>();

        const handleCreate = () => {
            // Aquí puedes manejar la lógica de creación de personaje
            // Luego navegar de regreso a la pantalla de películas (MoviesScreen)
            navigation.navigate('ScenesScreen');
        };

        return (
            <View style={styles.container}>
            <Text style={styles.header}>PERSONAJES</Text>
            <View style={styles.horizontalContainer}></View>
            <TextInput style={styles.input} placeholder="Nombre del personaje" placeholderTextColor="#aaa" />
            <View style={styles.horizontalContainer}>
                <TextInput style={styles.smallInput} placeholder="Costo" placeholderTextColor="#aaa" />
                <TextInput style={styles.smallInput} placeholder="Edad" placeholderTextColor="#aaa" />
            </View>
            <Pressable style={styles.button} onPress={handleCreate}>
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
            fontSize: 44,
            fontWeight: 'bold',
            marginBottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            paddingRight: 100,
            width: 1000,
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

        export default CharacterCreate;

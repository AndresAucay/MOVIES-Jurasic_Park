    import React, { useState } from 'react';
    import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
    import BackgroundRegister from './componets/backgroundRegister'; // Asegúrate de que la ruta sea correcta
    import axios from 'axios'; 

    const RegisterScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        axios.post('http://10.0.1.133:8081/auth/register', {
        firstName: firstName,
        lastName: lastName,
        username,   
        password,
        })
        .then(response => {
        Alert.alert('Registro exitoso', 'Tu cuenta ha sido creada con éxito.');
        
        navigation.navigate('Login');
        })
        .catch(error => {
        
        if (error.response) {
            Alert.alert('Error', `Hubo un problema al registrar tu cuenta: ${error.response.data.message || 'Error desconocido'}`);
        } else if (error.request) {
            
            Alert.alert('Error', 'No se recibió respuesta del servidor.');
        } else {
            
            Alert.alert('Error', `Hubo un problema al hacer la solicitud: ${error.message}`);
        }
        console.error(error);
        });
    };

    return (
        <View style={styles.container}>
        <BackgroundRegister />
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.titleContainer}>
            <Image
                source={{ uri: 'https://i.pinimg.com/736x/43/4f/97/434f9785a8ce6e90a48d504c7f333c77.jpg' }} 
                style={styles.circleImage}
            />
            <Text style={styles.title}>REGISTRO</Text>
            </View>
            <View style={styles.formContainer}>
            <TextInput
                placeholder="Nombre"
                value={firstName}
                onChangeText={setFirstName}
                style={styles.input}
            />
            <TextInput
                placeholder="Apellido"
                value={lastName}
                onChangeText={setLastName}
                style={styles.input}
            />
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                placeholder="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>REGÍSTRATE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 40,
        backgroundColor: 'black',
        opacity: 1,
    },
    title: {
        fontSize: 32,
        color: '#39FF14',
        marginVertical: 20,
    },
    circleImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 20,
        borderWidth: 0.51,
        borderColor: 'white',
    },
    formContainer: {
        backgroundColor: 'transparent',
        padding: 20,
        borderRadius: 10,
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 15,
        opacity: 0.7,
    },
    button: {
        backgroundColor: '#39FF14',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
    loginText: {
        color: '#39FF14',
        textAlign: 'center',
    },
    });

    export default RegisterScreen;

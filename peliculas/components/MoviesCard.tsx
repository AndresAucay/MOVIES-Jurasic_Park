    // Movies/components/MovieCard.tsx
    import React from 'react';
    import { View, Text, StyleSheet, Button } from 'react-native';
    import { useNavigation } from '@react-navigation/native';
    import { NavigationProp } from '@react-navigation/native';
    import { RootStackParamList } from '../../App';

    interface MovieCardProps {
    title: string;
    director: string;
    duration: string;
    onEdit: () => void;
    onDelete: () => void;
    }

    const MovieCard: React.FC<MovieCardProps> = ({ title, director, duration, onEdit, onDelete }) => {
        const navigation = useNavigation<NavigationProp<RootStackParamList>>();

        const handlePress = () => {
            navigation.navigate('ScenesScreen'); 
        };
    return (
        <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>Director: {director}</Text>
        <Text style={styles.info}>Duración: {duration}</Text>
        <View style={styles.buttonContainer}>
            <Button title="Editar" onPress={onEdit}color="green" />
            <Button title="Eliminar" onPress={onDelete} color="red" />
        </View>
            <Button  title="Ver Escenas" onPress={handlePress} color={"gray"}/>
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
        backgroundColor:'transparent',
        paddingHorizontal:30,
        marginVertical:15,
    },
    });

    export default MovieCard;

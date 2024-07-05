    // Movies/components/MovieCard.tsx
    import React from 'react';
    import { View, Text, StyleSheet, Button } from 'react-native';

    interface SceneCardProps {
    title: string;
    director: string;
    duration: string;
    onEdit: () => void;
    onDelete: () => void;
    }

    const SceneCard: React.FC<SceneCardProps> = ({ title, director, duration, onEdit, onDelete }) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>Director: {director}</Text>
        <Text style={styles.info}>Duración: {duration}</Text>
        <View style={styles.buttonContainer}>
            <Button title="Editar" onPress={onEdit} />
            <Button title="Eliminar" onPress={onDelete} color="red" />
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
    },
    });

    export default SceneCard;

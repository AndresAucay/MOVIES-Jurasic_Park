    // Movies/components/MovieCard.tsx
    import React from 'react';
    import { View, Text, StyleSheet, Button } from 'react-native';

    interface CharactersCardProps {
    Name: string;
    Cost: string;
    Age: string;
    onEdit: () => void;
    onDelete: () => void;
    }

    const CharacterCard: React.FC<CharactersCardProps> = ({ Name, Cost, Age, onEdit, onDelete }) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>{Name}</Text>
        <Text style={styles.info}>Costo: {Cost} $</Text>
        <Text style={styles.info}>Edad: {Age} años</Text>
        <View style={styles.buttonContainer}>
            <Button title="Editar" onPress={onEdit}color="gray" />
            <Button title="Eliminar" onPress={onDelete} color="gray" />
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

    export default CharacterCard;

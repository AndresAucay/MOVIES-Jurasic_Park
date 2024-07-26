import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CharactersHeaderProps {
    sceneTitle: string;
}

const CharactersHeader: React.FC<CharactersHeaderProps> = ({ sceneTitle }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Personajes de: {sceneTitle}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'black',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'white',
    },
});

export default CharactersHeader;

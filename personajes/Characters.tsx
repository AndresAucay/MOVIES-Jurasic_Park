    // Movies/Movies.tsx
    import React from 'react';
    import { View, StyleSheet } from 'react-native';
    import CharacterFooter from './components/CharactersFooter';
    import CharacterHeader from './components/CharactersHeader';
    import CharacterBody from './components/CharactersBody';
import BackgroundCharacters from './components/Background';
    const characters = [
        {
        id: '1',
        name: 'John Hammond',
        cost: '15000',
        age: '71',
        },
        {
            id: '2',
            name: 'Alan Grant ',
            cost: '22000',
            age: '42',
            },
        
        // Agrega más películas aquí
    ];

    const CharacterScreen = () => {
        return (
        <View style={styles.container}>
            <BackgroundCharacters/>
            <CharacterHeader />
            <CharacterBody characters={characters} />
            <CharacterFooter />
        </View>
        );
    };

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#fff',
        },
    });

    export default CharacterScreen;

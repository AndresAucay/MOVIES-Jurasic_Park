    import React from 'react';
    import { View, StyleSheet, ScrollView } from 'react-native';
    import CharacterCard from './CharactersCard';

    interface Character {
        id: number;
        nameCharacter: string; // Esto debe coincidir con la interfaz en CharactersScreen
        cost: number;
        actor: string;
        sceneId: number;
    }

    interface CharactersBodyProps {
        characters: Character[];
    }

    const CharactersBody: React.FC<CharactersBodyProps> = ({ characters }) => {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {characters.map((character) => (
                    <CharacterCard
                        key={character.id}
                        id={character.id}
                        name={character.nameCharacter} // Usa el nombre correcto aquí
                        cost={character.cost}
                        actor={character.actor}
                        onEdit={() => console.log('Edit', character.id)}
                        onDelete={() => console.log('Delete', character.id)}
                    />
                ))}
            </ScrollView>
        );
    };

    const styles = StyleSheet.create({
        container: {
            padding: 10,
            backgroundColor: 'transparent',
            height: 2000, // Ajustado para que se ajuste al contenido
        },
    });

    export default CharactersBody;

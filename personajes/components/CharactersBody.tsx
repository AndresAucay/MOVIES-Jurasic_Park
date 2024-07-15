        // Movies/components/MoviesBody.tsx
        import React from 'react';
        import { View, ScrollView, StyleSheet } from 'react-native';
        import CharacterCard from './CharactersCard';
        
        interface Character {
        id: string;
        name: string;
        cost: string;
        age: string;
        }

        interface CharacterBodyProps {
        characters: Character[];
        }

        const CharacterBody: React.FC<CharacterBodyProps> = ({ characters }) => {
        const handleEdit = (characterId: string) => {
            // Lógica para editar
        };

        const handleDelete = (characterId: string) => {
            // Lógica para eliminar
        };

        return (
            <ScrollView contentContainerStyle={styles.container}>
            {characters.map((character) => (
                <CharacterCard
                key={character.id}
                Name={character.name}
                Cost={character.cost}
                Age={character.age}
                onEdit={() => handleEdit(character.id)}
                onDelete={() => handleDelete(character.id)}
                />
            ))}
            </ScrollView>
        );
        };

        const styles = StyleSheet.create({
        container: {
            padding: 10,
            backgroundColor:'transparent',
            height:1000
        },
        });

        export default CharacterBody;

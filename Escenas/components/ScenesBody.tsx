// ScenesBody.tsx
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SceneCard from './ScenesCard';

interface Scene {
    id: number;
    nameScene: string;
    budget: number;
    minutes: number;
    movieId: number;
}

interface ScenesBodyProps {
    scenes: Scene[];
}

const ScenesBody: React.FC<ScenesBodyProps> = ({ scenes }) => {
    console.log('Scenes in ScenesBody:', scenes);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {scenes.map((scene) => (
                <SceneCard
                    key={scene.id}
                    id={scene.id}
                    title={scene.nameScene}
                    budget={scene.budget}
                    duration={scene.minutes}
                    onEdit={() => console.log('Edit', scene.id)}
                    onDelete={() => console.log('Delete', scene.id)}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'transparent',
         height: 2000, 
    },
});

export default ScenesBody;

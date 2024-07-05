    // Movies/components/MoviesBody.tsx
    import React from 'react';
    import { View, ScrollView, StyleSheet } from 'react-native';
    import SceneCard from './ScenesCard';

    interface Scene {
    id: string;
    title: string;
    director: string;
    duration: string;
    }

    interface SceneBodyProps {
    scenes: Scene[];
    }

    const ScenesBody: React.FC<SceneBodyProps> = ({ scenes }) => {
    const handleEdit = (sceneId: string) => {
        // Lógica para editar
    };

    const handleDelete = (sceneId: string) => {
        // Lógica para eliminar
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
        {scenes.map((scene) => (
            <SceneCard
            key={scene.id}
            title={scene.title}
            director={scene.director}
            duration={scene.duration}
            onEdit={() => handleEdit(scene.id)}
            onDelete={() => handleDelete(scene.id)}
            />
        ))}
        </ScrollView>
    );
    };

    const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor:'black',
        height:1000
    },
    });

    export default ScenesBody;

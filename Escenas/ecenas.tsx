    // Movies/Movies.tsx
    import React from 'react';
    import { View, StyleSheet } from 'react-native';
    import ScenesHeader from './components/ScenesHeader';
    import ScenesFooter from './components/ScenesFooter';
    import ScenesBody from './components/ScenesBody';
import BackgroundScenes from './components/Background';

    const scenes = [
        {
        id: '1',
        title: ' Ecene 1',
        director: 'Steven Spielberg',
        duration: '2h 7m',
        },
        {
        id: '2',
        title: 'Escene 2',
        director: 'Steven Spielberg',
        duration: '2h 9m',
        },
        {
        id: '3',
        title: 'Scene 3',
        director: 'Steven Spielberg',
        duration: '2h 7m',
        },
        {
        id: '4',
        title: 'Scene 4',
        director: 'Steven Spielberg',
        duration: '2h 9m',
        },
        // Agrega más películas aquí
    ];

    const ScenesScreen = () => {
        return (
        <View style={styles.container}>
            < BackgroundScenes/>
            <ScenesHeader />
            <ScenesBody scenes={scenes} />
            <ScenesFooter />
        </View>
        );
    };

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#fff',
        },
    });

    export default ScenesScreen;

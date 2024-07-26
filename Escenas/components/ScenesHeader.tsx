    // ScenesHeader.tsx
    import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';

    interface ScenesHeaderProps {
    movieTitle: string;
    }

    const ScenesHeader: React.FC<ScenesHeaderProps> = ({ movieTitle }) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Escenas de {movieTitle}</Text>
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

    export default ScenesHeader;

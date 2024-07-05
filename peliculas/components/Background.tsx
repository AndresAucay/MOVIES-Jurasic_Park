    import React from 'react';
    import { ImageBackground, StyleSheet } from 'react-native';

    const BackgroundMovies = ({ children }) => {
    return (
        <ImageBackground
        source={{ uri: '' }}
        style={styles.backgroundImage}
        >
        {children}
        </ImageBackground>
    );
    };

    const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    });

    export default BackgroundMovies;

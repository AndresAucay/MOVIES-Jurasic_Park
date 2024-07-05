    import React from 'react';
    import { Image, StyleSheet } from 'react-native';

    const BackgroundImage = () => {
    return (
        <Image
        source={{ uri: 'https://i.pinimg.com/originals/99/26/e9/9926e9b7e2942ea1c82aa10493b727a8.jpg' }}
        style={styles.backgroundImage}
        />
    );
    };

    const styles = StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    });

    export default BackgroundImage;

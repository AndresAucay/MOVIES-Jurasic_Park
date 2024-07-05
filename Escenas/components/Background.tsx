import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const BackgroundScenes = ({ children }) => {
return (
    <ImageBackground
    source={{ uri: 'https://i.pinimg.com/originals/3d/cb/c9/3dcbc9496a1df99b3076881b633ab5b0.jpg' }}
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

export default BackgroundScenes;

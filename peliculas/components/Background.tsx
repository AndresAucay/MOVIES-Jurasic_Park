import React from 'react';
import { Image, StyleSheet } from 'react-native';

const BackgroundMovies = () => {
return (
    <Image
    source={{ uri: 'https://w0.peakpx.com/wallpaper/147/1018/HD-wallpaper-espinosaurio-bonito-dinosaurio-fondo-pantalla-park-world.jpg' }}
    style={styles.backgroundImage}
    />
);
};

const styles = StyleSheet.create({
backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flex:1,
},
});

export default BackgroundMovies;

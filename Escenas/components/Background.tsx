import React from 'react';
import { Image, StyleSheet } from 'react-native';

const BackgroundScenes = () => {
return (
    <Image
    source={{ uri: 'https://pm1.aminoapps.com/6319/f42372bfdb00041b99d05498295e3dcbe8e32963_hq.jpg' }}
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

export default BackgroundScenes;

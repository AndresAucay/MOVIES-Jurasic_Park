import React from 'react';
import { Image, StyleSheet } from 'react-native';

const BackgroundCharacters = () => {
return (
    <Image
    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCYz73SC7WXHwjl4OyM6xDHknmXKFFA3HTRA&s' }}
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

export default BackgroundCharacters;

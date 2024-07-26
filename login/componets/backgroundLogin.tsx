import React from 'react';
import { Image, StyleSheet } from 'react-native';

const BackgroundLogin = () => {
  return (
    <Image
      source={{ uri: 'https://i.pinimg.com/736x/48/4b/ab/484bab60fc5540ecae0246321f9da3d7.jpg' }} // Reemplaza con tu URL
      style={styles.backgroundImage}
    />
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity:1,
  },
});

export default BackgroundLogin;

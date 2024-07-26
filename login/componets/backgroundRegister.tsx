import React from 'react';
import { Image, StyleSheet } from 'react-native';

const BackgroundRegister = () => {
  return (
    <Image
      source={{ uri: 'https://i.pinimg.com/736x/ce/fd/82/cefd82b4c24ff9b3423b989b5d86485a.jpg' }} // Reemplaza con tu URL
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

export default BackgroundRegister;

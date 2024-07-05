import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = () => {
  return (
    <Text style={styles.title}></Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default TitleText;

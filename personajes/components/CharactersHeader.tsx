    // Movies/components/MoviesHeader.tsx
    import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';

    const CharacterHeader = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Personajes</Text>
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        paddingVertical: 0,
        paddingHorizontal: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        height:35,
        justifyContent:'center',
    },
    title: {
        fontSize: 30,
        alignItems:'center',
        backgroundColor:'transparent',
        width:150,
        color:'black',
        justifyContent:'center',
        maxWidth:150,

    },
    });

    export default CharacterHeader;

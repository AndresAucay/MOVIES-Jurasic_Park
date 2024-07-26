    // Movies/components/MoviesHeader.tsx
    import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';

    const MoviesHeader = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>PELICULAS</Text>
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        paddingVertical: 0,
        paddingHorizontal: 5,
        backgroundColor: 'black',
        alignItems: 'center',
        height:55,
        justifyContent:'center',
    },
    title: {
        fontSize: 22,
        alignItems:'center',
        backgroundColor:'transparent',
        width:100,
        color:'white',
        justifyContent:'center'

    },
    });

    export default MoviesHeader;

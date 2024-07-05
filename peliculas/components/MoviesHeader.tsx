    // Movies/components/MoviesHeader.tsx
    import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';

    const MoviesHeader = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Peliculas</Text>
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
        fontSize: 28,
        alignItems:'center',
        backgroundColor:'transparent',
        width:100,
        color:'black',
        justifyContent:'center'

    },
    });

    export default MoviesHeader;

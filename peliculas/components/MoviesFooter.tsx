    // Movies/components/MoviesFooter.tsx
    import React from 'react';
    import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
    import { useNavigation } from '@react-navigation/native';
    import { NavigationProp } from '@react-navigation/native';
    import { RootStackParamList } from '../../App';
    const MoviesFooter = () => {
        const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handlePress = () => {
        navigation.navigate('MoviesCreate'); // Asegúrate de que el nombre sea correcto
    };

    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Image
            source={{ uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRM7Khr3bxuCHUSlo-gvrsldjSAqf_b3QGh8ZD5u4vb0rFxfVJr' }}
            style={styles.image}
            />
        </TouchableOpacity>
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center',
        height: 100,
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        
    
    },
    });

    export default MoviesFooter;

// Escenas/components/ScenesFooter.tsx
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Button } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type ScenesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ScenesScreen'>;
type ScenesScreenRouteProp = RouteProp<RootStackParamList, 'ScenesScreen'>;

const ScenesFooter: React.FC = () => {
  const navigation = useNavigation<ScenesScreenNavigationProp>();
  const route = useRoute<ScenesScreenRouteProp>();
  const { movieId } = route.params;

  const handleCreateScene = () => {
    navigation.navigate('ScenesCreate', { movieId });
  };

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={handleCreateScene} style={styles.button}>
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
}
);

    export default ScenesFooter;
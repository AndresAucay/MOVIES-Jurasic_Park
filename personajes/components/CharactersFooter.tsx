  import React from 'react';
  import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import { StackNavigationProp } from '@react-navigation/stack';
  import { RootStackParamList } from '../../App';

  type CharactersScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CharactersScreen'>;

  interface CharactersFooterProps {
    sceneId: number; // Asegúrate de que sea un número si eso es lo que esperas
  }

  const CharactersFooter: React.FC<CharactersFooterProps> = ({ sceneId }) => {
    const navigation = useNavigation<CharactersScreenNavigationProp>();

    const handleCreateCharacter = () => {
      navigation.navigate('CharactersCreate', { sceneId });
    };

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={handleCreateCharacter} style={styles.button}>
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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 80,
      height: 80,
      resizeMode: 'contain',
    },
  });

  export default CharactersFooter;

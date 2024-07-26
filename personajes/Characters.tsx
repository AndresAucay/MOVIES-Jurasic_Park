    import React, { useEffect, useState } from 'react';
    import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
    import CharactersBody from './components/CharactersBody';
    import CharactersHeader from './components/CharactersHeader';
    import CharactersFooter from './components/CharactersFooter';
    import BackgroundCharacters from './components/Background';
    import { RouteProp } from '@react-navigation/native';
    import { RootStackParamList } from '../App';

    interface Character {
        id: number;
        nameCharacter: string; // Asegúrate de que esto coincida con CharactersBody
        cost: number;
        actor: string;
        sceneId: number;
    }

    type CharactersScreenRouteProp = RouteProp<RootStackParamList, 'CharactersScreen'>;

    interface CharactersScreenProps {
        route: CharactersScreenRouteProp;
    }

    const CharactersScreen: React.FC<CharactersScreenProps> = ({ route }) => {
        const { sceneId = 0, sceneTitle = '' } = route.params || {};
        const [characters, setCharacters] = useState<Character[]>([]);
        const [loading, setLoading] = useState<boolean>(true);
        const [error, setError] = useState<string | null>(null);

        const fetchCharacters = async (sceneId: number) => {
            try {
                const response = await fetch(`http://10.0.1.133:8081/characters/byScene/${sceneId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Network response was not ok. Status: ${response.status}. ${errorText}`);
                }

                const data = await response.text();

                if (data.trim() === '') {
                    setCharacters([]);
                    return;
                }

                const jsonData = JSON.parse(data);
                setCharacters(jsonData);
            } catch (error) {
                console.error('Error fetching characters:', error);
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        useEffect(() => {
            if (sceneId) {
                fetchCharacters(sceneId);
            }
        }, [sceneId]);

        if (loading) {
            return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
        }

        if (error) {
            return <Text style={styles.error}>{error}</Text>;
        }

        return (
            <View style={styles.container}>
                <BackgroundCharacters />
                <CharactersHeader sceneTitle={sceneTitle} />
                {characters.length > 0 ? (
                    <CharactersBody characters={characters} />
                ) : (
                    <Text style={styles.noData}>No hay personajes en esta escena.</Text>
                )}
                <CharactersFooter sceneId={sceneId} />
            </View>
        );
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 0,
            justifyContent:'space-between',
        },
        loading: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        error: {
            fontSize: 18,
            color: 'red',
            textAlign: 'center',
            marginTop: 20,
        },
        noData: {
            fontSize: 18,
            textAlign: 'center',
            marginTop: 20,
            color: 'transparent',
        },
    });

    export default CharactersScreen;

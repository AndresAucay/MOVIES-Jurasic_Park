    // ScenesScreen.tsx
    import React, { useEffect, useState } from 'react';
    import { View, Text, StyleSheet } from 'react-native';
    import ScenesBody from './components/ScenesBody'; 
    import axios from 'axios';7
    import BackgroundScenes from './components/Background'; 
    import ScenesFooter from './components/ScenesFooter';
    import ScenesHeader from './components/ScenesHeader';
    interface ScenesScreenProps {
        route: {
            params: {
                movieId: number;
                movieTitle: string;
            };
        };
    }

    const ScenesScreen: React.FC<ScenesScreenProps> = ({ route }) => {
        const { movieId, movieTitle } = route.params;
        const [scenes, setScenes] = useState<any[]>([]);

        useEffect(() => {
            const fetchScenes = async () => {
                try {
                    const response = await axios.get(`http://10.0.1.133:8081/scenes?movieId=${movieId}`);
                    setScenes(response.data);
                } catch (error) {
                    console.error('Error fetching scenes:', error);
                }
            };

            fetchScenes();
        }, [movieId]);

        return (
            <View style={styles.container}>
                <BackgroundScenes/>
                <ScenesHeader movieTitle={movieTitle}/>
                <ScenesBody scenes={scenes} />
                <ScenesFooter/>
            </View>
        );
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            height:2000,
        
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
        },
    });

    export default ScenesScreen;

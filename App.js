import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Modal, StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';

export default function App() {
    return (
        <ImageBackground
            source={require('./images/bg.png')}
            style={styles.bg}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <View style={styles.screen}>
                    <RegistrationScreen style={styles.modal} />
                </View>
                <StatusBar style="auto" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     width: '100%',
    // },
    screen: {
        position: 'absolute',
        top: 263,
        width: '100%',
        borderRadius: 25,
        backgroundColor: '#fff',
    },
    bg: {
        flex: 1,
    },
});

import { StatusBar } from 'expo-status-bar';
import {
    ImageBackground,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';

// import MyIcon from './assets/union.svg';

export default function App() {
    return (
        <ImageBackground
            source={require('./images/bg.png')}
            style={styles.bg}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <View style={styles.screen}>
                    <View style={styles.avatar}>
                        <Text style={styles.title}>AVA</Text>
                        <TouchableOpacity style={styles.addAvatarBtn}>
                            {/* <MyIcon width={12} height={12} /> */}
                            {/* <View>
                                <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    // xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7 0H6V6H0V7H6V13H7V7H13V6H7V0Z"
                                        fill="#FF6C00"
                                    />
                                </svg>
                            </View> */}
                        </TouchableOpacity>
                    </View>
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
    avatar: {
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: [{ translateX: -60 }, { translateY: -60 }],
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },
});

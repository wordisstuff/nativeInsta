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


    const addAvatarHandler =()=>{
         Alert.alert('ADD AVATAR')
    }
    return (
        <ImageBackground
            source={require('./images/bg.png')}
            style={styles.bg}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <View style={styles.screen}>
                    <View style={styles.avatar}>
                        <TouchableOpacity onPress={addAvatarHandler} style={styles.addAvatarBtn}>
                                <Text style={styles.avatarBtn}>+</Text>
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
        borderWidth:1,
        borderColor:'#000',
        borderRadius: 16,
    },
    addAvatarBtn:{
        position:'absolute',
        top:"60%",
        right:'0%',
        transform:[{translateX:11}],
        width:22,
        height:22,
        borderRadius:'50%',
        borderWidth:1,
        borderColor:'#ff6978',
    },
    avatarBtn:{
        justifyContent:'center',
        alignItems:'center',
        fontSize:26,
        color:'#ff6978',
        
        // backgroundColor:'#ff6978'
    }
});

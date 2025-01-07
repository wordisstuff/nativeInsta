import React, { useState } from 'react';
import {
    Alert,
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const RegistrationScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPassVisible, setIsPassVisible] = useState(false);

    const { width } = Dimensions.get('screen');

    const onLogin = () => {
        Alert.alert(`${name} = ${email}`);
    };
    const togglePassVisibility = () => {
        setIsPassVisible(!isPassVisible);
    };

    return (
        <View style={style.container}>
            <Text style={style.title}>Реєстрація</Text>
            <View style={style.inputForm}>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="Логін"
                    style={style.input}
                />
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Адреса електронної пошти"
                    style={style.input}
                />
                <View style={style.passwordInputBox}>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Пароль"
                        style={style.input}
                        secureTextEntry={!isPassVisible}
                    ></TextInput>
                    <TouchableOpacity
                        onPress={togglePassVisibility}
                        style={style.securBtn}
                    >
                        <Text style={style.securText}>
                            {isPassVisible ? 'Приховати' : 'Показати'}
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={onLogin} style={style.inputBtn}>
                    <Text style={style.btnText}>Зареєстуватися</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onLogin} style={style.loginLink}>
                    <Text>Вже є акаунт? Увійти</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    title: {
        paddingTop: 96,
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 33,
    },
    inputForm: {
        padding: 16,
        width: '100%',
        height: '100%',
        gap: 16,
        backgroundColor: '#fff',
    },
    input: {
        fontSize: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
        backgroundColor: '#F6F6F6',
    },
    container: {
        width: '100%',
        borderColor: '#000',
    },
    inputBtn: {
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0,
        borderStyle: 'solid',
        borderRadius: 100,
        backgroundColor: '#FF6C00',
    },
    btnText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '400',
    },
    loginLink: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingBottom: 100,
    },
    passwordInputBox: {
        position: 'relative',
    },
    securBtn: {
        position: 'absolute',
        top: '50%',
        transform: [{ translateY: -10 }],
        right: 30,
        zIndex: 1000,
    },
    securText: {
        color: '#1B4371',
    },
});

export default RegistrationScreen;

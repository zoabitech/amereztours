import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomImput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignUpScreen = () => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onjoinInPressed = () => {
        console.warn('Sign Up');
    }
    const onSignInwithGoogle = () => {
        console.warn('onSignInwithGoogle');
    }
    const onSignInwithFacebook = () => {
        console.warn('onSignInwithFacebook');
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.text}>Create an account</Text>
                <CustomImput
                    placeholder="E-mail"
                    value={Email}
                    setValue={setEmail} />
                <CustomImput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true} />
                <CustomImput
                    placeholder="Repeat Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true} />
                <CustomButton
                    text="Sign Up"
                    onPress={onjoinInPressed} />
                <CustomButton
                    text="Sign In with Google"
                    onPress={onSignInwithGoogle}
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                />
                <CustomButton
                    text="Sign In with Facebook"
                    onPress={onSignInwithFacebook}
                    bgColor="#E7EAF4"
                    fgColor="#4765A9"
                />
                <Text style={styles.log}>By creating and account,you agree to amereztours
                    {'\n'} <Text style={styles.hyperlinkStyle}>Terms of use</Text> and <Text style={styles.hyperlinkStyle}>Privacy policy</Text></Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
    },
    text: {
        fontSize: 30,
        fontWeight: '300'
    },
    log: {
        fontSize: 10,
        fontWeight: '500',
        textAlign: 'center'
    },
    hyperlinkStyle: {
        color: 'blue',
    },
})
export default SignUpScreen
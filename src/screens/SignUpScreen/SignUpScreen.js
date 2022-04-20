import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomImput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
const SignUpScreen = () => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();

    const onSignUpPressed = () => {
        navigation.navigate("Confirm");
    }
    const onAlreadyHaveAccountPressed = () => {
        navigation.navigate("SignIn");
    }
    const onTermsOfUsePreesed = () => {
        console.warn('onTermsOfUsePreesed');
    }
    const onPrivacyPolicyPreesed = () => {
        console.warn('onPrivacyPolicyPreesed');
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
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
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry={true} />
                <CustomButton
                    text="Sign Up"
                    onPress={onSignUpPressed} />
                <Text style={styles.agrees}>By creating and account,you agree to amereztours
                    {'\n'} <Text style={styles.hyperlinkStyle} onPress={onTermsOfUsePreesed}>Terms of use</Text> and <Text style={styles.hyperlinkStyle} onPress={onPrivacyPolicyPreesed}>Privacy policy</Text></Text>
                <SocialSignInButtons />
                <CustomButton
                    text="Already have an account"
                    onPress={onAlreadyHaveAccountPressed}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: '300',
        color: '#005B99',
    },
    agrees: {
        fontSize: 10,
        padding: 4,
        fontWeight: '500',
        textAlign: 'center'
    },
    hyperlinkStyle: {
        color: 'blue',
    },
})
export default SignUpScreen
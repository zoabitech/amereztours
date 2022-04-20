import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomImput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
const ConfirmEmailScreen = () => {
    const [Email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const Navigation = useNavigation();

    const onConfirmPressed = () => {
        Navigation.navigate("Home");
    }
    const onBackToSignInPressed = () => {
        Navigation.navigate("SignIn");
    }
    const onResendCodePressed = () => {
        console.warn('onResendCodePressed');
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your email</Text>
                <CustomImput
                    placeholder="Enter your confirmation code"
                    value={code}
                    setValue={setCode} />
                <CustomButton
                    text="Confirm"
                    onPress={onConfirmPressed} />
                <CustomButton
                    text="Back to sign in"
                    onPress={onBackToSignInPressed}
                    type="SECONDARY"
                />
                <CustomButton
                    text="Resend code"
                    onPress={onResendCodePressed}
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
export default ConfirmEmailScreen;
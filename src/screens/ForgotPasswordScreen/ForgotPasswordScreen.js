import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomImput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
const ForgotPasswordScreen = () => {
    const [Email, setEmail] = useState('');
    const Navigation = useNavigation();

    const onSendPressed = () => {
        Navigation.navigate("NewPassword")
    }
    const onBackToSignInPressed = () => {
        Navigation.navigate("SignIn")
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                <CustomImput
                    placeholder="E-mail"
                    value={Email}
                    setValue={setEmail} />
                <CustomButton
                    text="Send"
                    onPress={onSendPressed} />
                <CustomButton
                    text="Back to sign in"
                    onPress={onBackToSignInPressed}
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
export default ForgotPasswordScreen;
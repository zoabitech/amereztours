import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomImput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const Navigation = useNavigation();

    const onSubmitPressed = () => {
        console.warn('onConfirmPressed');
    }
    const onBackToSignInPressed = () => {
        Navigation.navigate("SignIn");
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                <CustomImput
                    placeholder="Code"
                    value={code}
                    setValue={setCode} />
                <CustomImput
                    placeholder="Enter your new password"
                    value={newPassword}
                    setValue={setNewPassword} />
                <CustomButton
                    text="Submit"
                    onPress={onSubmitPressed} />
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
export default NewPasswordScreen;
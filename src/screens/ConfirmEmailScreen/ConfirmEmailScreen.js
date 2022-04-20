import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomImput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
const ConfirmEmailScreen = () => {
    const { control, handleSubmit, watch } = useForm();
    const Navigation = useNavigation();

    const onConfirmPressed = () => {
        Navigation.navigate("home");
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
                    name="code"
                    control={control}
                    placeholder="Enter your confirmation code"
                    rules={{ required: 'Code is required', minLength: { value: 10, message: 'Code should be minimum 10 characters long' } }}
                />

                <CustomButton
                    text="Confirm"
                    onPress={handleSubmit(onConfirmPressed)}
                />

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
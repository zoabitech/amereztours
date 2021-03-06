import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomImput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const ForgotPasswordScreen = () => {

    const { control, handleSubmit, watch } = useForm();

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
                    name="E-mail"
                    placeholder="E-mail"
                    control={control}
                    rules={{ required: 'Email is required', pattern: { value: EMAIL_REGEX, message: 'Email is invalid' } }}
                />
                <CustomButton
                    text="Send"
                    onPress={handleSubmit(onSendPressed)}
                    bgColor="rgb(251, 78, 41)"
                    fgColor="rgb(193,202,202)"
                />
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
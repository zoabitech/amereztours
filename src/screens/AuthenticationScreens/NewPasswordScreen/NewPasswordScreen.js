import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
const NewPasswordScreen = () => {

    const { control, handleSubmit, watch } = useForm();
    const Navigation = useNavigation();
    const pwd = watch('Password');
    const onSubmitPressed = () => {
        Navigation.navigate("home");
    }
    const onBackToSignInPressed = () => {
        Navigation.navigate("SignIn");
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>

                <CustomInput
                    name="code"
                    control={control}
                    placeholder="Enter your confirmation code"
                    rules={{ required: 'Code is required', minLength: { value: 10, message: 'Code should be minimum 10 characters long' } }}
                />
                <CustomInput
                    name="Password"
                    placeholder="Password"
                    control={control}
                    secureTextEntry={true}
                    rules={{ required: 'Password is required', minLength: { value: 10, message: 'Password should be minimum 10 characters long' } }}
                />

                <CustomInput
                    name="repeatPassword"
                    placeholder="Repeat password"
                    control={control}
                    secureTextEntry={true}
                    rules={{
                        validate: value =>
                            value === pwd || "Password do not match",
                    }}
                />
                <CustomButton
                    text="Submit"
                    onPress={handleSubmit(onSubmitPressed)} />
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
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/CustomButton';
import SocialSignInButtons from '../../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const SignUpScreen = () => {

    const { control, handleSubmit, watch } = useForm();
    const pwd = watch('Password');
    const navigation = useNavigation();

    const onSignUpPressed = (data) => {
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

                <CustomInput
                    name="E-mail"
                    placeholder="E-mail"
                    control={control}
                    rules={{ required: 'Email is required', pattern: { value: EMAIL_REGEX, message: 'Email is invalid' } }}
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
                    text="Sign Up"
                    onPress={handleSubmit(onSignUpPressed)} />

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
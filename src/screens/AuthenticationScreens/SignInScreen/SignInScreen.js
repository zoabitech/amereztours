import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react';
// import Logo from '../assets/images/company_logo.png'
import Logo from '../../../../assets/images/company_logo.png'
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/CustomButton';
import SocialSignInButtons from '../../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const SignInScreen = () => {
    const { height } = useWindowDimensions();
    const { control, handleSubmit } = useForm();
    const navigation = useNavigation();

    const onSignInPressed = (data) => {
        //validate user
        navigation.navigate('home');
    }
    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgetPassword')
    }
    const onDontHaveAnccountPressed = () => {
        navigation.navigate("SinUp")
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.root}>

                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode="contain"
                />

                <Text style={styles.title}>Login in your account</Text>

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

                <CustomButton
                    text="Sign In"
                    onPress={handleSubmit(onSignInPressed)}
                />

                <CustomButton
                    text="Forgot Password"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />

                <SocialSignInButtons />

                <CustomButton
                    text="Dont have anccount? create one"
                    onPress={onDontHaveAnccountPressed}
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
    logo: {
        width: '70%',
        maxWidth: 500,
        maxHeight: 200,
    },
    title: {
        fontWeight: '300',
        color: '#005B99',
    }
})
export default SignInScreen
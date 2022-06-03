import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react';
import Logo from '../../../../assets/images/company_logo.png'
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/CustomButton';
import SocialSignInButtons from '../../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const API_URL = Platform.OS === 'android' ? 'http://localhost:5000' : 'http://192.168.1.183:3001';
const SignInScreen = () => {
    const { height } = useWindowDimensions();
    const { control, handleSubmit } = useForm();
    const navigation = useNavigation();
    const [logedIn, setLogedIn] = useState(false);

    const onLoggedIn = (token) => {

        fetch(`http://192.168.1.183:3001/private`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }).then(async res => {
            try {
                const jsonRes = await res.json();
                if (res.status === 200) {
                    alert(jsonRes.message)
                    navigation.navigate("Profile")
                    setLogedIn();
                    console.log(token)
                }
            } catch (err) {
                console.log(err.message);
            };
        }).catch(err => {
            console.log(err.message);
        });
    }

    const onSignInPressed = async (data) => {

        const { Email, Password } = data;

        const payload = {
            Email,
            Password,
        };
        fetch(`http://192.168.1.183:3001/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        }).then(async res => {
            try {
                const jsonRes = await res.json();
                if (res.status !== 200) {
                    alert(jsonRes.message);
                } else {
                    onLoggedIn(jsonRes.token);
                    alert(jsonRes.message);
                }
            } catch (err) {
                console.log(err.message);
            };
        }).catch(err => {
            console.log(err.message);
        });
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate('NewPassword')
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
                    name="Email"
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
                    bgColor="rgb(251, 78, 41)"
                    fgColor="rgb(193,202,202)"
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
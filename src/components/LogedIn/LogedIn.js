import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

const LogedIn = () => {

    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();

    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }

    return (
        <View style={styles.root}>
            {/* <CustomButton
                text="Sign in or create account"
                type='TERTIARY'
                onPress={handleSubmit(onSignInPressed)}
            /> */}
            <CustomButton
                text="Contact Customer Service"
                type='TERTIARY'
            //onPress={handleSubmit(onSignInPressed)}
            />
            <CustomButton
                text="Settings"
                type='TERTIARY'
            //onPress={handleSubmit(onSignInPressed)}
            />
            <CustomButton
                text="Give App Feedback"
                type='TERTIARY'
            //onPress={handleSubmit(onSignInPressed)}
            />
            <CustomButton
                text="Loguot"
                type='TERTIARY'
            //onPress={handleSubmit(onSignInPressed)}
            />
        </View>
    )
}

export default LogedIn

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
    },
    conta: {
        width: '100%',
        height: 200,
        backgroundColor: '#000'
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { color } from 'react-native-reanimated'

const ProfileScreen = () => {
    return (
        <View style={styles.root}>
            <View style={styles.conta}><Text>hello</Text></View>
            <CustomButton
                text="Sign in or create account"
                type='TERTIARY'
            //onPress={handleSubmit(onSignInPressed)}
            />
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
                text="Sign In"
                type='TERTIARY'
            //onPress={handleSubmit(onSignInPressed)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
    },
    conta: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000'
    }
})

export default ProfileScreen;


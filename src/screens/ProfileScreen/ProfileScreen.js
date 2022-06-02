import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
// import CustomButton from '../../components/CustomButton'
// import { useNavigation } from '@react-navigation/native';
// import { useForm, Controller } from 'react-hook-form';
// import { useState } from 'react-native';
import LogedIn from '../../components/LogedIn/LogedIn';
import LogedOut from '../../components/LogedOut/LogedOut'
const ProfileScreen = () => {

    // const navigation = useNavigation();
    // const { control, handleSubmit } = useForm();
    const { login, isLogIn } = useState(false);
    return (
        <>
            {isLogIn ? < LogedIn /> : <LogedOut />
            }
        </>
    )
}

const styles = StyleSheet.create({
})

export default ProfileScreen;


import { StyleSheet, View, } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import { UserContext } from '../../context/UserContext';

const ProfileScreen = () => {

    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();
    const { user, setUser } = useContext(UserContext);

    const onLogedOutPressed = () => {
        setUser(null);
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }

    return (
        <>
            {user && <View style={styles.root}>
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
                    fgColor="rgb(251, 78, 41)"
                    onPress={handleSubmit(onLogedOutPressed)}
                />
            </View>
            }

            {!user && <View style={styles.root}>
                <CustomButton
                    text="Sign in or create account"
                    type='TERTIARY'
                    onPress={handleSubmit(onSignInPressed)}
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
            </View>
            }
        </>
    )
}

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

export default ProfileScreen;


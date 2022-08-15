import { StyleSheet, View, } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import { UserContext } from '../../context/UserContext';
import { OrderDataContext } from '../../context/OrderDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProfileScreen = () => {

    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();
    const { user, setUser } = useContext(UserContext);
    const { orderData, setOrderData } = useContext(OrderDataContext);

    const onLogedOutPressed = async () => {

        //function that clear the user from the asyncStrarge after the user cklick on the logout
        try {
            setUser(null);
            setOrderData(undefined)
            await AsyncStorage.clear()
        } catch (error) {
            console.log(error)
        }

    }

    const onSignInPressed = () => {
        //function that navigate the user to the sign in screen 
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


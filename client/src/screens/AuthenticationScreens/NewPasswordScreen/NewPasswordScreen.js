//REACT AND REACT NATIVE IMPORTS
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
//COMPONENETS IMPORTS
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/CustomButton';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const API_URL =
  Platform.OS === 'android' ? 'http://10.0.0.1:3001' : 'http://localhost:5000';

const NewPasswordScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const Navigation = useNavigation();
  const pwd = watch('Password');

  const onSubmitPressed = async data => {
    //function that get the user info and new password and rest the password
    const {Email, Password} = data;
    const payload = {
      Email,
      Password,
    };
    fetch(`${API_URL}/updatedPassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async res => {
        try {
          const jsonRes = await res.json();
          if (res.status !== 200) {
            Alert.alert(jsonRes.message);
          } else {
            Alert.alert(jsonRes.message);
            Navigation.navigate('SignIn');
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const onBackToSignInPressed = () => {
    //function that transfer the user into the SignIn screen
    Navigation.navigate('SignIn');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        {/* <CustomInput
                    name="code"
                    control={control}
                    placeholder="Enter your confirmation code"
                    rules={{ required: 'Code is required', minLength: { value: 10, message: 'Code should be minimum 10 characters long' } }}
                /> */}
        <CustomInput
          name="Email"
          placeholder="Email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />

        <CustomInput
          name="Password"
          placeholder="Password"
          control={control}
          secureTextEntry={true}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 10,
              message: 'Password should be minimum 10 characters long',
            },
          }}
        />

        <CustomInput
          name="repeatPassword"
          placeholder="Repeat password"
          control={control}
          secureTextEntry={true}
          rules={{
            validate: value => value === pwd || 'Password do not match',
          }}
        />
        <CustomButton
          text="Submit"
          onPress={handleSubmit(onSubmitPressed)}
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
  );
};

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
    textAlign: 'center',
  },
  hyperlinkStyle: {
    color: 'blue',
  },
});
export default NewPasswordScreen;

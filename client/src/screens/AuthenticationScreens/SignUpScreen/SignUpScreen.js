//REACT AND REACT NATIVE IMPORTS
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
//COMPONENETS IMPORTS
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/CustomButton';
import SocialSignInButtons from '../../../components/SocialSignInButtons';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const API_URL =
  Platform.OS === 'android' ? 'http://10.0.0.1:3001' : 'http://localhost:5000';

const SignUpScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('Password');
  const navigation = useNavigation();

  const onSignUpPressed = async data => {
    //function that get the new user info and store it into the database
    const {
      firstName,
      lastName,
      phoneNumber,
      CIN_Passeport,
      address,
      userName,
      Email,
      Password,
    } = data;
    const payload = {
      firstName,
      lastName,
      phoneNumber,
      CIN_Passeport,
      address,
      userName,
      Email,
      Password,
    };
    fetch(`${API_URL}/signup`, {
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
            navigation.navigate('SignIn');
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onAlreadyHaveAccountPressed = () => {
    //function taht transfer the user into the SignIn screen
    navigation.navigate('SignIn');
  };
  const onTermsOfUsePreesed = () => {
    //function taht transfer the user into the TermsOfUse screen
    console.warn('onTermsOfUsePreesed');
  };
  const onPrivacyPolicyPreesed = () => {
    //function taht transfer the user into the PrivacyPolicy screen
    console.warn('onPrivacyPolicyPreesed');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          name="firstName"
          placeholder="First Name"
          control={control}
          rules={{
            required: 'First name is required',
            pattern: {value: 10, message: 'First name is invalid'},
          }}
        />

        <CustomInput
          name="lastName"
          placeholder="Last Name"
          control={control}
          rules={{
            required: 'Last name is required',
            pattern: {value: 10, message: 'Last Name is invalid'},
          }}
        />

        <CustomInput
          name="phoneNumber"
          placeholder="Phone Number"
          control={control}
          rules={{
            required: 'Phone number is required',
            pattern: {value: 10, message: 'Phone number is invalid'},
          }}
        />

        <CustomInput
          name="CIN_Passeport"
          placeholder="CIN / Passeport"
          control={control}
          rules={{
            required: 'CIN / Passeport is required',
            pattern: {value: 10, message: 'CIN / Passeport is invalid'},
          }}
        />

        <CustomInput
          name="address"
          placeholder="Address"
          control={control}
          rules={{
            required: 'Adress is required',
            pattern: {value: {}, message: 'Adress is invalid'},
          }}
        />

        <CustomInput
          name="userName"
          placeholder="User name"
          control={control}
          rules={{
            required: 'User name is required',
            pattern: {value: 5, message: 'User name is invalid'},
          }}
        />

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
          text="Sign Up"
          onPress={handleSubmit(onSignUpPressed)}
          bgColor="rgb(251, 78, 41)"
          fgColor="rgb(193,202,202)"
        />

        <Text style={styles.agrees}>
          By creating and account,you agree to amereztours
          {'\n'}
          <Text style={styles.hyperlinkStyle} onPress={onTermsOfUsePreesed}>
            Terms of use
          </Text>
          and
          <Text style={styles.hyperlinkStyle} onPress={onPrivacyPolicyPreesed}>
            Privacy policy
          </Text>
        </Text>

        <SocialSignInButtons />

        <CustomButton
          text="Already have an account"
          onPress={onAlreadyHaveAccountPressed}
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
export default SignUpScreen;

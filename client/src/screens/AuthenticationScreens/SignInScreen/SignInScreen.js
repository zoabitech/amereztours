//REACT AND REACT NATIVE IMPORTS
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useContext} from 'react';
import Logo from '../../../../assets/images/company_logo.png';
//COMPONENETS IMPORTS
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/CustomButton';
import SocialSignInButtons from '../../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
//CONTEXT IMPORTS
import {UserContext} from '../../../context/UserContext';
import {OrderDataContext} from '../../../context/OrderDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const API_URL =
  Platform.OS === 'android'
    ? 'http://192.168.1.183:3001'
    : 'http://localhost:5000';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();
  const {user, setUser} = useContext(UserContext);

  const {orderData, setOrderData} = useContext(OrderDataContext);

  const setData = async user => {
    //function that store the user into asyncstorage
    try {
      await AsyncStorage.setItem('user', JSON.stringify({user}));
    } catch (error) {
      console.log(error);
    }
  };
  const onLoggedIn = token => {
    //function taht Authorization the user
    fetch(`${API_URL}/private`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then(async res => {
        try {
          const jsonRes = await res.json();
          if (res.status === 200) {
            alert(jsonRes.message);
            setUser(token.dbUser);
            setData(token.dbUser);
            navigation.navigate('Profile');
          }
        } catch (err) {
          console.log(err.message);
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const onSignInPressed = async data => {
    //function that get the user info and login to the user profile
    const {Email, Password} = data;

    const payload = {
      Email,
      Password,
    };
    fetch(`${API_URL}/login`, {
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
            alert(jsonRes.message);
          } else {
            onLoggedIn(jsonRes);
            alert(jsonRes.message);
          }
        } catch (err) {
          console.log(err.message);
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const onForgotPasswordPressed = () => {
    //function taht transfer the user into the rest password screen
    navigation.navigate('NewPassword');
  };
  const onDontHaveAnccountPressed = () => {
    //function taht transfer the user into the rest SignUp screen
    navigation.navigate('SignUp');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <Text style={styles.title}>Login to your account</Text>

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
  );
};

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
  },
});
export default SignInScreen;

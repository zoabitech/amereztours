//REACT AND REACT NATIVE IMPORTS
import {
  StyleSheet,
  View,
  FlatList,
  Pressable,
  Text,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
//COMPONENTS IMPORTS
import CarPost from '../../components/CarPost/CarPost';
import CustomDatePicker from '../../components/DatePakier/CustomDatePicker';
import EndCustomDatePicker from '../../components/DatePakier/EndCustomDatePicker';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
//CONTEXT IMPORTS
import {StartDateContext} from '../../context/StartDateContext';
import {EndDateContext} from '../../context/EndDateContext';
import {CarDataContext} from '../../context/CarDataContext';
//ICONS IMPORTS
import Ionicons from 'react-native-vector-icons/Ionicons';

const API_URL =
  Platform.OS === 'android' ? 'http://10.0.0.1:3001' : 'http://localhost:5000';

const CarSearchScreen = () => {
  const {control, handleSubmit} = useForm();
  const {carData, setCarData} = useContext(CarDataContext);
  const {startDate} = useContext(StartDateContext);
  const {endDate} = useContext(EndDateContext);
  const [loading, setLodaing] = useState(false);

  const onSearchPressed = () => {
    // on search function that get all the cars acording the start date and end date and amount of gusets using fetch
    const payload = {
      available: 1,
    };
    fetch(`${API_URL}/fetchVehicleByDateResults`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async res => {
        try {
          setLodaing(true);
          const jsonRes = await res.json();
          if (res.status !== 200) {
            alert(jsonRes.message);
          } else {
            setCarData(jsonRes);
          }
        } catch (err) {
          console.log(err.message);
        } finally {
          setTimeout(() => {
            setLodaing(false);
          }, 5000);
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <>
      {carData === undefined && (
        <View style={{margin: 10}}>
          <CustomDatePicker
            textStyle={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderColor: '#febb02',
              borderWidth: 2,
              marginTop: 15,
              marginBottom: 0,
              margin: 10,
            }}
          />
          <EndCustomDatePicker
            textStyle={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderColor: '#febb02',
              borderWidth: 2,
              marginTop: 0,
              marginBottom: 0,
              margin: 10,
            }}
          />
          <CustomInput
            name="participant"
            placeholder="Participants"
            control={control}
            rules={{
              required: 'Participant is required',
              pattern: {value: 10, message: 'participant is invalid'},
            }}
            style={{
              borderColor: '#febb02',
              borderWidth: 2,
              width: '94.5%',
              alignSelf: 'center',
              backgroundColor: 'blcak',
              marginTop: 0,
            }}
          />
          <CustomButton
            text={loading ? 'Loading...' : 'Search'}
            type="TERTIARY"
            loading={loading}
            bgColor="rgb(251, 78, 41)"
            fgColor="rgb(193,202,202)"
            onPress={handleSubmit(onSearchPressed)}
          />
        </View>
      )}
      {carData !== undefined && (
        <>
          <Pressable onPress={() => setCarData(undefined)}>
            <Text style={{marginLeft: 5, marginTop: 5, marginBottom: 0}}>
              <Ionicons name="arrow-back" size={25} />
            </Text>
          </Pressable>
          <SafeAreaView style={{marginBottom: 30}}>
            <StatusBar hidden />
            <FlatList
              data={carData}
              renderItem={({item}) => <CarPost item={item} />}
            />
          </SafeAreaView>
        </>
      )}
    </>
  );
};

export default CarSearchScreen;

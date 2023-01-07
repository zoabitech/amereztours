//REACT AND REACT NATVE IMPORTS
import {View, FlatList, StatusBar, Pressable, Text} from 'react-native';
import React, {useContext, useState} from 'react';
//COMPONENET IMPORTS
import AtractionPost from '../../components/AtractionPost';
import CustomDatePicker from '../../components/DatePakier/CustomDatePicker';
import EndCustomDatePicker from '../../components/DatePakier/EndCustomDatePicker';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import {useForm} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
//CONTEXT IMPORTS
import {StartDateContext} from '../../context/StartDateContext';
import {EndDateContext} from '../../context/EndDateContext';
import {AttractionDataContext} from '../../context/AttractionDataContext';
import {SafeAreaView} from 'react-native-safe-area-context';

const API_URL =
  Platform.OS === 'android' ? 'http://10.0.0.1:3001' : 'http://localhost:5000';

const AtractionSearchScreen = () => {
  const {control, handleSubmit} = useForm();
  const {startDate} = useContext(StartDateContext);
  const {endDate} = useContext(EndDateContext);
  const {attractionData, setAttractionData} = useContext(AttractionDataContext);
  const [loading, setLodaing] = useState(false);

  const onSearchPressed = () => {
    // on search function that get all the atraction acording the start date and end date using fetch
    const payload = {
      startDate,
      endDate,
    };
    fetch(`${API_URL}/fetchAtractionByDateResults`, {
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
            setAttractionData(jsonRes);
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
      {attractionData === undefined && (
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
            name="Participant"
            placeholder="Participants"
            control={control}
            rules={{
              required: 'Participants is required',
              pattern: {value: 10, message: 'Participants is invalid'},
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
      {attractionData !== undefined && (
        <>
          <Pressable onPress={() => setAttractionData(undefined)}>
            <Text style={{marginLeft: 5, marginTop: 5, marginBottom: 0}}>
              <Ionicons name="arrow-back" size={25} />
            </Text>
          </Pressable>
          <SafeAreaView style={{marginBottom: 30}}>
            <StatusBar hidden />
            <FlatList
              data={attractionData}
              renderItem={({item}) => <AtractionPost item={item} />}
            />
          </SafeAreaView>
        </>
      )}
    </>
  );
};

export default AtractionSearchScreen;

//REACT AND REACT NATIVE IMPORTS
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {WebView} from 'react-native-webview';
//ICONS IMPORTS
import Feather from 'react-native-vector-icons/Feather';
//STYLES IMPORTS
import styles from './styles';
//COMPONENETS IMPORTS
import Carousel from '../Carousel';
//CONTEXT IMPORTS
import {UserContext} from '../../context/UserContext';
import {StartDateContext} from '../../context/StartDateContext';
import {EndDateContext} from '../../context/EndDateContext';

const API_URL =
  Platform.OS === 'android' ? 'http://10.0.0.1:3001' : 'http://localhost:5000';

const AttractionIfoPost = props => {
  const {item} = props;
  const images = item.images.map((a, index) => a.link);
  const {user} = useContext(UserContext);
  const {startDate} = useContext(StartDateContext);
  const {endDate} = useContext(EndDateContext);

  const [showGateway, setShowGateway] = useState(false);
  const [prog, setProg] = useState(false);
  const [progClr, setProgClr] = useState('#000');

  function onMessage(e) {
    let data = e.nativeEvent.data;
    setShowGateway(false);

    let payment = JSON.parse(data);
    if (payment.status === 'COMPLETED') {
      alert('PAYMENT MADE SUCCESSFULLY!');
      addOrderAfterPaymentSuccessfully();
    } else {
      alert('PAYMENT FAILED. PLEASE TRY AGAIN.');
    }
  }

  const addOrderAfterPaymentSuccessfully = () => {
    //function that add order after successfully
    let usId, usPhone;
    if (user.id !== undefined && user.phone !== undefined) {
      usId = user.id;
      usPhone = user.phone;
    } else {
      usId = user.user.id;
      usPhone = user.user.phone;
    }
    const payload = {
      attractionId: item.id,
      id: usId,
      phone: usPhone,
      startDate,
      endDate,
      vid: null,
      status: 'Pending',
      price: item.price,
      title: item.title,
      img: images[0],
    };
    fetch(`${API_URL}/addOrder`, {
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
          }
        } catch (err) {
          console.log(err.message);
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <ScrollView style={[styles.root, styles.shadowProp]}>
      <Carousel data={images} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.description}</Text>
      <Text style={styles.price}>$ {item.price}</Text>
      <View style={styles.container}>
        <View style={styles.btnCon}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              user === null
                ? alert('YOU NEED TO BE SGIN IN TO COMPLETE THE BOOKING')
                : setShowGateway(true)
            }>
            <Text style={styles.btnTxt}>Pay Using PayPal</Text>
          </TouchableOpacity>
        </View>
      </View>
      {showGateway ? (
        <Modal
          visible={showGateway}
          onDismiss={() => setShowGateway(false)}
          onRequestClose={() => setShowGateway(false)}
          animationType={'fade'}
          transparent>
          <View style={styles.webViewCon}>
            <View style={styles.wbHead}>
              <TouchableOpacity
                style={{padding: 13}}
                onPress={() => setShowGateway(false)}>
                <Feather name={'x'} size={24} />
              </TouchableOpacity>
              <Text
                style={{
                  flex: 1,
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#00457C',
                }}>
                PayPal GateWay
              </Text>
              <View style={{padding: 13, opacity: prog ? 1 : 0}}>
                <ActivityIndicator size={24} color={progClr} />
              </View>
            </View>
            <WebView
              source={{uri: 'https://my-pay-web.web.app/'}}
              style={{flex: 1}}
              onLoadStart={() => {
                setProg(true);
                setProgClr('#000');
              }}
              onLoadProgress={() => {
                setProg(true);
                setProgClr('#00457C');
              }}
              onLoadEnd={() => {
                setProg(false);
              }}
              onLoad={() => {
                setProg(false);
              }}
              onMessage={onMessage}
            />
          </View>
        </Modal>
      ) : null}
    </ScrollView>
  );
};

export default AttractionIfoPost;

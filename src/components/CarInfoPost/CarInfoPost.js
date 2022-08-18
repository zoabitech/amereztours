//react and react native imports
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Modal,
    ActivityIndicator
} from 'react-native'
import React,
{
    useState,
    useContext
} from 'react'
import { WebView } from 'react-native-webview';
import styles from './styles';
//ICONS IMPORTS
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Carousel from '../Carousel';
//CONTEXT IMPORTS
import { UserContext } from '../../context/UserContext';
import { StartDateContext } from "../../context/StartDateContext";
import { EndDateContext } from "../../context/EndDateContext";

const API_URL = Platform.OS === 'android' ? 'http://192.168.1.183:3001' : 'http://localhost:5000';

const CarInfoPost = (props) => {

    const { item } = props;
    const images = item.images.map((a, index) => a.link)
    const { user } = useContext(UserContext);
    const { startDate } = useContext(StartDateContext);
    const { endDate } = useContext(EndDateContext);

    const [showGateway, setShowGateway] = useState(false);
    const [prog, setProg] = useState(false);
    const [progClr, setProgClr] = useState('#000');


    function onMessage(e) {
        let data = e.nativeEvent.data;
        setShowGateway(false);

        let payment = JSON.parse(data);
        if (payment.status === 'COMPLETED') {
            alert('PAYMENT MADE SUCCESSFULLY!');
            addOrderAfterPaymentSuccessfully()
        } else {
            alert('PAYMENT FAILED. PLEASE TRY AGAIN.');
        }

    }

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "10",
                    },
                },
            ],
        });
    }

    const onApprove = async (data, actions) => {
        let order = await actions.order.capture();
        console.log(order);
        window.ReactNativeWebView &&
            window.ReactNativeWebView.postMessage(JSON.stringify(order));
        return order;
    }

    const addOrderAfterPaymentSuccessfully = () => {

        const payload = {
            attractionId: null,
            id: user.user.id,
            phone: user.user.phone,
            startDate,
            endDate,
            vid: item.id,
            status: "New",
            price: item.price,
            title: item.title,
            img: images[0]
        };
        fetch(`${API_URL}/addOrder`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        }).then(async res => {
            try {
                const jsonRes = await res.json();
                if (res.status !== 200) {
                    alert(jsonRes.message);
                }
            } catch (err) {
                console.log(err.message);
            }
        }).catch(err => {
            console.log(err.message);
        });
    }



    return (
        <ScrollView style={[styles.root, styles.shadowProp]}>
            <Carousel
                data={images}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text
                style={styles.plcaes}>
                <MaterialCommunityIcons
                    name="car-seat"
                    size={10}
                />
                {' '}{item.places}{" Places"}
            </Text>
            <Text
                style={styles.plcaes}
            >
                <Feather
                    name="briefcase"
                    size={10}
                />
                {' '}{item.suitcases}{" Suitcases"}
            </Text>
            <Text
                style={styles.plcaes}
            >
                <MaterialCommunityIcons
                    name="car-speed-limiter"
                    size={10}
                />
                {' '}Limited Mileage
            </Text>
            <Text
                style={styles.plcaes}
            >
                <FontAwesome
                    name="drivers-license-o"
                    size={10}
                />
                {' '}Driver / Without Driver
            </Text>
            <Text
                style={styles.plcaes}
            >
                <AntDesign
                    name="wifi"
                    size={10}
                />
                {' '}Wi-Fi
            </Text>
            < Text
                style={styles.plcaes}
            >
                <Entypo
                    name="air"
                    size={10}
                />
                {' '}Air-Condition
            </Text>
            <Text style={styles.desc}>{item.description}</Text>
            <Text style={styles.price}>$ {item.price}</Text>
            <View style={styles.container}>
                <View style={styles.btnCon}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => user === null ? alert("YOU NEED TO BE SGIN IN TO COMPLETE THE BOOKING") : setShowGateway(true)}>
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
                                style={{ padding: 13 }}
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
                            <View style={{ padding: 13, opacity: prog ? 1 : 0 }}>
                                <ActivityIndicator size={24} color={progClr} />
                            </View>
                        </View>
                        <WebView
                            source={{ uri: 'https://my-pay-web.web.app/' }}
                            style={{ flex: 1 }}
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
                            createorder={createOrder}
                            onapprove={onApprove}
                            onMessage={onMessage}

                        />
                    </View>
                </Modal>
            ) : null}
        </ScrollView >
    )
}

export default CarInfoPost;
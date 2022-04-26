import { Text, View, Image } from 'react-native'
import React from 'react'
import { orderData } from '../../Data/orderdata';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const OrderPost = (props) => {
    const { item } = props;
    return (
        <View>
            <View style={[styles.root, styles.shadowProp]}>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text
                        style={styles.pickupandreturndate}>
                        <EvilIcons
                            name="calendar"
                            size={18}
                            color={'pink'}
                        />
                        {' '}{item.pickupdate}{'/'}{item.returndate}
                    </Text>
                    <Text
                        style={styles.pickupandreturndate}>
                        <Entypo
                            name="location"
                            size={18}
                            color={'pink'}
                        />
                        {' '}{item.location}
                    </Text>
                    <Text style={styles.price}>$ {item.totalprice}</Text>
                </View>
                <View style={styles.imageroot}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                    />
                    <Text style={styles.logostyle}>Ame Rez Tours</Text>
                </View>
            </View>

        </View >
    )
}

export default OrderPost;


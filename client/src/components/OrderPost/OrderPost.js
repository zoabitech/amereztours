import {
    Text,
    View,
    Image
} from 'react-native'
import React from 'react'
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const OrderPost = (props) => {
    const { item } = props;

    return (
        <View>
            <View
                style={[styles.root, styles.shadowProp]}>
                <View
                    style={styles.rightContainer}>
                    <Text
                        style={styles.title}>
                        {item.item_title}
                    </Text>
                    <Text
                        style={styles.pickupandreturndate}
                    >
                        <EvilIcons
                            name="calendar"
                            size={12}
                        />
                        {' '}{item.start_Date}{'/'}{item.end_Date}
                    </Text>
                    <Text
                        style={styles.pickupandreturndate}>
                        <Entypo
                            name="location"
                            size={12}
                        />
                        {' '}{item.location}
                    </Text>
                    <Text
                        style={styles.price}>
                        ${item.order_price}
                    </Text>
                </View>
                <View
                    style={styles.imageroot}>
                    <Image
                        source={{ uri: item.img_link }}
                        style={styles.image}
                    />
                    <Text
                        style={styles.logostyle}>
                        Ame Rez Tours
                    </Text>
                </View>
            </View>

        </View >
    )
}

export default OrderPost;


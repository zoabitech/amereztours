import { Text, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { atractionData } from '../../Data/atractiondata'

const AttractionIfoPost = (props) => {
    // const [liked, setLiked] = useState(false);
    const { item } = props;
    return (
        <ScrollView style={[styles.root, styles.shadowProp]}>

            <Text>sadsad</Text>
            {/* <View style={styles.rootimage}> */}
            <Image
                source={{ uri: item.image }}
                style={styles.image}
            />
            {/* </View> */}
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
            <Text style={styles.desc}>{item.desc}</Text>
            <Text style={styles.price}>$ {item.price}</Text>
        </ScrollView >
    )
}

export default AttractionIfoPost;


/*<FontAwesome
    name={liked ? "heart" : "heart"}
    size={20}
    color={"red"}
    onPress={
        setLiked(!liked)
    }
/>*/
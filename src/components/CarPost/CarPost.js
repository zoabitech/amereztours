import { Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { carData } from '../../Data/cardata';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CarPost = (props) => {
    const [liked, setLiked] = useState(false);
    const { item } = props;
    return (
        <View>
            <View style={[styles.root, styles.shadowProp]}>
                <View style={styles.rightContainer}>
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
                    <View style={styles.ratingContainer}>
                        {[0, 0, 0, 0, 0].map((el, i) =>
                            <FontAwesome
                                key={`${item.id}-${i}`}
                                style={styles.star}
                                name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                                size={20}
                                color={'#e47911'}
                            />
                        )}
                    </View>
                    <Text style={styles.price}>$ {item.price}</Text>
                </View>
                <View style={styles.rootimage}>
                    <FontAwesome
                        name={liked ? "heart" : "heart-o"}
                        size={20}
                        style={styles.like}
                        color={"red"}
                        onPress={() =>
                            setLiked(!liked)
                        } />
                    <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                    />

                </View>
            </View>

        </View >
    )
}

export default CarPost;


/*<FontAwesome
    name={liked ? "heart" : "heart"}
    size={20}
    color={"red"}
    onPress={
        setLiked(!liked)
    }
/>*/
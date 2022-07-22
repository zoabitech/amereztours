import { Text, View, Image, Button } from 'react-native'
import React, { useState } from 'react'
import { carData } from '../../Data/cardata';
import { AtractionData } from '../../Data/atractiondata';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const CarPost = (props) => {
    const [liked, setLiked] = useState(false);
    const { item } = props;
    return (
        <View style={[styles.root, styles.shadowProp]}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text
                    style={styles.plcaes}>
                    <Entypo
                        name="location"
                        size={12}
                    />
                    {' '}{item.location}{ }
                </Text>
                {/* <Text
                    style={styles.plcaes}
                >
                    <FontAwesome
                        name="drivers-license-o"
                        size={12}
                    />
                    {' '}Driver / Without Driver
                </Text> */}
                <Text
                    style={styles.plcaes}
                >
                    <AntDesign
                        name="wifi"
                        size={12}
                    />
                    {' '}Wi-Fi
                </Text>
                <Text
                    numberOfLines={3}
                    style={styles.plcaes}
                >
                    <MaterialIcons
                        name="description"
                        size={12}
                    />
                    {item.description}
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
                <View style={styles.pi}>
                    <FontAwesome
                        name={liked ? "heart" : "heart-o"}
                        size={20}
                        style={styles.like}
                        color={"red"}
                        onPress={() =>
                            setLiked(!liked)
                        } />
                    <Text style={styles.price}>$ {item.price}</Text>
                </View>
            </View>
            <Image
                source={{ uri: item.image }}
                style={styles.image}
            />
        </View>
    )
}

export default CarPost;


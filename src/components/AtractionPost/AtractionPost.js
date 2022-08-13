import { Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

const AtrractionPost = (props) => {
    const [liked, setLiked] = useState(false);
    const { item } = props;

    const images = item.images.map(a => a.link)//array of the images of the item.images

    const navigation = useNavigation();

    const goToAttractionPostPageInfo = () => {
        //function that navigate to the spicifc attraction
        navigation.navigate("PostInfo", { PostId: item.id })
    }
    return (
        <Pressable onPress={goToAttractionPostPageInfo} style={[styles.root, styles.shadowProp]}>
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
                {/* <View style={styles.ratingContainer}>
                    {[0, 0, 0, 0, 0].map((el, i) =>
                        <FontAwesome
                            key={`${item.id}-${i}`}
                            style={styles.star}
                            name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                            size={20}
                            color={'#e47911'}
                        />
                    )}
                </View> */}
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
                source={{ uri: images[0] }}
                style={styles.image}
            />
        </Pressable>
    )
}

export default AtrractionPost;


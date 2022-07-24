import { Text, View, Image, ScrollView, Dimensions, FlatList, StatusBar } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { atractionData } from '../../Data/atractiondata'
import Carousel from '../Carousel';
import CustomButton from '../CustomButton'
const AttractionIfoPost = (props) => {
    // const [liked, setLiked] = useState(false);
    const { item } = props;
    const { width, height } = Dimensions.get('screen');
    const data = [
        'https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200',
        'https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200',
        'https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200',
        'https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200',
        'https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&resize=1200x1200',
        'https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1&resize=1200x1200',
        'https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200',
        "https://images.unsplash.com/photo-1538600838042-6a0c694ffab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=c",
        "https://images.unsplash.com/photo-1545167496-c1e092d383a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1568241360857-e23e825c4e08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=c",
        "https://images.unsplash.com/photo-1552573033-b7bb437bf953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1vcm9jY298ZW58MHx8MHx8&auto=format&"
    ];

    const imageW = width * 0.7;
    const imageH = imageW * 1.54;
    return (
        <ScrollView style={[styles.root, styles.shadowProp]}>
            <Carousel
                data={data}
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
            <Text style={styles.desc}>{item.desc}</Text>
            <Text style={styles.price}>$ {item.price}</Text>
            <CustomButton
                text="BOOK THE ATTRACTION"
                type='TERTIARY'
                bgColor="rgb(251, 78, 41)"
                fgColor="rgb(193,202,202)"
            // onPress={handleSubmit(onSearchPressed)}
            />
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
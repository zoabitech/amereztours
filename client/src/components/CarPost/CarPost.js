//REACT AND REACT NATIVE IMPORTS
import {
    Text,
    View,
    Image,
    Pressable
} from 'react-native'
import React,
{
    useState,
    useContext,
    useEffect
} from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
//ICONS IMPORTS
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
//CONTEXT IMPORTS
import { LikedDataContext } from '../../context/LikedDataContext';

const CarPost = (props) => {
    const [liked, setLiked] = useState(false);
    const { likedData, setLikedData } = useContext(LikedDataContext);
    const { item } = props;

    const images = item.images.map(a => a.link)//array of the images of the item.images
    const navigation = useNavigation();

    useEffect(() => {
        if(liked){
            setLikedData([...likedData,item])
            console.log(likedData)
         }
    },[liked])


    const goToAttractionPostPageInfo = () => {
        //function that navigate to the spicifc vehicle
        navigation.navigate("CarInfoPost", { CarPostId: item.id })
    }

    return (
        <Pressable
            onPress={goToAttractionPostPageInfo}>
            <View
                style={[styles.root, styles.shadowProp]}>
                <View
                    style={styles.rightContainer}>
                    <Text
                        style={styles.title}>
                        {item.title}
                    </Text>
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
                    <Text style={styles.price}>
                        $ {item.price}
                    </Text>
                </View>
                <View style={styles.rootimage}>
                    <FontAwesome
                        name={liked ? "heart" : "heart-o"}
                        size={20}
                        style={styles.like}
                        color={"red"}
                        onPress={() => 
                            setLiked(prev => !prev) 
                        } />
                    <Image
                        source={{ uri: images[0] }}
                        style={styles.image}
                    />

                </View>
            </View>

        </Pressable>
    )
}

export default CarPost;
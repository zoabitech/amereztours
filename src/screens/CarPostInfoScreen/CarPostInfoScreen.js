//REACT AND REACT NATIVE IMPORTS
import {
    StyleSheet,
    View
} from 'react-native'
import React, { useContext } from 'react'
import { useRoute } from '@react-navigation/native';
//CONTEXT IMPORTS
import { CarDataContext } from '../../context/CarDataContext';
//COMPONENETS IMPORTS
import CarInfoPost from '../../components/CarInfoPost/CarInfoPost';

const CarPostInfoScreen = (props) => {

    const { carData } = useContext(CarDataContext)
    //route hook to get the spicifice post to route into
    const route = useRoute();
    const post = carData.find(element => element.id === route.params.CarPostId)
    return (
        <View style={{
            flex: 1,
            margin: 2,
        }}>
            <CarInfoPost
                item={post}
            />
        </View>
    )
}
export default CarPostInfoScreen;
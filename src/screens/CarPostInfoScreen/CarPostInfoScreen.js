import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { useRoute } from '@react-navigation/native';
import { CarDataContext } from '../../context/CarDataContext';
import CarInfoPost from '../../components/CarInfoPost/CarInfoPost';

const CarPostInfoScreen = (props) => {

    const { carData } = useContext(CarDataContext)
    //route hook to get the spicifice post to route into
    const route = useRoute();
    const post = carData.find(element => element.id === route.params.CarPostId)
    console.log("carData", carData)
    return (
        <View style={styles.root}>
            <CarInfoPost
                item={post}
            />
        </View>
    )
}

export default CarPostInfoScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        margin: 2,
    }
})
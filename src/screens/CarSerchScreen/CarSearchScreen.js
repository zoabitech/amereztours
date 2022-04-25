import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { carData } from '../../Data/cardata'
import CarPost from '../../components/CarPost/CarPost'

const CarSearchScreen = () => {
    return (
        <View style={styles.root}>
            <FlatList
                data={carData}
                renderItem={({ item }) => <CarPost item={item} />
                }
            />
        </View>
    )
}

export default CarSearchScreen

const styles = StyleSheet.create({})
import { StyleSheet, View, FlatList } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { carData } from '../../Data/cardata'
import CarPost from '../../components/CarPost/CarPost'
import { DataContext } from '../../context/DataContext';
const CarSearchScreen = () => {
    const { data, setData } = useContext(DataContext)


    useEffect(() => {
        setData(carData)
    }, [])
    return (
        <View style={styles.root}>
            <FlatList
                data={data}
                renderItem={({ item }) => <CarPost item={item} />
                }
            />
        </View>
    )
}

export default CarSearchScreen

const styles = StyleSheet.create({
    root: {
        margin: 1,
    }
})
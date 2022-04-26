import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'
import CarPost from '../../components/CarPost/CarPost'
import AtractionPost from '../../components/AtractionPost'
import { carData } from '../../Data/cardata'
import { atractionData } from '../../Data/atractiondata';
import OrderPost from '../../components/OrderPost/OrderPost'
const Home = () => {
    return (
        <View style={styles.root}>
            <Text>hello</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        backgroundColor: '#edf0f5',
        width: '100%',
    }
})
export default Home;
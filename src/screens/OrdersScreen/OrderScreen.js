import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { orderData } from '../../Data/orderdata';
import OrderPost from '../../components/OrderPost/OrderPost'

const OrderScreen = () => {
    return (
        <View style={styles.root}>
            <FlatList
                data={orderData}
                renderItem={({ item }) => <OrderPost item={item} />
                }
            />
        </View>
    )
}
export default OrderScreen

const styles = StyleSheet.create({
    root: {
        margin: 2,
    }
})
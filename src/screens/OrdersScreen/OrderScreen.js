import { View, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useContext } from 'react'
// import { orderData } from '../../Data/orderdata';
import OrderPost from '../../components/OrderPost/OrderPost';
import { OrderDataContext } from '../../context/OrderDataContext';
import { UserContext } from '../../context/UserContext';

const OrderScreen = () => {

    const { user } = useContext(UserContext);
    const { orderData, setOrderData } = useContext(OrderDataContext);

    return (
        <View style={styles.root}>
            <FlatList
                data={orderData?.dbOrders}
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
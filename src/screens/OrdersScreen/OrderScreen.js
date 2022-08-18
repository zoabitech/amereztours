//REACT AND REACT NATIVE IMPORTS
import { View, FlatList } from 'react-native'
import React, { useContext } from 'react'
//COMPONENETS IMPORTS
import OrderPost from '../../components/OrderPost/OrderPost';
//CONTEXT IMPORTS
import { OrderDataContext } from '../../context/OrderDataContext';
import { UserContext } from '../../context/UserContext';

const OrderScreen = () => {

    const { user } = useContext(UserContext);
    const { orderData, } = useContext(OrderDataContext);

    return (
        <View style={{ margin: 2 }}>
            <FlatList
                data={orderData?.dbOrders}
                renderItem={({ item }) => <OrderPost item={item} />
                }
            />
        </View>
    )
}
export default OrderScreen
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const OrderScreen = () => {
    return (
        <View style={styles.root}>
            <Text>OrderScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
    },

})

export default OrderScreen
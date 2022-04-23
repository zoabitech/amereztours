import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LikedScreen = () => {
    return (
        <View style={styles.root}>
            <Text>LikedScreen</Text>
        </View>
    )
}

export default LikedScreen

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
    },
})
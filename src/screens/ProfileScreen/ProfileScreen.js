import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
    return (
        <View style={styles.root}>
            <Text>ProfileScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
    },
})

export default ProfileScreen;


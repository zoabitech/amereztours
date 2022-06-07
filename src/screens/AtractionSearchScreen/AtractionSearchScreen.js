import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { atractionData } from '../../Data/atractiondata'
import AtractionPost from '../../components/AtractionPost';
import GooglePlacesInput from '../../components/GooglePlacesInput'
const AtractionSearchScreen = () => {
    return (
        <View style={styles.root}>
            {/* <FlatList
                data={atractionData}
                renderItem={({ item }) => <AtractionPost item={item} />
                }
            /> */}
            <GooglePlacesInput />
        </View>

    )
}

export default AtractionSearchScreen

const styles = StyleSheet.create({})
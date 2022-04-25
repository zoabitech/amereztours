import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { atractionData } from '../../Data/atractiondata'
import AtractionPost from '../../components/AtractionPost';

const AtractionSearchScreen = () => {
    return (
        <View style={styles.root}>
            <FlatList
                data={atractionData}
                renderItem={({ item }) => <AtractionPost item={item} />
                }
            />
        </View>

    )
}

export default AtractionSearchScreen

const styles = StyleSheet.create({})
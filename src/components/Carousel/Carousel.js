import { Text, StyleSheet, View, Dimensions, StatusBar, FlatList, Image } from 'react-native'
import React from 'react'

const Carousel = (props) => {

    const { width, height } = Dimensions.get('screen');
    const { data } = props
    const imageW = width * 0.7;
    const imageH = imageW * 1.54;
    return (
        <View style={{ flex: 1, backgroundColor: '#0000', width, alignSelf: 'center' }}>
            <StatusBar hidden />
            <FlatList
                data={data}
                keyExtractor={(index) => index.toString()}
                horizontal
                pagingEnabled
                renderItem={({ item }) => {
                    return <View style={{ width, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={{ uri: item }} style={{
                            width: imageW,
                            height: imageH,
                            resizeMode: 'contain',
                            borderRadius: 16,
                            margin: 10
                        }} />
                    </View>
                }}
            />
        </View>
    )
}

export default Carousel;
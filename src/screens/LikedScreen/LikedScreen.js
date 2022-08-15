import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { LikedDataContext } from '../../context/LikedDataContext';
import CarPost from '../../components/CarPost/CarPost';


const LikedScreen = () => {
    const { likedData, setLikedData } = useContext(LikedDataContext);
    useEffect(() => {
        console.log("likedData", likedData)
    }, [])
    return (
        <View style={styles.root}>
            <FlatList
                data={likedData}
                renderItem={({ item }) => <CarPost item={item} />
                }
            />
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
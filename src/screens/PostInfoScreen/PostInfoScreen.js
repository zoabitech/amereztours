import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { useRoute } from '@react-navigation/native';
import AttractionInfoPost from '../../components/AttractionInfoPost/AttractionInfoPost';
import { DataContext } from '../../context/DataContext';
import CarIfoPost from '../../components/CarInfoPost/CarInfoPost';

const PostInfoScreen = (props) => {

    const { data } = useContext(DataContext)
    //route hook to get the spicifice post to route into
    const route = useRoute();
    const post = data.find(element => element.id === route.params.PostId)

    return (
        <View style={styles.root}>
            {/* <AttractionInfoPost
                item={post}
            /> */}
            <CarIfoPost
                item={post}
            />
        </View>
    )
}

export default PostInfoScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        margin: 2,
    }
})
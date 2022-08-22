//REACT AND REACT NATIVE IMPORTS
import {
    StyleSheet,
    View
} from 'react-native'
import
React,
{ useContext } from 'react'
import { useRoute } from '@react-navigation/native';
//COMPONENETS IMPORTS
import AttractionInfoPost from '../../components/AttractionInfoPost/AttractionInfoPost';
//CONTEXT IMPORTS
import { AttractionDataContext } from '../../context/AttractionDataContext';

const AttractionPostInfoScreen = (props) => {

    const { attractionData } = useContext(AttractionDataContext)
    //route hook to get the spicifice post to route into
    const route = useRoute();
    const post = attractionData.find(element => element.id === route.params.PostId)

    return (
        <View style={{
            flex: 1,
            margin: 2,
        }}>
            <AttractionInfoPost
                item={post}
            />
        </View>
    )
}

export default AttractionPostInfoScreen;
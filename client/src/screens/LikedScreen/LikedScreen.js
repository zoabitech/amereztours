import {
    View,
    FlatList
} from 'react-native'
import
React,
{
    useContext,
} from 'react'
import { LikedDataContext } from '../../context/LikedDataContext';
import LikedPost from '../../components/LikedPost/LikedPost';


const LikedScreen = () => {
    const { likedData, setLikedData } = useContext(LikedDataContext);

    return (
        <View style={{
            margin: 2
        }}>
            <FlatList
                data={likedData}
                renderItem={({ item }) => <LikedPost item={item} />
                }
            />
        </View>
    )
}

export default LikedScreen
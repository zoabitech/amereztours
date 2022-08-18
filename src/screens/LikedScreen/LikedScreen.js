import {
    View,
    FlatList
} from 'react-native'
import
React,
{
    useContext,
    useEffect
} from 'react'
import { LikedDataContext } from '../../context/LikedDataContext';
import CarPost from '../../components/CarPost/CarPost';


const LikedScreen = () => {
    const { likedData, setLikedData } = useContext(LikedDataContext);
    useEffect(() => {
        console.log("likedData", likedData)
    }, [])
    return (
        <View style={{
            alignItems: 'center',
            padding: 30,
        }}>
            <FlatList
                data={likedData}
                renderItem={({ item }) => <CarPost item={item} />
                }
            />
        </View>
    )
}

export default LikedScreen
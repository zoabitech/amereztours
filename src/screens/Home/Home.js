import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'
import CarPost from '../../components/CarPost/CarPost'
import AtractionPost from '../../components/AtractionPost'
import { carData } from '../../Data/cardata'
import { atractionData } from '../../Data/atractiondata';
import OrderPost from '../../components/OrderPost/OrderPost'
const Home = () => {
    return (
        // <FlatList
        // data={atractionData}
        //     style={styles.root}
        //     renderItem={({ item }) => <AtractionPost item={item} />
        //     }
        // />
        <View style={styles.root}>

            <FlatList
                data={carData}
                renderItem={({ item }) => <OrderPost item={item} />
                }
            />

        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        backgroundColor: '#edf0f5',
        width: '100%',
    }
})
export default Home;


{/* <FlatList
                data={carData}
                renderItem={({ item }) => <CarPost item={item} />
                }
            /> */}
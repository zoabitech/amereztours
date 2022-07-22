import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        margin: 4,
        backgroundColor: 'white',
        height: '100%',
        padding: 10
    },
    title: {
        fontSize: 18,
        fontWeight: '900',
        color: '#005B99'
    },
    image: {
        flex: 1.5,
        height: 500,
        resizeMode: 'contain',
        margin: 2
    },
    // rootimage: {
    //     flex: 1,
    //     // height: 150,
    //     // resizeMode: 'contain',
    //     // marginTop: 20,
    //     // marginHorizontal: 10,
    // },
    plcaes: {
        margin: 3,
        color: '#000'
    },
    // rightContainer: {
    //     flex: 1.5,
    //     padding: 10,

    // },
    price: {
        fontSize: 18,
        fontWeight: '900',
        color: '#9A0000',
        // alignSelf: 'flex-end'
    },
    desc: {
        padding: 3
    }
    // ratingContainer: {
    //     flexDirection: 'row',
    // },
    // star: {
    //     margin: 2,
    //     marginVertical: 7,
    // },
    // shadowProp: {
    //     borderWidth: 0.1,
    //     borderColor: "#000",
    //     elevation: 4,
    // }
})

export default styles;
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    root: {
        // flexDirection: 'row',
        margin: 4,
        backgroundColor: 'white',
        height: '100%',
        padding: 1,
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
        margin: 2,
        borderRadius: 10
    },
    rootimage: {
        resizeMode: 'contain',
        margin: 1,
    },
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
        alignSelf: 'flex-end',
        margin: 5
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
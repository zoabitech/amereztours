import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        margin: 4,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: "#000",
        elevation: 4,
    },
    rootimage: {
        flex: 1.5,
        height: 150,
        resizeMode: 'contain',
        marginTop: 20,
        marginHorizontal: 10,
    },
    image: {
        flex: 1.5,
        height: 150,
        resizeMode: 'contain',
        marginTop: 20,
        marginHorizontal: 10,
    },
    like: {
        alignSelf: 'flex-end',
    },
    title: {
        fontSize: 18,
        fontWeight: '900',
        color: '#005B99'
    },
    plcaes: {
        margin: 3,
        color: '#000'
    },
    rightContainer: {
        flex: 1.5,
        padding: 10,

    },
    price: {
        fontSize: 18,
        fontWeight: '900',
        color: '#9A0000',
        alignSelf: 'flex-end'
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    star: {
        margin: 2,
        marginVertical: 7,
    },
})

export default styles;
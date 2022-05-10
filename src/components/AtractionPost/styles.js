import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        margin: 7,
        backgroundColor: 'white',
    },
    image: {
        flex: 1,
        maxWidth: 150,
        height: '100%',
        resizeMode: 'stretch',
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
    leftContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: 'while',
    },
    price: {
        fontSize: 18,
        fontWeight: '900',
        color: '#9A0000'
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    like: {
        alignSelf: 'flex-end'
    },
    star: {
        margin: 2,
        marginVertical: 7,
    },
    shadowProp: {
        borderWidth: 0.1,
        borderColor: "#000",
        elevation: 4,
    },
    pi: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default styles;
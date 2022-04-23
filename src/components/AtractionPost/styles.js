import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        margin: 3,
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
        fontWeight: '900'
    },
    plcaes: {

    },
    leftContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: 'while',
    },
    price: {
        fontSize: 18,
        fontWeight: '900',
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    star: {
        margin: 2,
        marginVertical: 7,
    },
    shadowProp: {
        borderWidth: 0.1,
        borderColor: "#000",
        elevation: 4,
    }
})

export default styles;
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        margin: 4,
        backgroundColor: 'white',
    },
    image: {
        flex: 1.5,
        height: 150,
        resizeMode: 'contain',
        marginTop: 20,
        marginHorizontal: 10
    },
    title: {
        fontSize: 18,
        fontWeight: '900'
    },
    plcaes: {

    },
    rightContainer: {
        flex: 1.5,
        padding: 10,
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
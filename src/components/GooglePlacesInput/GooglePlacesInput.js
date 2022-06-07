import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StyleSheet, View } from 'react-native'

const GooglePlacesInput = () => {
    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder="Search"
                query={{
                    key: 'AIzaSyCTdxFZgp-AY6YpRcLYHtCnnCCLF5UOn-E',
                    language: 'en', // language of the results
                }}
                onPress={(data, details = null) => console.log(data)}
                onFail={(error) => console.error(error)}
                fetchDetails={true}
            // requestUrl={{
            //   url:
            //     'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
            //   useOnPlatform: 'web',
            // }} // this in only required for use on the web. See https://git.io/JflFv more for details.
            />
        </View>
    );
};
export default GooglePlacesInput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        // paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#ecf0f1',
    },
});
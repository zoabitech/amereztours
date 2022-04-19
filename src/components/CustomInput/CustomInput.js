import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomImput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                style={styles.input} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100 %',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 3,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {

    }
})
export default CustomImput
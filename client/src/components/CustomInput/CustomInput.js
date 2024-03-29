import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Controller } from 'react-hook-form';
import React from 'react'

const CustomInput = ({ control, name, rules = {}, placeholder, secureTextEntry, style }) => {
    return (

        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <View style={[styles.container, {
                        borderColor: error ? 'red' : '#e8e8e8'
                    }, style]}>
                        < TextInput
                            style={styles.input}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            secureTextEntry={secureTextEntry}
                        />
                    </View >
                    {error && (<Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>)}
                </>
            )}
        />

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
export default CustomInput
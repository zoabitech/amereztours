import { StyleSheet, View } from 'react-native'
import React from 'react'
import CustomDatePicker from '../../components/DatePakier/CustomDatePicker';
import EndCustomDatePicker from '../../components/DatePakier/EndCustomDatePicker';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
const DatePiker = ({ control, loading, onSearchPressed, handleSubmit }) => {
    return (
        <View style={styles.root}>
            <CustomDatePicker
                textStyle={{
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                    borderColor: '#febb02',
                    borderWidth: 2,
                    marginTop: 15,
                    marginBottom: 0,
                    margin: 10,
                }}
            />
            <EndCustomDatePicker
                textStyle={{
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                    borderColor: '#febb02',
                    borderWidth: 2,
                    marginTop: 0,
                    marginBottom: 0,
                    margin: 10
                }}
            />
            <CustomInput
                name="Guste"
                placeholder="Participants"
                control={control}
                // rules={{ required: 'First name is required', pattern: { value: 10, message: 'First name is invalid' } }}
                style={{
                    borderColor: '#febb02',
                    borderWidth: 2,
                    width: '94.5%',
                    alignSelf: 'center',
                    backgroundColor: 'blcak',
                    marginTop: 0
                }}
            />

            <CustomButton
                text={(loading) ? 'Loading...' : 'Search'}
                type='TERTIARY'
                loading={loading}
                bgColor="rgb(251, 78, 41)"
                fgColor="rgb(193,202,202)"
                onPress={handleSubmit(onSearchPressed)}
            />
        </View>
    )
}

export default DatePiker;

const styles = StyleSheet.create({
    root: {
        margin: 10
    }
})
import { StyleSheet, View, FlatList, Text } from 'react-native'
import React, { useContext } from 'react'
import { atractionData } from '../../Data/atractiondata'
import AtractionPost from '../../components/AtractionPost';
import CustomDatePicker from '../../components/DatePakier/CustomDatePicker';
import EndCustomDatePicker from '../../components/DatePakier/EndCustomDatePicker';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useForm, Controller } from 'react-hook-form';
import { StartDateContext } from "../../context/StartDateContext";
import { EndDateContext } from "../../context/EndDateContext";
const AtractionSearchScreen = () => {

    const { control, handleSubmit, watch } = useForm();
    const { startDate } = useContext(StartDateContext);
    const { endDate } = useContext(EndDateContext);
    const onSearchPressed = () => {
        console.log(startDate);
        console.log(endDate);
    }
    return (

        <View style={styles.root}>
            {/* <FlatList
                data={atractionData}
                renderItem={({ item }) => <AtractionPost item={item} />
                }rr
            /> */}
            <CustomDatePicker
                textStyle={{
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                    borderColor: '#febb02',
                    borderWidth: 2,
                    marginTop: 15,
                    marginBottom: 0,
                    margin: 10
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
                text="Search"
                type='TERTIARY'
                bgColor="rgb(251, 78, 41)"
                fgColor="rgb(193,202,202)"
                onPress={handleSubmit(onSearchPressed)}
            />
        </View>
    )
}

export default AtractionSearchScreen;

const styles = StyleSheet.create({
    root: {
        margin: 10
    }
})
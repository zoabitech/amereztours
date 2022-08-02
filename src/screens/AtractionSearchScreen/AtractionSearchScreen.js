import { StyleSheet, View, FlatList } from 'react-native'
import React, { useContext, useState } from 'react'
import AtractionPost from '../../components/AtractionPost';
import CustomDatePicker from '../../components/DatePakier/CustomDatePicker';
import EndCustomDatePicker from '../../components/DatePakier/EndCustomDatePicker';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useForm } from 'react-hook-form';
import { StartDateContext } from "../../context/StartDateContext";
import { EndDateContext } from "../../context/EndDateContext";
// import DatePiker from '../../components/DatePakierCon/DatePiker';
import { DataContext } from '../../context/DataContext';
const AtractionSearchScreen = () => {

    const { control, handleSubmit, watch } = useForm();
    const { startDate } = useContext(StartDateContext);
    const { endDate } = useContext(EndDateContext);
    const { data, setData } = useContext(DataContext)
    const [loading, setLodaing] = useState(false);

    const onSearchPressed = () => {
        // on search function that get all the atraction acording the start date and end date using fetch
        const payload = {
            startDate,
            endDate,
        };
        fetch(`http://172.16.0.50:3306/fetchAtractionByDateResults`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        }).then(async res => {
            try {
                setLodaing(true);
                const jsonRes = await res.json();
                console.log(jsonRes)
                if (res.status !== 200) {
                    alert(jsonRes.message);
                } else {
                    setData(jsonRes)
                    console.log("jsonRes", JSON.stringify(jsonRes, null, 4))
                }
            } catch (err) {
                console.log("a", err.message);
            } finally {
                setTimeout(() => {
                    setLodaing(false);
                }, 5000)
            }
        }).catch(err => {
            console.log("b", err.message);
        });
    };
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
            {data?.length > 0 &&
                < FlatList
                    scrollEnabled
                    data={data}
                    renderItem={({ item }) => <AtractionPost item={item} />
                    }
                />
            }
        </View>
        // <>
        //     <DatePiker
        //         control={control}
        //     />
        //     <CustomButton
        //         text={(loading) ? 'Loading...' : 'Search'}
        //         type='TERTIARY'
        //         bgColor="rgb(251, 78, 41)"
        //         fgColor="rgb(193,202,202)"
        //         onPress={handleSubmit(onSearchPressed)}
        //     />
        // </>
    )
}

export default AtractionSearchScreen;

const styles = StyleSheet.create({
    root: {
        margin: 10
    }
})
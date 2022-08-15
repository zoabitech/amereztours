import { StyleSheet, View, FlatList, Pressable, Text, SafeAreaView, StatusBar } from 'react-native'
import React, { useContext, useState } from 'react'
import CarPost from '../../components/CarPost/CarPost'
import CustomDatePicker from '../../components/DatePakier/CustomDatePicker';
import EndCustomDatePicker from '../../components/DatePakier/EndCustomDatePicker';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useForm } from 'react-hook-form';
import { StartDateContext } from "../../context/StartDateContext";
import { EndDateContext } from "../../context/EndDateContext";
import { CarDataContext } from '../../context/CarDataContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CarSearchScreen = () => {

    const { control, handleSubmit, watch } = useForm();
    const { carData, setCarData } = useContext(CarDataContext)
    const { startDate } = useContext(StartDateContext);
    const { endDate } = useContext(EndDateContext);
    const [loading, setLodaing] = useState(false);

    const onSearchPressed = () => {
        // on search function that get all the cars acording the start date and end date and amount of gusets using fetch
        const payload = {
            available: 1
        };
        fetch(`http://192.168.1.22:3001/fetchVehicleByDateResults`, {
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
                    setCarData(jsonRes)
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
        <>{carData === undefined &&
            < View style={styles.root}>

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
                {/* {carData !== undefined &&
                <FlatList
                    data={carData}
                    renderItem={({ item }) => <CarPost item={item} />
                    }
                />
            } */}
            </View>
        }
            {
                carData !== undefined &&
                <>
                    <Pressable
                        onPress={() => setCarData(undefined)}
                    >
                        <Text style={{ marginLeft: 5, marginTop: 5, marginBottom: 0 }}>
                            <Ionicons
                                name="arrow-back"
                                size={25}
                            />
                        </Text>
                    </Pressable>
                    <SafeAreaView style={{ marginBottom: 30 }}>
                        <StatusBar hidden />
                        <FlatList
                            data={carData}
                            renderItem={({ item }) => <CarPost item={item} />
                            }
                        />
                    </SafeAreaView>
                </>
            }
        </>
    )
}

export default CarSearchScreen

const styles = StyleSheet.create({
    root: {
        margin: 1,
    }
})
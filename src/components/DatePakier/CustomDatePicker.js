import React, { useState, useContext } from "react";
import { Modal, StyleSheet, Text, TouchableHighlight, View, Platform } from "react-native";
import DateTimePiker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { StartDateContext } from '../../context/StartDateContext';

const CustomDatePicker = (props) => {
    const { textStyle, defaultDate } = props;
    // const [date, setDate] = useState(moment(defaultDate));
    const { startDate, setStartDate } = useContext(StartDateContext);
    const [show, setShow] = useState(false);

    const onChange = (e, selectDate) => {
        setStartDate(moment(selectDate))
    }
    const onCancelPressed = () => {
        setStartDate(moment(StartDateContext));
        setShow(false)
    }
    const onAndroidChangeEvent = (e, selectDate) => {
        setShow(false);
        if (selectDate) {
            setStartDate(moment(selectDate))
            props.onDateChange(selectDate);
        }
    }

    const onDonePressed = () => {
        props.onDateChange(startDate);
        setShow(false)
    }

    const renderDatePicker = () => {
        return (
            <DateTimePiker
                timeZoneOffsetInMinutes={0}
                value={new Date(startDate)}
                mode="date"
                minimumDate={new Date(moment().subtract(120, 'years').format('YYYY-MM-DD'))}
                maximumDate={new Date(moment().format('YYYY-MM-DD'))}
                onChange={Platform.OS === 'ios' ? onChange : onAndroidChangeEvent}
            />
        )

    }

    return (

        <TouchableHighlight
            activeOpacity={0}
            onPress={() => setShow(true)}>
            <View>
                <Text style={textStyle}>{startDate.format('MMM Do,YYYY')}</Text>

                {Platform !== 'ios' && show && renderDatePicker()}
                {Platform === 'ios' && (<Modal
                    transparent={true}
                    animationType="slide"
                    visible={show}
                    supportedOrientations={['portrait']}
                    onRequestClose={() => setShow(false)}
                >
                    <View style={{ flex: 1 }}>
                        <TouchableHighlight
                            style={{
                                flex: 1,
                                alignItems: 'flex-end',
                                flexDirection: 'row',
                            }}
                            activeOpacity={1}
                            visible={show}
                            onPress={() => setShow(false)}

                        >
                            <TouchableHighlight
                                underlayColor={'#FFFFFF'}
                                style={{
                                    flex: 1,
                                    borderTopColor: '#E9E9E9',
                                    borderTopWidth: 1
                                }}
                                onPress={() => console.log('date Piker Clicked')}
                            >
                                <View style={{
                                    backgroundColor: 'white',
                                    height: 256,
                                    overflow: 'hidden',

                                }}>
                                    <View Style={{
                                        marginTop: 20
                                    }}>
                                        {renderDatePicke()}
                                    </View>
                                    <TouchableHighlight
                                        underlayColor={'transparent'}
                                        onPress={onCancelPressed}
                                        style={[styles.btnText, styles.btnCancel]}
                                    >
                                        <Text>Cancel</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight
                                        underlayColor={'transparent'}
                                        onPress={onDonePressed}
                                        style={[styles.btnText, styles.btnDone]}
                                    >
                                        <Text>Done</Text>
                                    </TouchableHighlight>

                                </View>
                            </TouchableHighlight>
                        </TouchableHighlight>
                    </View>
                </Modal>)}
            </View >
        </TouchableHighlight >

    )
}

CustomDatePicker.defaultsProps = {
    textStyle: {},
    defaultDate: moment(),
    onDateChange: () => { },
}

export default CustomDatePicker;

const styles = StyleSheet.create({
    btnText: {
        position: 'absolute',
        top: 0,
        height: 2,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    btnCancel: {
        laft: 0
    },
    btnDone: {
        right: 0
    }
})
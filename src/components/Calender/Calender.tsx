import React from 'react'
import styles from './styles'
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

const Calender = () => {
    const marked = {
        '2023-05-09': { selected: true, selectedColor: '#210FF9' },
        '2023-05-12': { selected: false, selectedColor: '#aa2222', selectedTextColor: 'yellow' },
        '2023-05-13': {
            marked: false,
            selected: false,
            selectedColor: '#222222',
            selectedTextColor: 'yellow',
            dotColor: 'white'
        }
    };
    return (
        <View style={[styles.card, styles.elevation]}>
            <View >
                <Calendar
                    markedDates={marked}
                />
                <View style={styles.container}>
                    <Text style={styles.sch}>Schedules</Text>
                    <Text style={styles.mrng}>Morning Shift</Text>
                    <Text style={styles.night}>Night Shift</Text>
                </View>
            </View>
        </View>
    )
}

export default Calender
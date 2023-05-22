import React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';

const AllEmp = () => {
    return (
        <View style={[styles.card, styles.elevation]}>
            <View style={styles.container}>
                <Text style={styles.allemp}>All Employees</Text>
                <View style={styles.container1}>
                    <Text style={styles.nine}>90.</Text>
                    <Text style={styles.two}>26%</Text>
                </View>
                <Text style={styles.att}>Attendence % YTD</Text>
            </View>
        </View>
    )
}

export default AllEmp
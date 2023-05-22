import React from 'react'
import { View } from 'react-native';
import { Text } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const EmpList = () => {
    return (
        <View style={[styles.card, styles.elevation]}>
            <View style={styles.container}>
                <Text style={styles.emplist}>Employee List</Text>
                <Text style={styles.dob}>DOB</Text>
            </View>
            <View style={styles.container}>
                <Text><Icon name='person-circle-outline' size={40} /></Text>
                <View style={styles.container1}>
                    <Text style={styles.name}>Derrick B.Bendel</Text>
                    <Text style={styles.shift}>Morning Shift</Text>
                </View>
                <Text style={styles.dob1}>DOB</Text>
            </View>
            <View>
                <Text style={styles.cont}></Text>
            </View>
            <View style={styles.container3}>
                <Text><Icon name='person-circle-outline' size={40} /></Text>
                <View style={styles.container1}>
                    <Text style={styles.name}>Ronald Hodges</Text>
                    <Text style={styles.shift}>Night Shift</Text>
                </View>
                <Text style={styles.dob1}>DOB</Text>
            </View>
            <View>
                <Text style={styles.cont}></Text>
            </View>
            <View style={styles.container3}>
                <Text><Icon name='person-circle-outline' size={40} /></Text>
                <View style={styles.container1}>
                    <Text style={styles.name}>Charles Williams</Text>
                    <Text style={styles.shift}>Night Shift</Text>
                </View>
                <Text style={styles.dob1}>DOB</Text>
            </View>
            <View>
                <Text style={styles.cont}></Text>
            </View>
            <View style={styles.container3}>
                <Text><Icon name='person-circle-outline' size={40} /></Text>
                <View style={styles.container1}>
                    <Text style={styles.name}>Tammy Collier</Text>
                    <Text style={styles.shift}>Morning Shift</Text>
                </View>
                <Text style={styles.dob1}>DOB</Text>
            </View>
            <View style={styles.showmorev}>
                <Text style={styles.showmoret}>Show More</Text>
            </View>
        </View>
    )
}

export default EmpList
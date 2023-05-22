import { FlatList, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';

const data = [
    { id: 1, name: ' Gaina', schedule: 'Morning Shift', dob: 'Nov 26', status: 'Inactive' },
    { id: 2, name: ' Praveen', schedule: 'Night Shift', dob: 'Jan 17', status: 'active' },
    { id: 3, name: ' Ganesh', schedule: 'Night Shift', dob: 'Jul 09', status: 'Inactive' },
    { id: 4, name: ' Mouni', schedule: 'Morning Shift', dob: 'Nov 20', status: 'active' },
    { id: 5, name: ' Sravani', schedule: 'Night Shift', dob: 'May 15', status: 'active' }
]
const TableOne = () => {
    const item = ({ item }) => (
        <View style={styles.container}>
            <View style={styles.no}>
                <Text style={styles.id}>{item.id}</Text>
            </View>
            <View style={styles.container3}>
                <Text><Icon name='person-circle-outline' size={18} /></Text>
                <Text style={styles.empname}>{item.name}</Text>
            </View>
            <View style={styles.schv}>
                <Text style={styles.sch}>{item.schedule}</Text>
            </View>
            <View style={styles.dob}>
                <Text style={styles.sch}>{item.dob}</Text>
            </View>
            <View style={styles.status}>
                <Text style={item.status === 'active' ? styles.stat : styles.inactive}>{item.status}</Text>
            </View>
            <View style={styles.container4}>
                <Text><Icon1 name='edit' size={18} /></Text>
                <Text><Icon2 name='dots-two-horizontal' size={18} /></Text>
            </View>
        </View>
    )
    return (
        <View style={[styles.card, styles.elevation]}>
            <View>
                <Text style={styles.empdash}>Employee Dashboard</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.headings}>Sl.No</Text>
                <Text style={styles.headings}>Employee</Text>
                <Text style={styles.headings}>Schedule</Text>
                <Text style={styles.headings}>Date of Birth</Text>
                <Text style={styles.headings}>Status</Text>
                <Text style={styles.headings}>Action</Text>
            </View>
            <FlatList data={data} renderItem={item} keyExtractor={item => item.id.toString()} />
        </View>
    )
}
export default TableOne
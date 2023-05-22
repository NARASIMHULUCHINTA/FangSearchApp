import React from 'react'
import { View } from 'react-native';
import { Text } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
const Duites = () => {
    return (
        <View style={[styles.card, styles.elevation]}>
            <View >
                <Text style={styles.duties}>Duties</Text>
                <View style={styles.container}>
                    <Text style={styles.circle}><Icon name='circle' size={18} /></Text>
                    <View style={styles.std}>
                        <Text style={styles.stan}>Standard</Text>
                        <Text style={styles.time}>6:00 to 12:00pm</Text>
                    </View>
                    <Text style={styles.num}>28</Text>
                </View>
                <View style={styles.container1}>
                    <Text style={styles.penta}><Icon1 name='pentagon' size={18} /></Text>
                    <View style={styles.std}>
                        <Text style={styles.stan}>Early</Text>
                        <Text style={styles.time}>4:00 to 11:00pm</Text>
                    </View>
                    <Text style={styles.num1}>16</Text>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.tri}><Icon2 name='triangle-up' size={18} /></Text>
                    <View style={styles.std}>
                        <Text style={styles.stan}>On call</Text>
                        <Text style={styles.ward}>General ward</Text>
                        <Text style={styles.time}>6:00 to 12:00pm</Text>
                        <Text style={styles.ward}>Pediatric ward</Text>
                        <Text style={styles.time}>6:00 to 12:00pm</Text>
                    </View>
                    <Text style={styles.num2}>36</Text>
                </View>
            </View>

        </View>
    )
}

export default Duites
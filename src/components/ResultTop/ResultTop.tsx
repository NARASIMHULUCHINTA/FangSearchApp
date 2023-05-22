import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from "react-native-vector-icons/Ionicons";
import styles from './styles';

const ResultTop = () => {
    return (
        <View style={styles.NavbarContainer}>
            <Text style={styles.Menu}><Icon name="navicon" size={30} /></Text>
            <Image style={{ height: 38, width: 172, alignSelf: 'center', marginBottom: 20, marginTop: 30 }} source={require('../../assets/logo.png')} />
            <Text style={styles.Icons}><Icon2 name="person-circle-outline" size={30} /></Text>
        </View>
    )
}

export default ResultTop
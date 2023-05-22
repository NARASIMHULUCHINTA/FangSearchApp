import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from "react-native-vector-icons/Ionicons";
import styles from './styles';


const Navbar = () => {
    return (
        <View
            style={styles.NavbarContainer}
        >
            <Icon name="navicon" size={30} style={styles.Menu} />
            <Text style={styles.Text}>ALL</Text>
            <Text style={styles.TextImage}>IMAGES</Text>
            <Text style={styles.Icons}><Icon1 name="dots-grid" size={30} /></Text>
            <Text style={styles.Icons}><Icon2 name="person-circle-outline" size={30} /></Text>
        </View>
    )
}

export default Navbar
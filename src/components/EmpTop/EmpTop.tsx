import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './styles'
const EmpTop = () => {
    return (
        <View style={[styles.card, styles.elevation]}>
            <View style={styles.container}>
                <Text style={styles.company}>Companies</Text>
                <Text style={styles.ash} >/</Text>
                <Text style={styles.fang}>Fang</Text>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
            </View>
        </View>
    )
}

export default EmpTop
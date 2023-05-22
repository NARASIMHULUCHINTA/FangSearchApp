import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
const Endtext = () => {
    return (
        <View >
            <Text style={styles.firstline}>Fang offered in :</Text>
            <View style={styles.contain}>
                <View style={styles.container}>
                    <Text style={styles.lang}>Hindi</Text>
                    <Text style={styles.lang}>తెలుగు</Text>
                    <Text style={styles.lang}>বাংলা </Text>
                    <Text style={styles.lang}>Marati</Text>
                    <Text style={styles.lang}>ગુજરાતી </Text>
                    <Text style={styles.lang}>ಕನ್ನಡ</Text>
                </View>
                <View style={styles.container1}>
                    <Text style={styles.lang1}>മലയാളം</Text>
                    <Text style={styles.lang}>ਪੰਜਾਬੀ</Text>
                </View>
            </View>
        </View>
    )
}

export default Endtext
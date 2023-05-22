import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/Fontisto';
import Icon5 from 'react-native-vector-icons/Foundation';
const ProfileTop = () => {
    return (
        <View>
            <View style={[styles.card, styles.elevation]}>
                <View style={styles.container}>
                    <Text style={styles.company}>Companies</Text>
                    <Text style={styles.ash} >/</Text>
                    <Text style={styles.fang}>Fang</Text>
                    <Image style={styles.logo} source={require('../../assets/logo.png')} />
                </View>
            </View>
            <View style={[styles.card1, styles.elevation]}>
                <View style={styles.container}>
                    <Text style={styles.person}><Icon name='person-circle-outline' size={50} /></Text>
                    <Text style={styles.emppro} >Employee Profile</Text>
                </View>
            </View>
            <View style={[styles.card1, styles.elevation]}>
                <View style={styles.container}>
                    <Image style={styles.employee} source={require('../../assets/employee.png')} />
                    <Text style={styles.empname} >Gaina</Text>
                </View>
                <View style={styles.container1}>
                    <Text style={styles.icon1}><Icon name='location-outline' size={20} /></Text>
                    <View style={styles.innercontainer}>
                        <Text style={styles.head}>Location</Text>
                        <Text style={styles.subhead}>Hyderabad,Telanaga,</Text>
                        <Text style={styles.ind}>India</Text>
                    </View>
                    <View style={styles.container2}>
                        <Text style={styles.icon}><Icon1 name='mail' size={20} /></Text>
                        <View style={styles.innercontainer}>
                            <Text style={styles.head}>Contact</Text>
                            <Text style={styles.subhead}>9876543210</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.icon}><Icon2 name='calendar' size={20} /></Text>
                    <View style={styles.innercontainer}>
                        <Text style={styles.head}>Date of Birth</Text>
                        <Text style={styles.subhead}>02/10/1997</Text>
                    </View>
                    <View style={styles.container4}>
                        <Text style={styles.icon}><Icon3 name='globe' size={20} /></Text>
                        <View style={styles.innercontainer}>
                            <Text style={styles.head}>LinkedIn</Text>
                            <Image style={styles.linkedin} source={require('../../assets/linkedin.png')} />
                        </View>
                    </View>
                </View>
                <View style={styles.container3}>
                    <Image style={styles.team} source={require('../../assets/team.png')} />
                    <View style={styles.innercontainer}>
                        <Text style={styles.head}>Team</Text>
                        <Text style={styles.subhead}>UI/UX</Text>

                    </View>
                    <View style={styles.container5}>
                        <Text style={styles.icon}><Icon4 name='blood-drop' size={20} /></Text>
                        <View style={styles.innercontainer}>
                            <Text style={styles.head}>Blood Group</Text>
                            <Text style={styles.subhead}>B + ve</Text>

                        </View>
                    </View>
                </View>
                <View style={[styles.container3, styles.type]}>
                    <Text style={styles.icon}><Icon5 name='shopping-bag' size={20} /></Text>
                    <View style={styles.innercontainer}>
                        <Text style={styles.head}>Type</Text>
                        <Text style={styles.subhead}>N/A</Text>

                    </View>
                </View>

            </View>
        </View>

    )
}

export default ProfileTop;
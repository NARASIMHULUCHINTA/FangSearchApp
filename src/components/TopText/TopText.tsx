import React from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/Feather';
import Icon5 from 'react-native-vector-icons/MaterialIcons';

import { Image } from 'react-native';
const TopText = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.thirdline}>News</Text>
                <Text style={styles.thirdline}>Images</Text>
                <Text style={styles.thirdline}>Hyderabad</Text>
                <Text style={styles.thirdline}>Bangalore</Text>
            </View>
            <View>
                <Text style={styles.hairline}></Text>
            </View>
            <View style={styles.container1}>
                <Text style={styles.tel}>తెలుగు లో శోధించండి</Text>
                <View style={styles.container2}>
                    <Text><Icon
                        name="search"
                        size={18}
                        color="black"
                    /></Text>
                    <Text style={styles.fang}>ఫాంగ్ టెక్నాలజీస్</Text>

                </View>
                <Text style={styles.ques}><Icon1 name='questioncircleo' size={18} /></Text>
            </View>
            <View>
                <Text style={styles.hairlinew}></Text>
            </View>
            <View style={styles.container1}>
                <Image style={styles.globe} source={require('../../assets/globe.png')} />
                <View style={styles.hypercontainer}>
                    <Text style={styles.fangtext}>Fang Technologies</Text>
                    <Text style={styles.fanghttp}>https://fangtechnologies.com</Text>
                </View>
                <Text style={styles.threedot}>
                    <Icon2 name='dots-three-vertical' size={15} />
                </Text>

            </View>
            <View>
                <Text style={styles.fangblue}>Fang Technologies</Text>
                <Text style={styles.fangdesc}>Fang Technologies is a leading provider of innovative
                    software solutions for the IT  industry.Founded in 2022
                    and based in hyderabad,our mission is to improve ...
                </Text>
            </View>
            <View>
                <Text style={styles.hairlinew}></Text>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.pvt}>Fangs Technology Pvt</Text>
                    <Text style={styles.pvt}>Ltd(vivo-TN)       </Text>
                </View>
                <Text style={styles.three}>
                    <Icon2 name='dots-three-vertical' size={15} />
                </Text>
                <Image style={styles.company} source={require('../../assets/company.png')} />
            </View>
            <View style={styles.container4}>
                <Text style={styles.four}>4.1</Text>
                <Text style={styles.yellowstar}><Icon2 name='star' size={11} /></Text>
                <Text style={styles.yellowstar}><Icon2 name='star' size={11} /></Text>
                <Text style={styles.yellowstar}><Icon2 name='star' size={11} /></Text>
                <Text style={styles.yellowstar}><Icon2 name='star' size={11} /></Text>
                <Text style={styles.star}><Icon2 name='star' size={11} /></Text>
                <Text style={styles.sevenfive}>(75)</Text>
            </View>
            <View style={styles.container1}>
                <Text style={styles.corporate}>
                    Corporate office .
                </Text>
                <Text style={styles.open}>Open</Text>
            </View>
            <View style={styles.container3}>
                <Text>
                    <Icon1 name='sound' size={25} style={styles.sound} />
                </Text>
                <Text style={styles.hear}>Hear about this place</Text>
            </View>
            <View style={styles.container5}>
                <Text style={styles.over}>OVERVIEW</Text>
                <Text style={styles.opra}>PHOTOS</Text>
                <Text style={styles.opra}>REVIEWS</Text>
                <Text style={styles.opra}>ABOUT</Text>
            </View>
            <View style={styles.container6}>
                <Text style={styles.phone}><Icon3 name='phone' size={22} /></Text>
                <Text style={styles.share}><Icon3 name='directions' size={22} /></Text>
                <Text style={styles.share}><Icon4 name='share-2' size={22} /></Text>
                <Text style={styles.share}><Icon name='globe' size={22} /></Text>
            </View>
            <View style={styles.container7}>
                <Text style={styles.pdsw}>PHONE</Text>
                <Text style={styles.pdsw}>DIRECTION</Text>
                <Text style={styles.pdsw}>SHARE</Text>
                <Text style={styles.pdsw}>WEBSITE</Text>
            </View>
            <View>
                <Text style={styles.hairlinewi}></Text>
            </View>
            <View style={styles.container1}>
                <Text style={styles.location} ><Icon2 name='location-pin' size={30} /></Text>
                <View style={styles.container8}>
                    <Text style={styles.address}>156, Mahalakshmi Building</Text>
                    <Text style={styles.address}>Nungambakkam High Road</Text>
                    <Text style={styles.address}>Nungambakkam Landmark, next</Text>
                    <Text style={styles.address}>to Harrison Hotel, Chennai, Tamil</Text>
                    <Text style={styles.address}>Nadu, 600034.</Text>
                </View>
                <Image style={styles.map} source={require('../../assets/map.png')} />
            </View>
            <View>
                <Text style={styles.hairlinewi}></Text>
            </View>
            <View style={styles.container9}>
                <Text><Icon4 name='clock' size={30} style={styles.clock} /></Text>
                <Text style={styles.open1}>Open</Text>
                <Text style={styles.dot}> . </Text>
                <Text style={styles.close}>Closes 6:30 pm</Text>
                <Text style={styles.arrow}><Icon5 name='keyboard-arrow-down' size={20} /></Text>
            </View>
            <View>
                <Text style={styles.hairlinewi}></Text>
            </View>
            <View style={styles.contain9}>
                <Text style={styles.more}>More about Fangs Technology Pvt Ltd(vivo-...</Text>
                <Text style={styles.rightarrow}><Icon5 name='keyboard-arrow-right' size={20} /></Text>
            </View>
            <View>
                <Text style={styles.hairlinew}></Text>
            </View>
            <View style={styles.container1}>
                <Image style={styles.linkedin} source={require('../../assets/linkedin.png')} />
                <View style={styles.hypercontainer}>
                    <Text style={styles.fangtext}>Linkedln: Jobs & Business News </Text>
                    <Text style={styles.fanghttp}>App installed</Text>
                </View>
                <Text style={styles.threedot1}>
                    <Icon2 name='dots-three-vertical' size={20} />
                </Text>

            </View>
            <View>
                <Text style={styles.fangblue1}>Fang Technologies</Text>
                <Text style={styles.fangdesc1}>Fang Technologies is a leading provider of innovative
                </Text>
            </View>
        </View>

    )
}

export default TopText
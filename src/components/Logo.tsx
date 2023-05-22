import React from 'react';
import { Image } from 'react-native';


const Logo = () => {
    return (
        <Image style={{ height: 56, width: 230, alignSelf: 'center', marginBottom: 10 }} source={require('../assets/logo.png')} />

    )
}

export default Logo;
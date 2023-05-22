import React from "react";
import { TextInput, View, Keyboard, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Entypo';
import styles from "./styles";
import { Text } from "react-native";

const SearchBar = () => {
    return (
        <View style={[styles.container]}>
            <View
                style={
                    styles.searchbar
                }
            >

                <Text><Icon
                    name="search"
                    size={18}
                    color="black"
                    style={{ marginLeft: 1 }}
                /></Text>

                <TextInput
                    style={styles.input}
                    placeholder="Fang Technologies"
                />

                <Text><Icon1
                    name="mic"
                    size={18}
                    color="black"

                /></Text>

                <Text><Icon2
                    name="camera"
                    size={18}
                    color="black"

                /></Text>

            </View>

        </View>

    );
};
export default SearchBar;


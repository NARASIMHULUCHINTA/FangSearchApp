import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 5,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        height: 37,
        width: 351,

    },

    searchbar: {
        padding: 10,
        flexDirection: "row",
        width: 391,
        backgroundColor: "#ffffff",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
        borderWidth: 0.5,
        borderColor: '#000000',
        marginBottom: -5,
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "75%",
    },

});
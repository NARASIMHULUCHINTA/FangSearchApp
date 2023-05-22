import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 3,
        marginLeft: 10,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        height: 40,
        width: 347,
        marginTop: 15,
    },

    searchbar: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "row",
        width: 391,
        backgroundColor: "#ffffff",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "space-evenly",
        borderWidth: 0.5,
        borderColor: '#000000',
        marginBottom: -5,
    },
    shadowProp: {
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },
    input: {
        fontSize: 15,
        marginLeft: 10,
        width: "75%",
    },

});
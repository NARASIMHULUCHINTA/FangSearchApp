import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'space-between',
    },
    no: {
        width: 30,
        marginLeft: -25,
        marginTop: 10,
    },
    id: {
        fontSize: 10,
        textAlign: 'center',
        color: '#000000',
    },

    empname: {
        fontSize: 10,
        textAlign: 'center',
        color: '#000000',
    },
    schv: {

        marginTop: 10,

    },
    sch: {
        fontSize: 10,
        color: '#000000',
    },
    container1: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 30,
        paddingHorizontal: 25,
        width: '95%',
        marginVertical: 10,
        marginTop: 10,
        marginLeft: 10,

    },
    elevation: {
        shadowColor: '#52006A',
        elevation: 20,
    },
    empdash: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 14,

    },
    container2: {
        backgroundColor: '#E8E8E8',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        marginLeft: -15,
        marginRight: -15,
        padding: 5,
    },
    container3: {
        flexDirection: 'row',
        marginTop: 10,
        width: 50,
        marginLeft: -5,
    },
    container4: {
        flexDirection: 'row',
        marginTop: 10,
        marginRight: -20,
    },
    headings: {
        fontSize: 12,
    },
    dob: {

        marginTop: 10,

    },
    status: {
        marginLeft: 5,
        marginRight: -10,
        marginTop: 10,
    },
    stat: {
        fontSize: 10,
        color: '#000000',

        padding: 2,
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: '#BEFBB4',
        opacity: 19,
    },
    inactive: {
        fontSize: 10,
        color: '#000000',
        padding: 2,
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: '#E8C23C',
        opacity: 19,
    }
})
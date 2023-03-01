import { StyleSheet } from 'react-native';

export const paymentStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 50,
        marginBottom: 20,
    },
    sub: {
        fontSize: 30,
        marginBottom: 10,
    },
    buttonsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '60%',
    },
    button: {
        backgroundColor: '#242222',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    
});
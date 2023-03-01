import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginVertical: 10,
        width: '100%',
        backgroundColor: '#e6e8eb',
        textAlign: 'center',
    },
    
});
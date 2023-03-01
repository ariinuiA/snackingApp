import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
    arrow: {
        fontSize: 30,
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: '#7a002d',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        width: '50%',
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
        width: '50%',
        textAlign: 'center',
    },
    table: {
        borderWidth: 1,
        borderColor: 'black',
        width: '100%',
    },
    tableRow: {
        flexDirection: 'row',
        backgroundColor: 'lightgray',
    },
    tableCell: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        flex: 1,
        textAlign: 'center',
    },
});

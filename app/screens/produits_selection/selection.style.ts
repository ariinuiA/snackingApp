import { StyleSheet } from 'react-native';

export const selectionStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
      width: '100%',
    },
    image: {
      flex: 1,
      marginHorizontal: 5,
      borderWidth: 10,
      borderColor: 'white',
    },
  });
import { Text, TextInput, TouchableHighlight, View, Image } from 'react-native';
import React from 'react';
import { styles } from './charge.style';

interface ChargeAccountScreenProps{
  navigation: any;
}

const ChargeAccountScreen = (props: ChargeAccountScreenProps) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your balance: -- $</Text>
      <View style={styles.buttonsContainer}>
        <TextInput style={styles.input} placeholder="Montant..." />
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>Recharger</Text>
        </TouchableHighlight>
      </View>
    </View>  
  );
};

export default ChargeAccountScreen;
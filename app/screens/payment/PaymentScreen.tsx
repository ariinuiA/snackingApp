import { Text, TouchableOpacity, View, Image, Button } from 'react-native';
import React from 'react';
import { paymentStyle } from './payment.style';


interface PaymentScreenProps{
  navigation: any;
}

const PaymentScreen = (props: PaymentScreenProps) => {

  return (
    <View style={paymentStyle.container}>
      <Text style={paymentStyle.title}>Payment</Text>
      <Text style={paymentStyle.sub}></Text>
      <Text style={paymentStyle.sub}>Product price: -- $</Text>
      <Text style={paymentStyle.sub}>Your balance: -- $</Text>
      <View style={paymentStyle.buttonsContainer}>
        <TouchableOpacity style={paymentStyle.button}>
          <Text style={paymentStyle.buttonText}>Contactless payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={paymentStyle.button}>
          <Text style={paymentStyle.buttonText}>Credits</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentScreen;
import { TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { selectionStyles } from './selection.style';
import React from 'react';
import snackImages from './snackImages';

interface SelectionScreenProps{
    navigation: any;
}

const SelectionScreen = (props: SelectionScreenProps) => {

  const payment = () => props.navigation.navigate('Payment');
  
  return (
    <ScrollView style={selectionStyles.container}>

      <View style={selectionStyles.row}>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.doritos_orange} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.doritos_red} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.eau_evian} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      <View style={selectionStyles.row}>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.eau_royale} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.espresso} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.fanta_orange} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      <View style={selectionStyles.row}>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.fresh_juice} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.lays_bbq} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.lays_bolo} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      <View style={selectionStyles.row}>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.milka_crispy} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.milka_oreo} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.kitkat} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      <View style={selectionStyles.row}>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.milka_crispy} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.milka_oreo} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.kitkat} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      <View style={selectionStyles.row}>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.milka_crispy} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.milka_oreo} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.kitkat} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      <View style={selectionStyles.row}>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.milka_crispy} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.milka_oreo} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress = {payment}>
          <Image source={snackImages.kitkat} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      
    </ScrollView>
    
  );
};

export default SelectionScreen;


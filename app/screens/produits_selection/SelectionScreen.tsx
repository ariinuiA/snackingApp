import { TouchableOpacity, View, Image } from 'react-native';
import { selectionStyles } from './selection.style';
import React from 'react';
import snackImages from './snackImages';

interface SelectionScreenProps{
    navigation: any;
}

const SelectionScreen = (props: SelectionScreenProps) => {

  return (
    <View style={selectionStyles.container}>
  <View style={selectionStyles.row}>
    <TouchableOpacity>
      <Image source={snackImages.doritos_orange} resizeMode="contain" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={snackImages.doritos_red} resizeMode="contain" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={snackImages.eau_evian} resizeMode="contain" />
    </TouchableOpacity>
  </View>
  <View style={selectionStyles.row}>
    <TouchableOpacity>
      <Image source={snackImages.eau_royale} resizeMode="contain" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={snackImages.espresso} resizeMode="contain" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={snackImages.fanta_orange} resizeMode="contain" />
    </TouchableOpacity>
  </View>
  <View style={selectionStyles.row}>
    <TouchableOpacity>
      <Image source={snackImages.fresh_juice} resizeMode="contain" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={snackImages.lays_bbq} resizeMode="contain" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={snackImages.lays_bolo} resizeMode="contain" />
    </TouchableOpacity>
  </View>
  <View style={selectionStyles.row}>
    <TouchableOpacity>
      <Image source={snackImages.milka_crispy} resizeMode="contain" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={snackImages.milka_oreo} resizeMode="contain" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={snackImages.kitkat} resizeMode="contain" />
    </TouchableOpacity>
  </View>
</View>
    
  );
};

export default SelectionScreen;


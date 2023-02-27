import { Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { homeStyles } from './home.style';

interface RegisterScreenProps{
  navigation: any;
}

const HomeScreen = (props: RegisterScreenProps) => {
  const selectProducts = () => props.navigation.navigate('Selection');

  const vendingMachine = {
    uri: require('../../../assets/img/distributeur_snacks.jpeg'),
  };

  return (
    <View style={homeStyles.container}>
      <TouchableOpacity onPress = {selectProducts}>
        <Image
          source={vendingMachine.uri}
          resizeMode="contain"
          style={homeStyles.bg_img}
          
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
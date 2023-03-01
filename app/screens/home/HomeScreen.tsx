import { Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { homeStyles } from './home.style';
import { TouchableHighlight } from 'react-native-gesture-handler';

interface RegisterScreenProps{
  navigation: any;
}

const HomeScreen = (props: RegisterScreenProps) => {
  const selectProducts = () => props.navigation.navigate('Selection');
  const chargeAccount = () => props.navigation.navigate('ChargeAccount');
  const adminPage = () => props.navigation.navigate('Admin');

  const vendingMachine = {
    uri: require('../../../assets/img/distributeur_snacks.jpeg'),
  };

  const engrenage = {
    url: require("../../../assets/utils/settings_3.png")
  };
  const profile = {
    url: require("../../../assets/utils/profile.png")
  };

  return (
    <View style={homeStyles.container}>

      <TouchableOpacity onPress = {selectProducts} style={homeStyles.area1}>
        <Image
          source={vendingMachine.uri}
          resizeMode="contain"
          style={homeStyles.bg_img}
        />
      </TouchableOpacity>
      
      <View>
        <TouchableOpacity onPress = {adminPage}>
          <Image
            source={engrenage.url}
            resizeMode="contain"
            style={homeStyles.utils}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress = {chargeAccount}>
          <Image
            source={profile.url}
            resizeMode="contain"
            style={homeStyles.utils}
          />
        </TouchableOpacity>
      </View>
    </View>
      
      
    
  );
};

export default HomeScreen;
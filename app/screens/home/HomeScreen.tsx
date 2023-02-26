import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const HomeScreen = () => {

  const vendingMachine = {
    uri : require("../../../assets/img/distributeur_snacks.jpeg"),
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={vendingMachine.uri} resizeMode='contain' style={styles.bg_img}   />
      </TouchableOpacity>
    </View>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:100,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: "wrap",
  },
  bg_img: {
    flex: 1,
  }
});
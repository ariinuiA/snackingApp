import React, { useState } from 'react';
import { Alert, View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './admin.style';

interface AdminScreenProps{
  navigation: any;
}

const AdminScreen = (props: AdminScreenProps) => {
  const images = [
    require('../../../assets/snacks/doritos_orange.png'),
    require('../../../assets/snacks/doritos_red.png'),
    require('../../../assets/snacks/eau_evian.png'),
    require('../../../assets/snacks/eau_royale.png'),
    require('../../../assets/snacks/espresso.png'),
    require('../../../assets/snacks/fanta_orange.png'),
    require('../../../assets/snacks/fresh_juice.png'),
    require('../../../assets/snacks/lays_bbq.png'),
    require('../../../assets/snacks/lays_bolo.png'),
    require('../../../assets/snacks/milka_crispy.png'),
    require('../../../assets/snacks/milka_oreo.png'),
    require('../../../assets/snacks/kitkat.png'),
  ];
  const [currentImage, setCurrentImage] = useState(0);
  
  const addRow = () => {
    // Code pour ajouter une nouvelle ligne dans le tableau
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => setCurrentImage(currentImage > 0 ? currentImage - 1 : images.length - 1)}>
          <Text style={styles.arrow}>{"<"}</Text>
        </TouchableOpacity>
        <Image style={styles.image} source={images[currentImage]} />
        <TouchableOpacity onPress={() => setCurrentImage(currentImage < images.length - 1 ? currentImage + 1 : 0)}>
          <Text style={styles.arrow}>{">"}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={addRow}>
        <Text style={styles.buttonText}>Ajouter</Text>
      </TouchableOpacity>
    
      <TextInput style={styles.input} placeholder="Modifier le prix" />
    
      <TouchableOpacity style={styles.button} onPress={() => console.log("Modifier le prix")}>
        <Text style={styles.buttonText}>Modifier le prix</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => console.log("Le distributeur est tout propre maintenant !")}>
        <Text style={styles.buttonText} onPress={() => Alert.alert("Le distributeur est tout propre maintenant !")}>Nettoyer !</Text>
      </TouchableOpacity>
    
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>ID produit</Text>
          <Text style={styles.tableCell}>Nb vendus</Text>
          <Text style={styles.tableCell}>$$$</Text>
         </View>
      </View>
    
    </View>
    );
  };
  
  export default AdminScreen;
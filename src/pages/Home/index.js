import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import Burguers from '../../components/Burguers';

export default function Home() {
 return (
   <View>

       <View style={StyleSheet.header}>
         <Image
         source={require('../../assets/logomb.png')}
         style={styles.image}/>
       </View>

       <View style={styles.textContainer}>
         <Text style={styles.textBrown}>Burgers</Text>
         <Text style={styles.textBlack}>•</Text>
         <Text style={styles.textBlack}>Hamburgueria Artesanal</Text>
         <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
           <MaterialIcons
              name={"filter-list"}
              size={24}
              color="#fff"
           />
         </TouchableOpacity>
       </View>
       <View style={styles.line}/>
       <ScrollView>
         <Text style={styles.textBrown}>Promoções</Text>

         <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
           <Burguers img={require('../../assets/hb1.jpg')} cost="R$27,99">
             Hamburger de Carne
           </Burguers>
           <Burguers img={require('../../assets/hb2.jpg')} cost="R$25,99">
             Hamburger de Frango
           </Burguers>
         </View>

         <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
           <Burguers img={require('../../assets/hb3.jpg')} cost="R$32,99">
             Hamburger de Peixe
           </Burguers>
           <Burguers img={require('../../assets/hb4.jpg')} cost="R$29,99">
             Hamburger de Queijo
           </Burguers>
         </View>

         <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
           <Burguers img={require('../../assets/hb3.jpg')} cost="R$32,99">
             Hamburger de Peixe
           </Burguers>
           <Burguers img={require('../../assets/hb4.jpg')} cost="R$29,99">
             Hamburger de Queijo
           </Burguers>
         </View>

       </ScrollView>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#000',
  },
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },
  header:{
    marginBottom: 8,
  },
  image:{
    width: '70%', 
    height: '30%',
    alignSelf: 'center',
    marginTop: 50,
    aspectRatio: 1.5, 
    resizeMode: 'contain',

  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  textBlack:{
    fontFamily: 'Anton_400Regular',
    fontSize: 20,
    marginHorizontal: '1%'
  },
  textBrown:{
    color: '#4d3119',
    fontFamily: 'Anton_400Regular',
    fontSize: 20,
    marginHorizontal: '2%'
  },
  line:{
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 2,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  imageForeground: {
    width: 250,
    height: 250
  },
});
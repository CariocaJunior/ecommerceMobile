import React from 'react';
import { StyleSheet, Image, View, Button, TouchableOpacity, TouchableHighlight, SafeAreaView, Text, Alert, StatusBar } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const Detail = () => (
  <View style={styles.container}>
    {/* Barra superior */}
    <StatusBar  backgroundColor={'#ffffff00'} /> 
     {/* Titúlo da imagem */}
    <View style={styles.containerImage}> 
      <Image source={require("../../assets/gatorburguer.jpg")}></Image>
    </View>
    {/* Favoritar */}
    <View style={styles.favorite}>
      <Image 
      source={require("../../assets/star.png")}
      style={styles.favoriteImage}></Image>
    </View>
    {/* Título da comida */}
    <View style={styles.title}>
      <Text style={styles.textTitle}>Gator burguer</Text>
    </View>
    {/* View central */}
    <View style={styles.containerRound}>
        {/* Descrição e Valor nutricional */}
        <View style={styles.describeAndValue}>
          <View style={{marginHorizontal: 20}}>
            <Text>Descrição</Text>
            <View style={{borderBottomColor: "#6F2F2A", borderBottomWidth: 3,}}></View>
            <Text>
              {`Pão astraliano\nHamburguer de jacaré\nalface, cheddar\npepino, bacon`}
            </Text>
          </View>
          <View>
          <Text>Valor nutricional</Text>
          <View style={{borderBottomColor: "#6F2F2A", borderBottomWidth: 3,}}></View>
          <Text>
              {`Sacarose: 1.8g\nLactose: 0.7g\nProteínas: 22g\nGorduras totais: 0.9g\nGorduraas saturadas: 0.4`}
            </Text>
          </View>
        </View>
        {/* Ingredientes / Serve / Adicionar */}
        {/* Ingredientes */}
        <View style={styles.ingredientesAl}>
          <Text style={styles.textIngreTitle}>Ingredientes</Text>
          <View style={styles.ingredients}>
            <Text style={styles.textIngre}>{`Pão australiano, cheddas, pepino,\nbacon`}</Text>
          </View>
        </View>
        {/* Serve */}
        <View style={styles.servesAl}>
          <View style={styles.serves}>
            <Text style={styles.textServ}>{`1 pessoa`}</Text>
          </View>
          <Text style={styles.textServTitle}>Serve</Text>
        </View>
        {/* Adicionar */}
        <View style={styles.addAl}>
          <Text style={styles.textAddTitle}>Adicionar</Text>
          <View style={styles.add}>
            <Text style={styles.texAdd}>{`Cheddar`}</Text>
        </View>
        </View>
      {/* View inferior central */}
      <View style={styles.containerBar}>
        {/* View de quantidade */}
        <View style={styles.containerQTD}></View>
        {/* Avançar */}
        <View>
        <TouchableHighlight
          style={styles.submit}
          onPress={() => alert('Alerta de clique!!!')}>
            <Text style={[styles.submitText]}>Avançar</Text>
        </TouchableHighlight>
        {/* Preço */}
        </View>
        <View style={styles.containerPrice}>
          <Text style={styles.submitText}>R$27.99</Text>
        </View>
      </View>
      {/* Menu inferior*/}
      <View>
        <TouchableOpacity style={styles.menuEnd}>
          <Image 
          source={require('../../assets/home.png')}
          style={styles.imageIcon}></Image>
           <Image 
          source={require('../../assets/star.png')}
          style={styles.imageIcon}></Image>
           <Image 
          source={require('../../assets/car.png')}
          style={styles.imageIcon}></Image>
           <Image 
          source={require('../../assets/account.png')}
          style={styles.imageIcon}></Image>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column', 
    flexGrow: 1,            
    justifyContent: 'space-between' ,
  },
  containerRound:{
    flex: 0.7,
    backgroundColor: "white",
    borderWidth: 0,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    marginTop: -70,

  },
  containerImage:{
    alignSelf: 'center',
    right: 30,
    width: 430,
    flex: 0.5,
    resizeMode: 'contain',
  },
  containerBar:{
    flex: 0,
    backgroundColor: "#6F2F2A",
    height: 70,
    width: 380,
    borderRadius: 50,
    marginTop: 15,
    alignSelf: 'center'
  },
  containerQTD:{
    flex: 0,
    borderWidth: 3,
    borderColor: "white",
    height: 50,
    width: 145,
    borderRadius: 50,
    marginTop: 10,
    alignSelf: 'center'
  },
  submit: {
    flex: 0,
    marginTop: -50,
    height: 50,
    width: 100,
    marginLeft: 270,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
  submitText: {
    flex: 0,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20
  },
  containerPrice:{
    marginTop: -50,
    marginRight: 260,
  },
  menuEnd:{
    marginHorizontal: 25,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageIcon:{
    width: 40,
    height: 40,
    flex: 0.1
  },
  describeAndValue:{
    marginTop: 55,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ingredients:{
    flex: 0,
    borderWidth: 3,
    borderColor: "#6F2F2A",
    height: 70,
    width: 250,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 15,
    alignSelf: 'center'
  },
  serves:{
    flex: 0,
    borderWidth: 3,
    borderColor: "#6F2F2A",
    height: 70,
    width: 100,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    marginTop: 15,
    alignSelf: 'center',
    marginRight: 15,
  },
  add:{
    flex: 0,
    borderWidth: 3,
    borderColor: "#6F2F2A",
    height: 70,
    width: 150,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 15,
    alignSelf: 'center'
  },
  textIngre:{
    textAlign: 'center',
    marginTop: 40,
    marginRight: 15,
    marginTop: 15,
  },
  textIngreTitle:{
    textAlign: 'center',
    marginTop: 40,
    marginRight: 15,
    marginTop: 34,
  },
  ingredientesAl:{
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textServ:{
    textAlign: 'center',
    marginTop: 20,
    marginRight: 15,
  },
  textServTitle:{
    textAlign: 'center',
    marginTop: 36,
    marginRight: 15,
  },
  servesAl:{
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 210,
  },
  texAdd:{
    textAlign: 'center',
    marginTop: 22,
    marginRight: 15,
  },
  textAddTitle:{
    textAlign: 'center',
    marginTop: 40,
    marginRight: 15,
  },
  addAl:{
    justifyContent: 'center',
    flexDirection: 'row',
    marginRight: 110,
  },
  title:{
    flex: 0,
    backgroundColor: "#fff",
    height: 50,
    width: 150,
    borderRadius: 50,
    marginTop: -80,
    alignSelf: 'center',
    zIndex: 1,
    right: 80,
    bottom: 45,
    shadowColor: "black",
    shadowOpacity: 100,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,

    elevation: 15,
  },
  textTitle:{
    fontSize: 20,
    color: "#6F2F2A",
    textAlign: 'center',
    top: 12,
  },
  favorite:{
    flex: 0,
    backgroundColor: "#fff",
    height: 50,
    width: 50,
    borderRadius: 50,
    marginTop: -80,
    alignSelf: 'center',
    zIndex: 1,
    left: 120,
    bottom: 75,
    shadowColor: "black",
    shadowOpacity: 100,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 15,
  },
  favoriteImage:{
    alignContent: 'center',
    width: 30,
    height: 30,
    flex: 0.6,
    top: 10,
    left: 10
  },
});

export default Detail;
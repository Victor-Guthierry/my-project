import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Image, TextInput, TouchableOpacity, Touchable } from 'react-native';
import { List, SearchIcon, Center, NativeBaseProvider } from "native-base"

export default class ListaContatos extends React.Component {

  render(){

    const onPress3 =  () => this.props.navigation.navigate('EditarContato')

  return (
    
    <NativeBaseProvider>

    <View style={{ 
      flex: 1,
      backgroundColor: '#f3e5f5',
      alignItems: 'center',
      justifyContent: 'center',
     }}>

      <StatusBar style="auto" />

    <List noBorder mt={1} my={1} style={{width: 300, height: 400, border: 0}}> 

    <TouchableOpacity onPress={onPress3}>
      <List.Item>
      <Image
        source={require('../assets/logo_usuario3.png')}
        style={{width: 50, height: 50, borderRadius: 100, marginRight: 5}}
      />
       <Text style={{fontWeight: 'bold', fontSize: 20}}>Marcos Andrade{"\n"}
       81 988553424
       </Text> 
      </List.Item>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPress3}>
      <List.Item>
      <Image
        source={require('../assets/logo_usuario3.png')}
        style={{width: 50, height: 50, borderRadius: 100, marginRight: 5}}
      />
       <Text style={{fontWeight: 'bold', fontSize: 20}}>Patrícia Tavares{"\n"}
       81 998765332
       </Text> 
      </List.Item>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPress3}>
      <List.Item>
      <Image
        source={require('../assets/logo_usuario3.png')}
        style={{width: 50, height: 50, borderRadius: 100, marginRight: 5}}
      />
       <Text style={{fontWeight: 'bold', fontSize: 20}}>Rodrigo Antunes{"\n"}
       81 987765525
       </Text> 
      </List.Item>
      </TouchableOpacity>
    </List>  

    </View>

  </NativeBaseProvider>
  );


  }
}
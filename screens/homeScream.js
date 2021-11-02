import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Image, TextInput, TouchableOpacity, Touchable } from 'react-native';

export default class Home extends React.Component {

  render(){

    const onPress =  () => this.props.navigation.navigate('Cadastro')
    const onPress2 =  () => this.props.navigation.navigate('ListaContatos')

    return (
      <View style={{
        flex: 1,
        backgroundColor: '#f3e5f5',
        alignItems: 'center',
        justifyContent: 'center'
      }}>

      <Image
        source={require('../assets/logo_usuario3.png')}
        style={{width: 150, height: 150, borderRadius: 100}}
      />
      <StatusBar style="auto" />

      <Text style={{marginRight: 240,fontWeight: 'bold',fontSize: 20}}>Login</Text>
      <TextInput
        style={{
          marginTop: 10,
          padding: 10,
          width: 300,
          backgroundColor: '#fff',
          fontSize: 16,
          fontWeight: 'bold',
          borderRadius: 3
        }} 
        placeholder="Digite seu email"
      />

      <Text style={{marginRight: 240,fontWeight: 'bold',fontSize: 20}}>Senha</Text>
      <TextInput
        style={{
          marginTop: 10,
          padding: 10,
          width: 300,
          backgroundColor: '#fff',
          fontSize: 16,
          fontWeight: 'bold',
          borderRadius: 3
        }}
        secureTextEntry={true} 
        placeholder="Digite sua senha"
      />

      <TouchableOpacity title='Login'  
        onPress={onPress2} 
        style={{
          width: 300,
          height: 42,
          backgroundColor: '#3498db',
          color: 'danger',
          marginTop: 10,
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Login</Text>
      </TouchableOpacity>
        <StatusBar style="auto" />
       
      <TouchableOpacity   
        onPress={onPress} 
        style={{
          width: 300,
          height: 42,
          backgroundColor: '#d50000',
          marginTop: 10,
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Cadastre-se</Text>
      </TouchableOpacity>

      </View>


      
    );


  }
}
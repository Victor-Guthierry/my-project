import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { CheckIcon, HStack, Center, NativeBaseProvider, AddIcon } from "native-base"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/homeScream';
import CadastroScreen from './screens/cadastroScreen';
import CadastroContatoScreen from './screens/cadastroContatoScreen';
import ListaContatosScreen from './screens/listaContatosScreen';
import EditarContato from './screens/editarContatoScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const onPress4 =  () => this.props.navigation.navigate('CadastroContato')

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tela Inicial'}}/>
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{title: 'Usuário'}}/>
        <Stack.Screen name="CadastroContato" component={CadastroContatoScreen} options={{title: 'Contato'}}/>
        <Stack.Screen name="ListaContatos" component={ListaContatosScreen} 
        options={({ navigation }) => {
          return {
            title: "Lista de Contatos",
            headerRight: () => (
              <NativeBaseProvider>
              <TouchableOpacity onPress={() => navigation.navigate('CadastroContato')}
               style={{marginRight: 15, marginTop: 25}}
              >
              <HStack space={2}>
                <AddIcon size="4"/>
              
              </HStack>
              </TouchableOpacity>
              </NativeBaseProvider>
            )
          }
        } }/>
        <Stack.Screen name="EditarContato" component={EditarContato} options={{ title: 'Contato'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



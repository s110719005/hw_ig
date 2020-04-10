import React from 'react';
import { Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button} from 'react-native-elements';

import AlbumScreen from './src/screens/AlbumScreen';
import DetailScreen from './src/screens/DetailScreen';
import MessageScreen from './src/screens/MessageScreen';
import albumData from "./src/json/albums.json";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={AlbumScreen} 
          options={{
            
            headerStyle: {
              height:0
            }, 
            
          }}
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen}
          options={({ route }) => ({ 
            title: route.params.title,
            headerStyle: {
              backgroundColor: '#4F9DEB',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },  
           })}
        />  
        <Stack.Screen 
          name="Message" 
          component={MessageScreen}
          options={({ route }) => ({ 
            headerStyle: {
              backgroundColor: '#4F9DEB',
              height:0
            },
            
            
           })}
        />     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
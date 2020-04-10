import React from 'react';
import { Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button} from 'react-native-elements';

import AlbumScreen from './src/screens/AlbumScreen';
import DetailScreen from './src/screens/DetailScreen';
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
            headerTitle: (
              <Image style={{ width: 110, height: 30,marginBottom:5 }}
                source={require('./assets/logo.png')}
              />
            ),
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            }, 
            headerRight: () => (
              <Image style={{ width: 24, height: 24,marginRight:16 }}
                source={require('./assets/send.png')}
              />
            ),
            headerLeft: () => (
              <Image style={{ width: 24, height: 24,marginRight:16 }}
                source={require('./assets/camera.png')}
              />
            ),
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
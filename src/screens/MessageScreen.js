import React from "react";
import { ScrollView, Linking,View,Image,TouchableOpacity,StyleSheet } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';


const MessageScreen = ({navigation}) => {
  

  return (
    <View>
      <View style={styles.headerStyle}>
      <TouchableOpacity onPress={() => navigation.goBack('Home')}>
              <Image style={{ width: 24, height: 24 }}
                source={require('../../assets/send.png')}
              />
        </TouchableOpacity>
      </View>
      
      <ScrollView>

        <Text>hi
        </Text>

      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2
  },
});

export default MessageScreen;

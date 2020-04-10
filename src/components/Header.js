import React from "react";
import { StyleSheet, Text, View,Image,TouchableOpacity } from "react-native";

const Header = ({navigation}) => {
  return (
      <View style={styles.headerStyle}>
        <Image style={{ width: 24, height: 24 },styles.camera}
                source={require('../../assets/camera.png')}
                
              />
        <Image style={{ width: 110, height: 30,marginBottom:5 }}
                source={require('../../assets/logo.png')}
              />
        <TouchableOpacity onPress={() => navigation.push('Message')}>
              <Image style={{ width: 24, height: 24,marginRight:16 }}
                source={require('../../assets/send.png')}
              />
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent:"flex-start",
    alignItems: "flex-start",
    height: 90,
    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2
  },
  textStyle: {
    fontSize: 20
  },
  camera: {
    marginRight: 50
  }
});

export default Header;

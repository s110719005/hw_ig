import React from "react";
import { View, FlatList,Image,TouchableOpacity,StyleSheet } from "react-native";
import Header from "../components/Header";
import AlbumDetail from "../components/AlbumDetail";
import albumData from "../json/albums.json";

const AlbumScreen = ({ navigation }) => {
  return (
    
    <View style={{flex: 1}}>
      <View style={styles.headerStyle}>
        <Image style={{ width: 24, height: 24,marginRight:110,marginLeft:16 }}
                  source={require('../../assets/camera.png')}
                  
                />
          <Image style={{ width: 110, height: 30,marginBottom:5,marginRight:110 }}
                  source={require('../../assets/logo.png')}
                />
          <TouchableOpacity onPress={() => navigation.push('Message')}>
                <Image style={{ width: 24, height: 24,marginRight:16 }}
                  source={require('../../assets/send.png')}
                />
          </TouchableOpacity>
      </View>
        
     
      <FlatList
      data={albumData.albumList}
      renderItem={({ item }) => 
      <AlbumDetail 
        album={item}       
        navigation={navigation}
      />}
      keyExtractor={item => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    display:"flex",
    flexDirection:"row",
    backgroundColor: "#F8F8F8",
    justifyContent: "flex-start",
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

export default AlbumScreen;

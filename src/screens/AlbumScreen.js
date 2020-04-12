import React from "react";
import { View, FlatList,Image,TouchableOpacity,StyleSheet } from "react-native";
import Header from "../components/Header";
import AlbumDetail from "../components/AlbumDetail";
import albumData from "../json/albums.json";

const AlbumScreen = ({ navigation }) => {
  return (
    
    <View style={{flex: 1}}>
      <View style={styles.headerStyle}>
        <Image style={{ width: 24, height: 24,marginTop:5,marginLeft:16 }}
                  source={require('../../assets/camera.png')}
                  
                />
          <Image style={{ width: 110, height: 35,marginBottom:0,marginRight:0 }}
                  source={require('../../assets/logo.png')}
                />
          <TouchableOpacity onPress={() => navigation.push('Message')}>
                <Image style={{ width: 24, height: 24,marginRight:16,marginTop:5 }}
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
    justifyContent: "space-between",
    height: 80,
    paddingTop: 40,
    borderBottomWidth:0.5,
    borderBottomColor:"#A3A399",
    //shadowColor: "#000",
    //shadowOffset: { width: 0, height: 2 },
    //shadowOpacity: 0.2,
    // Android Only
    elevation: 2
  },
  
});

export default AlbumScreen;

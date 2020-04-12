import React from "react";
import { ScrollView, Linking,View,Image,TouchableOpacity,StyleSheet,FlatList } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';


import MessageDetail from "../components/MessageDetail";
import albumData from "../json/albums.json";

const MessageScreen = ({navigation}) => {
  

  return (
    <View style={{flex: 1}}>
      <View style={styles.headerStyle}>
        <View style={styles.headerleftStyle}>
          <TouchableOpacity onPress={() => navigation.goBack('Home')}>
            <Image style={{ width: 20, height: 20 ,marginLeft:10}}
              source={require('../../assets/back.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.headermiddleStyle}>
          <Text style={{fontWeight:"600"}}>{albumData.accountname}</Text>
        </View>

        <View style={styles.headerrightStyle}>
          <Image style={{ width: 24, height: 24 ,marginLeft:0}}
              source={require('../../assets/film.png')}
          />
          <Image style={{ width: 24, height: 24 ,marginLeft:20}}
            source={require('../../assets/edit.png')}
          />
        </View>
      </View>
      
      <View style={styles.searchbarStyle}>
        <Image style={{ width: 20, height: 20, opacity:0.5,marginLeft:10}}
                  source={require('../../assets/search.png')}
        />
        <Text style={{opacity:0.5,marginLeft:10,fontSize:18}}>Search</Text>
      </View>
      
        <FlatList
          data={albumData.messageList}
          renderItem={({ item }) => <MessageDetail message={item} />}
        keyExtractor={item => item.title}
        />
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection:"row",
    height: 80,
    paddingTop: 30,
    borderBottomWidth:0.5,
    borderBottomColor:"#A3A399",
    // Android Only
    elevation: 2
  },
  headerleftStyle:{
    width:"30%",
    
  },
  headermiddleStyle:{
    width:"40%",
    alignItems: "center",
  },
  headerrightStyle:{
    width:"30%",
    flexDirection:"row",
    justifyContent: "flex-end",
    paddingRight:12,
  },
  searchbarStyle:{
    backgroundColor:"#DEDEDE",
    margin:10,
    marginLeft:16,
    marginRight:16,
    borderRadius:10,
    flexDirection:"row",
    height:40,
    alignItems:"center"
  }
});

export default MessageScreen;

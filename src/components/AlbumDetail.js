import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from "react-native";


const AlbumDetail = ({ album, navigation }) => {
   return (
      <View style={styles.cardContainerStyle}>
        <View style={styles.topcontainerStyle}>
          <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
            <Image
              style={styles.thumbnailStyle}
              source={{
                uri: album.thumbnail_image
              }}
            />
            <View style={styles.usernameStyle}>
              <Text style={styles.usernametextStyle}>{album.username}</Text>
            </View>
            
          </View>
          <View style={styles.toprightStyle}>
            <Image
              style={styles.iconmoreStyle}
              source={require('../../assets/more.png')}
            />
          </View>
        </View>
        
        <View style={styles.postpictureStyle}>
            <Image
              style={styles.imageStyle}
              source={{
                uri: album.image
              }}
            />
        </View>  

        <View style={styles.bottomStyle}>
            <View style={styles.iconbottomleftStyle}>
              <Image
                style={styles.iconbottomStyle}
                source={require('../../assets/heart.png')}
              />
              <Image
                style={styles.iconbottomStyle}
                source={require('../../assets/speech-bubble.png')}
              />
              <Image
                style={styles.iconbottomStyle}
                source={require('../../assets/send.png')}
              />
              
              
            </View>
            <View style={styles.iconbottomrightStyle}>
              <Image
                style={styles.iconbottomStyle}
                source={require('../../assets/bookmark.png')}
              />
            </View>
        </View> 
        <View style={styles.likeStyle}>
        <Text style={styles.usernametextStyle}>{album.likes} likes</Text>
        </View>
        <View style={styles.contentStyle}>
          <Text style={styles.usernametextStyle}>{album.username}<Text style={styles.contenttextStyle}>{album.description}</Text></Text>
          
        </View>
      </View>
  )};

const styles = StyleSheet.create({
  topcontainerStyle:{
    flexDirection: "row",
    height:55
  },
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "92%"
  },
  thumbnailStyle: {
    height: 35,
    width: 35,
    margin: 5,
    marginLeft:10,
    borderRadius:40/2,
    alignSelf:"center"
  },
  toprightStyle:{
    justifyContent:"center",
  },
  iconmoreStyle:{
    
    height: 14,
    width: 14,
    
  },
  usernameStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 5,
    
  },
  usernametextStyle:{
    fontWeight: "600"
  },
  cardContainerStyle: {
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: "#ddd",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 1,
    // marginLeft: 5,
    // marginRight: 5,
    // marginTop: 10
  },
  postpictureStyle: {
  },
  imageStyle: {
    height: 350,
    width: null
  },
  bottomStyle:{
    flexDirection:"row",
    height:55,
    alignItems:"center"
    
  },
  iconbottomleftStyle:{
    flexDirection:"row",
    width:"89%"

  },
  iconbottomStyle: {
    height:24,
    width:24,
    margin:10,
    marginLeft:12,
    marginRight:8,
    marginBottom:5,
  },
  likeStyle:{
    marginLeft:12
  },
  contentStyle:{
    margin:12,
    marginTop:5,
    flexDirection:"row"
  },
  contenttextStyle:{
    fontWeight:"normal",
  }
});

export default AlbumDetail;

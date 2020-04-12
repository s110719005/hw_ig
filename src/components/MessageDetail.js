import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from "react-native";


const MessageDetail = ({ message}) => {
    return(
        <View>
            <View style={styles.messageStyle}>
                <View style={styles.messageleftStyle}>
                    <Image
                    style={styles.imageStyle}
                    source={{
                        uri: message.thumbnail_image
                    }}
                    />
                </View>
                <View style={styles.messagemiddleStyle}>
                    <Text>{message.username}</Text>
                    <Text style={{opacity:0.5,paddingTop:5}}>{message.content}</Text>
                </View>
                <View style={styles.messagerightStyle}>
                    <Image style={{ width: 24, height: 24 ,marginLeft:20,opacity:0.5}}
                    source={require('../../assets/camera.png')}
                    />
                </View>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    messageStyle:{
        flexDirection:"row",
        
      },
    imageStyle:{
    height:70,
    width:70,
    borderRadius:70/2
    },
    messageleftStyle:{
        width:"25%",
        paddingLeft:20,
        paddingBottom:10,
        paddingTop:10,
    },
    messagemiddleStyle:{
        width:"55%",
        justifyContent:"center",
    },
    messagerightStyle:{
        width:"20%",
        justifyContent:"center",
        alignItems:"flex-end",
        paddingRight:12,
    },
    });

export default MessageDetail;
import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function ButtonAll({ children }) {
  return (
    <Pressable style={({pressed})=>[styles.button, pressed && styles.buttonPressed]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"yellow",
        padding:10,
        borderRadius:10,
        margin:10,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonPressed:{
        opacity: 0.5,
       

},
text:{
     color:"black",
        fontSize:20,
        fontWeight:"bold"
}


});

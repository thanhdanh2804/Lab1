import React, {useState} from "react";
import {Text, StyleSheet, View} from "react-native";

const Styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-around",
  },
  box:{
    width:100,
    height:100,
    justifyContent:"center",
    alignItems:"center",
  },
});

const Square = ({ text, bgColor = "#7ce0f9"}) =>(
  <View style={[Styles.box, {backgroundColor: bgColor}]}>
    <Text>{text}</Text>
  </View>
);
export default ()=> {
  return (
    <View style={Styles.container}>
      <Square text="Square 1" />
      <Square text="Square 2" bgColor="#4dc2c2" />
      <Square text="Square 3" bgColor="#ff637c"/>
    </View>
  );
};


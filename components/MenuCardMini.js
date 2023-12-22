import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function MenuCardMini({
  title,
  dish,
  timeText,
  fallbackText,
  image,
  themeColor,
  themeColorBackground,
  morninginfo,
}) {

  const toggleDetailVisibility = () => {
    setIsDetailVisible(!isDetailVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoArea}>
        <View style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
          <Text numberOfLines={1} style={styles.menuName}>{title}</Text>
          <Text style={styles.timestyle}>{timeText}</Text>
        </View>
        <Text style={styles.minfo}>{morninginfo}</Text> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // width: "100%",
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  infoArea: {
    flex: 1,
    flexDirection: "column", // Change to column for vertical arrangement
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  menuName: {
    fontSize: 24,
    flexGrow: 1,
    overflow: "hidden",
  },
  minfo:{
    fontSize:16,
    position:"absolute",
    bottom: 20,
    left: 15,
  },
  timestyle: {
    fontSize: 18,
  },
});

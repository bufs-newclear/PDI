import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Shadow } from "react-native-shadow-2";

export default function MenuCardMini({
  title,
  dish,
  timeText,
  morninginfo,
}) {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const toggleDetailVisibility = () => {
    setIsDetailVisible(!isDetailVisible);
  };
  const [sadActive, setSadActive] = useState(false); //슬픈표정 활성화 함수
  const toggleSad = () => {
    setSadActive(!sadActive); 
  };
  const [neutralActive, setNeutralActive] = useState(false); //무표정 활성화 함수
  const toggleNeutral = () => {
    setNeutralActive(!neutralActive);
  };

  title = title || dish['name'];

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
          <View style={styles.rowContainer}>
            <TouchableOpacity
              onPress={toggleLike}
              style={{
                borderColor: "red",
                width: 25,
                height: 25,
              }}
            >
              <Icon
                name={liked ? "heart" : "heart-o"}
                size={24}
                color="red"
                style={styles.likeIcon}
              />
            </TouchableOpacity>
            <Text>+120</Text>

            <TouchableOpacity onPress={toggleNeutral} style={[styles.reactButton,neutralActive ? styles.neutralActive : null]}>
              {/* TODO: 활성 여부에 따라 배경색 변경 */}
              <Text style={{ fontSize: 24 }}>😐</Text>
              <Text>+0</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleSad}  style={[styles.reactButton, sadActive ? styles.sadActive : null,] }>
              <Text style={{ fontSize: 24 }}>😢</Text>
              <Text>+0</Text>
            </TouchableOpacity>
          </View>
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
    padding: 5,
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

  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    bottom: 10,
  },
  reactButton: {
    minWidth: 63,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ddd",
    borderRadius: 4,
    padding: 4,
    paddingHorizontal: 7,
    marginLeft: 5,
    justifyContent: "space-between",
    
  },
  sadActive: {
    backgroundColor: 'brown', // 활성화됐을 때의 배경색
  },
  neutralActive: {
    backgroundColor: 'brown', // 활성화됐을 때의 배경색
  },
});

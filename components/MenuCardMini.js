import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Shadow } from "react-native-shadow-2";

export default function MenuCardMini({
  title,
  dish,
  timeText,
  description,
}) {
  /**
   * 식단을 이미지 없이 작은 카드 형태로 표시하는 컴포넌트
   * @param {string} title - 카드의 제목으로 표시할 텍스트. 값이 falsy한 경우, 식단의 이름으로 대체됩니다.
   * @param {Meal} dish - Meal 형의 식단 데이터. 이를 토대로 좋아요 등의 상호작용을 실시합니다.
   * @param {string} timeText - 운영 시각, 또는 카드 우측 상단에 표시할 텍스트.
   * @param {string} description - 카드 제목 아래에 표시할 텍스트
   */
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

  title = title || dish.name;

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
        <Text style={styles.minfo}>{description}</Text> 
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

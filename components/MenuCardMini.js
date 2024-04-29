import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function MenuCardMini({
  title,
  dish,
}) {
  /**
   * 식단을 이미지 없이 작은 카드 형태로 표시하는 컴포넌트
   * @param {string} title - 카드의 제목으로 표시할 텍스트. 값이 falsy한 경우, 식단의 이름으로 대체됩니다.
   * @param {Meal} dish - Meal 형의 식단 데이터. 이를 토대로 좋아요 등의 상호작용을 실시합니다.
   */
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };


  title = title || dish.name;

  return (
    <View style={styles.container}>
      <View style={styles.infoArea}>
      <View style={styles.headerRow}>
        <Text numberOfLines={1} style={styles.menuName}>{title}</Text>
        <TouchableOpacity onPress={toggleLike} style={styles.likeButton}>
          <Icon
            name={liked ? "heart" : "heart-o"}
            size={24}
            color="red"
          />
        </TouchableOpacity>
        <Text style={[styles.likesCount, liked && styles.likedText]}>+120</Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
    padding: 5,
  },
  infoArea: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuName: {
    fontSize: 24,
    flexGrow: 1,
  },
  likeButton: {
    padding: 8, // Add padding for larger touch area
  },
  likesCount: {
    fontSize: 18,
    color: 'black', // default color
  },
  likedText: {
    color: 'red', // color when liked
  },
  minfo: {
    fontSize: 16,
    position: "absolute",
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

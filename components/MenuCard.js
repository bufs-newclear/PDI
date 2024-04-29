// MenuCard.js
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";


import { Shadow } from "react-native-shadow-2";
import Icon from "react-native-vector-icons/FontAwesome";
import MenuTextcard from "./MenuTextcard";
import { Meal } from "../entity/Meal";

export default function MenuCard({
  title,
  dish,
  timeText,
  fallbackText,
  image,
  themeColor,
  themeColorBackground,
  description,
}) {
  /**
   * 식단을 카드 형태로 표시하는 컴포넌트
   * @param {string} title - 카드의 제목으로 표시할 텍스트. 값이 falsy한 경우, 식단의 이름으로 대체됩니다.
   * @param {Meal} dish - Meal 형의 식단 데이터. 이를 토대로 좋아요 등의 상호작용을 실시합니다.
   * @param {string} timeText - 운영 시각, 또는 카드 우측 상단에 표시할 텍스트.
   * @param {string} fallbackText - 사진이 주어지지 않았거나, 사진을 불러올 수 없을 때에 대신해서 표시할 텍스트
   * @param {string} image - 카드에 표시할 이미지
   * @param {string} themeColor - fallbackText를 표시할 때의 글자 색
   * @param {string} themeColorBackground - fallbackText를 표시할 때의 배경색
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


  title = title || dish.name;

  return (
    <Shadow
      radius={5}
      offset={[0, 5]}
      startColor="#ddd"
      containerStyle={{
        marginBottom: 25,
        marginHorizontal: 24,
      }}
      stretch={true}
    >
      <TouchableOpacity onPress={toggleDetailVisibility}>
        <View style={styles.container}>
          <View style={styles.imageArea}>
            {image ? (
              <Image source={image} style={styles.image} resizeMode="cover" />
            ) : (
              <View
                style={[
                  styles.image,
                  { backgroundColor: themeColorBackground || "#fbe5d7" },
                ]}
              >
                <Text style={{ color: themeColor, ...styles.fallbackText }}>
                  {fallbackText}
                </Text>
              </View>
            )}
          </View>
          <View style={styles.infoArea}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text numberOfLines={1} style={styles.menuName}>
                {title}
              </Text>
              <Text style={styles.timestyle}>{timeText}</Text>
            </View>
            <Text style={styles.minfo}>{description}</Text>
            <View style={styles.rowContainer}>
              <TouchableOpacity onPress={toggleLike} style={styles.likeButton}>
                <Icon
                  name={liked ? "heart" : "heart-o"} // "heart" is filled and "heart-o" is outlined
                  size={24}
                  color="red" // This sets the default color to red
                />
              </TouchableOpacity>
              <Text style={[styles.likesCount, liked && styles.likedText]}>
                +120
              </Text>
            </View>
            <Text style={styles.toggledetailText}>상세정보</Text>
          </View>
        </View>
      </TouchableOpacity>
      {isDetailVisible && (
        <View style={styles.detailContainer}>
          <MenuTextcard text={dish.name.split(",").join("\n")} />
        </View>
      )}
    </Shadow>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
  },
  imageArea: {
    flex: 1,
    backgroundColor: "grey",
  },
  fallbackText: {
    fontSize: 25,
    fontWeight: "900",
    marginTop: 30,
    padding: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  infoArea: {
    flex: 1,
    flexDirection: "column", // Change to column for vertical arrangement
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10, // Add padding vertically if needed
  },
  likeIcon: {
    position: "absolute",
  },
  likeButton: {
    marginRight: 8, // Adds space after the heart icon
  },
  likesCount: {
    fontSize: 18,
    color: "black", // Default color is black
  },
  likedText: {
    color: "red", // When liked, the color will be red
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
    backgroundColor: "brown", // 활성화됐을 때의 배경색
  },
  neutralActive: {
    backgroundColor: "brown", // 활성화됐을 때의 배경색
  },
  menuName: {
    fontSize: 28,
    flexGrow: 1,
    overflow: "hidden",
  },
  minfo: {
    fontSize: 20,
    position: "absolute",
    bottom: 60,
    left: 20,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    bottom: 10,
  },
  toggledetailText: {
    color: "blue",
    marginTop: "auto",

    // 이 아래는 시행착오
    position: "absolute",
    bottom: 10,
    right: 25,
  },
  timestyle: {
    fontSize: 18,
  },

  // debug
  debugBorder: {
    borderColor: "red",
    borderWidth: 2,
  },
  detailContainer: {
    padding: 5,
  },
});

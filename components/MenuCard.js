// MenuCard.js
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Shadow } from "react-native-shadow-2";
import Icon from "react-native-vector-icons/FontAwesome";
import MenuTextcard from "./MenuTextcard";

export default function MenuCard({
  title,
  dish,
  timeText,
  fallbackText,
  image,
  themeColor,
  themeColorBackground,
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
            </View>
            <Text style={styles.toggledetailText}>상세정보</Text>
          </View>
        </View>
      </TouchableOpacity>
      {isDetailVisible && (
        <View style={styles.detailContainer}>
          <MenuTextcard
            text={"숯불제육불고기\n아욱국\n쌈다시마\n쑥갓\n밥\n배추김치"}
          />
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
  likeIcon: {
    position: "absolute",
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
});

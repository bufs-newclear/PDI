import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function MenuCardFolder({
  title,
  description,
  image,
  themeColor,
  themeColorBackground,
  fallbackText,
  children,
}) {
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const toggleDetailVisibility = () => {
    setIsDetailVisible(!isDetailVisible);
  };
  return (
    <Shadow
      radius={5}
      offset={[0, 5]}
      style={
        {
          // paddingHorizontal: 15,
        }
      }
      containerStyle={{
        marginBottom: 25,
        marginHorizontal: 24,
      }}
      stretch={true}
    >
      <TouchableOpacity onPress={toggleDetailVisibility}>
        <View style={styles.container}>
          <View style={styles.imageArea}>
            {/* TODO: Image가 들어올 경우 이미지를 표시, 그렇지 않을 경우 themeColor에 따라 fallbackText를 표시 a*/}
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
            {/* <Image
              source={dish.image}
              style={styles.image}
              resizeMode="cover"
            /> */}
          </View>
          <View style={styles.infoArea}>
            <View style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
              <Text numberOfLines={1} style={styles.menuName}>{title}</Text>
              <Text style={styles.timestyle}>08:00~09:00</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.toggledetailText}>상세정보</Text>
            </View>
        </View>
      </TouchableOpacity>
      {isDetailVisible && (
        <View style={styles.detailContainer}>
          {/* <Text>상세정보 내용</Text> */}
          {children}
        </View>
      )}
    </Shadow>
  );
}

const styles = StyleSheet.create({
  container: {
    // MeunCardFolder의 최상위 컨테이너
    // flexDirection: 'column',
    backgroundColor: "white",
    width: "100%",
    height: 300,
    borderRadius: 10,
    overflow: "hidden", //이미지 깨지는거 방지
  },
  imageArea: {
    flex: 1,
    backgroundColor: "grey",

    // borderColor: 'red',
    // borderWidth: 5,
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
    // overflow: 'hidden',
  },
  infoArea: {
    flex: 1,
    flexDirection: "column", // Change to column for vertical arrangement
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 10,
    
  },
  menuName: {
    fontSize: 28,
    flexGrow: 1,
    overflow: "hidden",
  },
  price: {
    fontSize: 24,
  },
  timestyle: {
    fontSize: 18,
  },
  description:{
    fontSize:20,
    position:"absolute",
    bottom: 60,
    left: 20,
  },
  toggledetailText: {
    color: "blue",
    marginTop: "auto",
    padding: 10,
    position:"absolute",
    bottom: 5,
    right: 10,
   
  },
  detailContainer: {
    // marginTop: 10,
    // marginHorizontal: 10,
    padding: 10,
    backgroundColor: "#eee",
    // borderRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});

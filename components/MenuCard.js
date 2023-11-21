import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function MenuCard({ dish }) {
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
            <Image
              source={dish.image}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.infoArea}>
            <Text style={styles.menuName}>{dish.name}</Text>
            <Text style={styles.price}>{dish.price}</Text>
            <View>
              <Text style={styles.toggledetailText}>상세정보</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {isDetailVisible && (
        <View style={styles.detailContainer}>
          <Text>상세정보 내용</Text>
          {/* 여기에 자세한내용추가 */}
        </View>
      )}
    </Shadow>
  );
}

const styles = StyleSheet.create({
  container: {
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
  image: {
    width: "100%",
    height: "100%",
    // overflow: 'hidden',
  },
  infoArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  menuName: {
    fontSize: 28,
  },
  price: {
    fontSize: 24,
  },
  toggledetailText: {
    color: "blue",
    marginTop: "auto",
  },
  detailContainer: {
    // marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: "#eee",
    // borderRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});

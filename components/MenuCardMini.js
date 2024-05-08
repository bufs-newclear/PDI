import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function MenuCardMini({ title, dish }) {
  const [liked, setLiked] = useState(dish.myLike);
  const [likes, setLikes] = useState(dish.likeCount);
  const [isUpdating, setIsUpdating] = useState(false);

  const toggleLike = async () => {
    if (isUpdating) return;
    setIsUpdating(true);
    const currentlyLiked = liked;

    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);

    try {
      if (currentlyLiked) {
        await dish.dislike();
      } else {
        await dish.like();
      }
      setLiked(dish.myLike);
      setLikes(dish.likeCount);
    } catch (error) {
      setLiked(currentlyLiked);
      setLikes(currentlyLiked ? likes - 1 : likes + 1);
      console.error('Error toggling like:', error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  // `*` 기준으로 이름을 분리하여 줄바꿈 처리
  const renderTitle = (title) => {
    const titleParts = title.split('*').map((part, index) => (
      <Text key={index} style={styles.menuNamePart}>
        {part.trim() + (index !== title.split('*').length - 1 ? '\n' : '')}
      </Text>
    ));

    return <Text style={styles.menuName}>{titleParts}</Text>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoArea}>
        <View style={styles.headerRow}>
          {/* 메뉴 이름을 renderTitle 함수를 통해 렌더링 */}
          {renderTitle(title || dish.name)}
          <TouchableOpacity onPress={toggleLike} style={styles.likeButton}>
            <Icon
              name={liked ? "heart" : "heart-o"}
              size={24}
              color="red"
            />
          </TouchableOpacity>
          <Text style={[styles.likesCount, liked && styles.likedText]}>{likes}</Text>
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
  menuNamePart: {
    // 메뉴 이름 각 부분에 적용할 스타일
    fontSize: 24, // 메뉴 이름의 기본 글꼴 크기와 동일하게 설정
  },
  likeButton: {
    padding: 8,
  },
  likesCount: {
    fontSize: 18,
    color: 'black',
  },
  likedText: {
    color: 'red',
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
import React, { useState } from "react";
import { Text, View } from "react-native";

  /**
   * 둥근 모서리의 회색 바탕에 텍스트를 표시하는 컴포넌트.
   * MenuCardFolder와 같이 사용하는 것을 의도함.
   * @param {string} title - 카드 내부에 표시할 텍스트
   */
export default function MenuTextcard({text}) {
    text = text.replaceAll(',', '\n');

    return (
          <View style={{
            backgroundColor: 'white',
            borderRadius: 10,
            marginTop: 5,
            marginHorizontal: '2%',
            paddingHorizontal: 15,
            paddingVertical: 10,
        }}>
            <Text style= {{
                fontSize: 20,
                lineHeight: 24
            }}>{text}</Text>
        </View>
    );
}
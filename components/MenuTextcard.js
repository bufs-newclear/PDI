import React, { useState } from "react";
import { Text, View } from "react-native";


export default function MenuTextcard({text}) {
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
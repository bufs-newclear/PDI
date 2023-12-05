import React, { useState } from "react";
import { Text, View } from "react-native";


export default function MenuTextcard({text}) {
    return (
          <View style={{
            backgroundColor: 'white',
            width: '100%',
            borderRadius: 10,
        }}>
            <Text>{text}</Text>
        </View>
    );
}
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";

export default function Cell() {
  const [isDisabled, setIsDisabled] = useState(false);
  let handleClick = () => {
    setIsDisabled(true);
  };
  return (
    <TouchableOpacity
      className="border  p-10"
      onPress={handleClick}
      disabled={isDisabled}
    >
      <View>
        <Text>X</Text>
      </View>
    </TouchableOpacity>
  );
}

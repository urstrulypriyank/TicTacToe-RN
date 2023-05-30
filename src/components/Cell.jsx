import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";

export default function Cell({ cell, turn, setTurn }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [cellValue, setcellValue] = useState("#");
  let handleClick = () => {
      cell.value = turn;
    
    setIsDisabled(true);

    if (turn == "X") {
      setcellValue("X");
      setTurn("O");
    } else {
      setcellValue("O");
      setTurn("X");
    }
  };
  return (
    <TouchableOpacity
      className="border  p-10"
      onPress={handleClick}
      disabled={isDisabled}
    >
      <View>
        <Text>{cellValue}</Text>
      </View>
    </TouchableOpacity>
  );
}

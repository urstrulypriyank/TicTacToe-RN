import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";

export default function Cell({
  cell,
  turn,
  setTurn,
  boardState,
  row,
  col,
  setBoardState,
}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [cellValue, setcellValue] = useState("#");

  let checkWin = () => {
    let i = (j = 0);
    for (i = 0; i < 2; i++) {
      for (j = 0; j < 2; j++) {
        if (boardState[i][j] == undefined && (i != 0 || j != 0)) continue;

        // check for diagonals
        if (
          i == 0 &&
          j == 0 &&
          (boardState[i][j] == boardState[i + 1][j + 1]) ==
            boardState[i + 2][j + 2]
        ) {
          console.log("You Won ", turn);
        }
        if (
          i == 0 &&
          j == 2 &&
          (boardState[i][j] == boardState[i + 1][j - 1]) ==
            boardState[i + 2][j - 2]
        ) {
          console.log("You Won ", turn);
        }
      }
    }
  };

  let handleClick = () => {
    const updatedBoardState = [...boardState];
    updatedBoardState[row][col] = turn;

    setIsDisabled(true);

    if (turn == "X") {
      setcellValue("X");
      setTurn("O");
    } else {
      setcellValue("O");
      setTurn("X");
    }
    setBoardState(updatedBoardState);
    checkWin();
    console.log(row, col);

    console.log(boardState);
  };
  return (
    <TouchableOpacity
      className="border p-8 "
      onPress={handleClick}
      disabled={isDisabled}
    >
      <View>
        <Text>{cellValue}</Text>
      </View>
    </TouchableOpacity>
  );
}

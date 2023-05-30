import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Cell from "./components/Cell";

// Making Board

const createEmptyRow = () => {
  const row = [];
  for (let j = 0; j <= 2; j++) {
    row.push(undefined);
  }
  return row;
};

let _boardState = [];
for (let i = 0; i <= 2; i++) {
  _boardState.push(createEmptyRow());
}

const Index = () => {
  const [boardState, setBoardState] = useState(_boardState);
  const [turn, setTurn] = useState("X");

  return (
    <View className="flex flex-1 justify-center items-center m-5">
      <Text>current turn: {turn}</Text>

      <View style={styles.container}>
        {boardState.map((item, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {item.map((cell, columnIndex) => (
              <Cell
                key={columnIndex}
                cell={cell}
                turn={turn}
                setTurn={setTurn}
                boardState={boardState}
                row={rowIndex}
                col={columnIndex}
                setBoardState={setBoardState}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  row: {
    flexDirection: "row",
  },
});

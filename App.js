import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Index from "./src";

const App = () => {
  return (
    <SafeAreaView className="flex flex-1">
      <StatusBar hidden />
      <View className="flex flex-1  items-center  ">
        <Text className="w-screen  text-center text-3xl font-bold py-3 bg-yellow-500">
          Tic Tac Toe
        </Text>

        <Index />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});

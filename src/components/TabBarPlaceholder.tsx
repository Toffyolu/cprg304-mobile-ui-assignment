import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export function TabBarPlaceholder() {
  const [activeTab, setActiveTab] = useState("grid");

  return (
    <View style={styles.container}>
      {/* POSTS GRID */}
      <Pressable
        style={styles.tab}
        onPress={() => setActiveTab("grid")}
      >
        <Ionicons
          name="grid-outline"
          size={25}
          color={activeTab === "grid" ? "black" : "#777"}
        />

        {activeTab === "grid" && <View style={styles.activeLine} />}
      </Pressable>

      {/* REELS */}
      <Pressable
        style={styles.tab}
        onPress={() => setActiveTab("reels")}
      >
        <MaterialCommunityIcons
          name="movie-open-play-outline"
          size={27}
          color={activeTab === "reels" ? "black" : "#777"}
        />

        {activeTab === "reels" && <View style={styles.activeLine} />}
      </Pressable>

      {/* REPOST */}
      <Pressable
        style={styles.tab}
        onPress={() => setActiveTab("repost")}
      >
        <MaterialCommunityIcons
          name="repeat"
          size={27}
          color={activeTab === "repost" ? "black" : "#777"}
        />

        {activeTab === "repost" && <View style={styles.activeLine} />}
      </Pressable>

      {/* TAGGED */}
      <Pressable
        style={styles.tab}
        onPress={() => setActiveTab("tagged")}
      >
        <MaterialCommunityIcons
          name="account-box-outline"
          size={27}
          color={activeTab === "tagged" ? "black" : "#777"}
        />

        {activeTab === "tagged" && <View style={styles.activeLine} />}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopWidth: 0.5,
    borderTopColor: "#ddd",
  },

  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  activeLine: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 1.5,
    backgroundColor: "black",
  },
});
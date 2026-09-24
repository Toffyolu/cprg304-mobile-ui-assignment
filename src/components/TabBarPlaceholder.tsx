import { StyleSheet, Text, View } from "react-native";

export function TabBarPlaceholder() {
  return (
    <View style={styles.tabBar}>
      <View style={styles.tab}>
        <Text style={styles.icon}>▦</Text>
        <View style={styles.activeLine} />
      </View>

      <View style={styles.tab}>
        <Text style={styles.icon}>▶</Text>
      </View>

      <View style={styles.tab}>
        <Text style={styles.icon}>♙</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    marginTop: 20,
  },

  tab: {
    flex: 1,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  icon: {
    fontSize: 24,
    color: "#333",
  },

  activeLine: {
    position: "absolute",
    bottom: 0,
    height: 2,
    width: "100%",
    backgroundColor: "#111",
  },
});

import {
  Alert,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export function ProfileHeader() {
  const showAlert = () => {
    if (Platform.OS === "web") {
      window.alert("Alert Button pressed");
    } else {
      Alert.alert("Alert Button pressed");
    }
  };

  return (
    <View style={styles.container}>
      {/* TOP BAR */}
      <View style={styles.topRow}>
        <Ionicons name="chevron-back" size={24} color="black" />

        <Text style={styles.username}>kimkardashian ✓</Text>

        <View style={styles.topIcons}>
          <Pressable onPress={showAlert}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color="black"
            />
          </Pressable>

          <Ionicons
            name="ellipsis-horizontal"
            size={24}
            color="black"
          />
        </View>
      </View>

      {/* PROFILE INFO */}
      <View style={styles.profileInfo}>
        <Image
          source={require("../../assets/expo.icon/kim.jpg")}
          style={styles.avatarImage}
          resizeMode="cover"
        />

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>6,684</Text>
            <Text style={styles.statLabel}>posts</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statNumber}>343M</Text>
            <Text style={styles.statLabel}>followers</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statNumber}>230</Text>
            <Text style={styles.statLabel}>following</Text>
          </View>
        </View>
      </View>

      {/* BIO */}
      <View style={styles.bio}>
        <Text style={styles.name}>Kim Kardashian</Text>
        <Text>Founder of SKIMS</Text>
        <Text>Mother, entrepreneur, and fashion icon</Text>
        <Text style={styles.link}>kimkardashian.com</Text>
      </View>

      {/* BUTTONS */}
      <View style={styles.actions}>
        <View style={styles.actionButton}>
          <Text style={styles.actionText}>Following</Text>
        </View>

        <View style={styles.actionButton}>
          <Text style={styles.actionText}>Message</Text>
        </View>

        <View style={styles.actionButton}>
          <Text style={styles.actionText}>Shop</Text>
        </View>
      </View>

      {/* HIGHLIGHTS */}
      <View style={styles.highlights}>
        <View style={styles.highlight}>
          <View style={styles.highlightRing}>
            <Image
              source={require("../../assets/expo.icon/skim.jpg")}
              style={styles.highlightImage}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.highlightLabel}>SKIMS</Text>
        </View>

        <View style={styles.highlight}>
          <View style={styles.highlightRing}>
            <Image
              source={require("../../assets/expo.icon/update.jpg")}
              style={styles.highlightImage}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.highlightLabel}>UPDATE</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },

  username: {
    fontSize: 17,
    fontWeight: "600",
  },

  topIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  avatarImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#ddd",
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
    marginLeft: 10,
  },

  stat: {
    alignItems: "center",
  },

  statNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },

  statLabel: {
    color: "#888",
    marginTop: 2,
  },

  bio: {
    marginTop: 12,
  },

  name: {
    fontSize: 15,
    fontWeight: "bold",
  },

  link: {
    color: "#3498db",
    marginTop: 2,
  },

  actions: {
    flexDirection: "row",
    gap: 8,
    marginTop: 14,
  },

  actionButton: {
    flex: 1,
    backgroundColor: "#33363B",
    borderRadius: 8,
    paddingVertical: 9,
    alignItems: "center",
  },

  actionText: {
    color: "white",
    fontWeight: "600",
  },

  highlights: {
    flexDirection: "row",
    marginTop: 18,
    gap: 20,
  },

  highlight: {
    alignItems: "center",
  },

  highlightRing: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#999",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  highlightImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
  },

  highlightLabel: {
    color: "#444",
    fontSize: 12,
    marginTop: 6,
  },
});
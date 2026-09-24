import { StyleSheet, Text, View } from "react-native";

export function ProfileHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text>‹</Text>
        <Text>kimkardashian ✓</Text>
        <Text>•••</Text>
      </View>

      <View style={styles.profileInfo}>
        <View style={styles.avatar}>
          <Text>KM</Text>
        </View>

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

      <View style={styles.bio}>
        <Text style={styles.name}>Kim Kardashian</Text>
        <Text>Founder of SKIMS</Text>
        <Text>Mother, entrepreneur, and fashion icon</Text>
        <Text style={styles.link}>kimkardashian.com</Text>
      </View>

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

      <View style={styles.highlights}>
        <View style={styles.highlight}>
          <View style={styles.highlightCircle}>
            <Text>SK</Text>
          </View>
          <Text style={styles.highlightLabel}>SKIMS</Text>
        </View>

        <View style={styles.highlight}>
          <View style={styles.highlightCircle}>
            <Text>UP</Text>
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
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
  },
  stat: {
    alignItems: "center",
  },
  statNumber: {
    fontWeight: "bold",
  },
  statLabel: {
    color: "#888",
  },
  bio: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: "bold",
  },
  link: {
    color: "#3498db",
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

  highlightCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#555",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#777",
  },

  highlightLabel: {
    color: "#444",
    fontSize: 12,
    marginTop: 6,
  },
});

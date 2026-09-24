import { Image, StyleSheet, View } from "react-native";

const posts = [
  require("../../assets/images/posts/post1.jpg"),
  require("../../assets/images/posts/post2.jpg"),
  require("../../assets/images/posts/post3.jpg"),
  require("../../assets/images/posts/post4.jpg"),
  require("../../assets/images/posts/post5.jpg"),
  require("../../assets/images/posts/post6.jpg"),
  require("../../assets/images/posts/post7.jpg"),
  require("../../assets/images/posts/post8.jpg"),
  require("../../assets/images/posts/post9.jpg"),
];

export function ContentPlaceholder() {
  return (
    <View style={styles.grid}>
      {posts.map((post, index) => (
        <View key={index} style={styles.post}>
          <Image source={post} style={styles.postImage} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  post: {
    width: "33.333%",
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#111",
    overflow: "hidden",
  },

  postImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

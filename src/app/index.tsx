import { Alert, Platform, Pressable, ScrollView, Text, View } from "react-native";
import { BottomNavigation } from "../components/BottomNavigation";
import { ContentPlaceholder } from "../components/ContentPlaceholder";
import { ProfileHeader } from "../components/ProfileHeader";
import { TabBarPlaceholder } from "../components/TabBarPlaceholder";

export default function IndexScreen() {

  const showAlert = () =>
    Platform.OS === "web"
      ? window.alert("Alert Button pressed")
      : Alert.alert("Alert Button pressed");

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
        <ProfileHeader />
        <TabBarPlaceholder />
        <ContentPlaceholder />

        <Pressable
          onPress={showAlert}
          style={{
            backgroundColor: "#EFEFEF",
            padding: 10,
            margin: 15,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "600" }}>Alert</Text>
        </Pressable>
      </ScrollView>

      <BottomNavigation />
    </View>
  );
}
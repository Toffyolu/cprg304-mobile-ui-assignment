import { ScrollView, View } from "react-native";
import { BottomNavigation } from "../components/BottomNavigation";
import { ContentPlaceholder } from "../components/ContentPlaceholder";
import { ProfileHeader } from "../components/ProfileHeader";
import { TabBarPlaceholder } from "../components/TabBarPlaceholder";

export default function IndexScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <ProfileHeader />
        <TabBarPlaceholder />
        <ContentPlaceholder />
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <BottomNavigation />
      </View>
    </View>
  );
}

import { ScrollView, View } from "react-native";

import { BottomNavigation } from "../components/BottomNavigation";
import { ContentPlaceholder } from "../components/ContentPlaceholder";
import { ProfileHeader } from "../components/ProfileHeader";
import { TabBarPlaceholder } from "../components/TabBarPlaceholder";

export default function IndexScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
        <ProfileHeader />
        <TabBarPlaceholder />
        <ContentPlaceholder />
      </ScrollView>

      <BottomNavigation />
    </View>
  );
}
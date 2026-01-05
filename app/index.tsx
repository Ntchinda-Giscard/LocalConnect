import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  
  return (
    <SafeAreaView className="flex-1 items-center justify-between bg-white">
      <Text className="text-xl font-bold text-primary mt-10">
        Top Safe Area
      </Text>
      <Text className="text-xl font-bold text-primary">
        Welcome to Nativewind!
      </Text>
       <Text className="text-xl font-bold text-primary mb-10">
        Bottom Safe Area
      </Text>
    </SafeAreaView>
  );
}

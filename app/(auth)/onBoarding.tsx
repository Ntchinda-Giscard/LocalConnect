import { StatusBar, Text, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function OnBoarding() {
        const colorScheme = useColorScheme();

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "white"
        }}>
            <StatusBar barStyle="default" /> 

            <Text>OnBoarding</Text>
        </SafeAreaView>
    )
}
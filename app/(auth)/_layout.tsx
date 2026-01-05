import { Stack } from "expo-router";


export default function ProLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }} >
            <Stack.Screen name="onBoarding" />
            <Stack.Screen name="login" />
            <Stack.Screen name="register" />
        </Stack>
    );
}
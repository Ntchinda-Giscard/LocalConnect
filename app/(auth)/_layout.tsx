import { Stack } from "expo-router";


export default function ProLayout() {
    return (
        <Stack>
            <Stack.Screen name="onboarding" />
            <Stack.Screen name="login" />
            <Stack.Screen name="register" />
        </Stack>
    );
}
import { Stack } from "expo-router";


export default function ProLayout() {
    return (
        <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="pro" />
        </Stack>
    );
}
import SignOutButton from "@/components/SignOutButton";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
        <SafeAreaView className="flex-1 p-4">
            <Text>HomeScreen</Text>
            <SignOutButton />
        </SafeAreaView>
    );
}

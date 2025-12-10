import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const TRENDING_TOPICS = [
    {
        topic: "#ReactNative",
        tweets: "120K",
    },
    {
        topic: "#JavaScript",
        tweets: "95K",
    },
    {
        topic: "#MobileDevelopment",
        tweets: "80K",
    },
    {
        topic: "#TypeScript",
        tweets: "70K",
    },
    {
        topic: "#OpenSource",
        tweets: "60K",
    },
];

export default function SearchScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="px-4 py-3 border-b border-gray-100">
                <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-3">
                    <Feather name="search" size={20} color="#657786" />
                    <TextInput
                        placeholder="Search Twitter"
                        className="ml-3 flex-1 text-base text-gray-900"
                        placeholderTextColor="#657786"
                    />
                </View>
            </View>
            <ScrollView className="flex-1">
                <View className="p-4">
                    <Text className="text-xl font-bold text-gray-900 mb-4">
                        Trending Topics
                    </Text>
                    {TRENDING_TOPICS.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            className="py-4 border-b border-gray-100"
                        >
                            <Text className="text-gray-500 text-sm">
                                Trending in technology
                            </Text>
                            <Text className="text-gray-900 font-bold text-lg">
                                {item.topic}
                            </Text>
                            <Text className="text-gray-500 text-sm">
                                {item.tweets} Tweets
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

import { View, Text } from "react-native";
import AppGradient from "@/components/AppGradient";

const NatureMeditate = () => {
    const name = "Gabriel";
    return (
        <View className="flex-1">
            <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
                <View className="my-4">
                    <Text className="text-gray-200 font-bold text-4xl text-left">
                        Welcome <Text className="text-blue-500">{name}</Text>
                    </Text>
                </View>
            </AppGradient>
        </View>
    );
};

export default NatureMeditate;

import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.primary,
                tabBarLabelStyle: {
                    fontFamily: "Roboto-Mono",
                },
            }}
        >
            <Tabs.Screen
                name="nature-meditate"
                options={{
                    title: "Meditate",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="flower-tulip"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="affirmations"
                options={{
                    title: "Affirmations",
                    tabBarIcon: ({ color }) => (
                        <Entypo name="open-book" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabLayout;

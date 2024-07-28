import { View, Text, ImageBackground } from "react-native";
import backgroundImage from "@/assets/meditation-images/beach.webp";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

const App = () => {
    const router = useRouter();

    return (
        <View className="flex-1">
            <StatusBar style="auto" />
            <ImageBackground
                source={backgroundImage}
                resizeMode="cover"
                className="flex-1"
            >
                <AppGradient
                    colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
                    containerStyles="justify-between py-4"
                >
                    <View>
                        <Text className="text-white text-4xl text-center font-bold">
                            Meditation
                        </Text>
                        <Text className="text-white text-2xl text-center mt-2">
                            Simplifying meditation for everyone
                        </Text>
                    </View>
                    <View className="tems-center">
                        <CustomButton
                            onPress={() => {
                                router.push("/nature-meditate");
                            }}
                            title="Get Started"
                            containerStyles=""
                        />
                    </View>
                </AppGradient>
            </ImageBackground>
        </View>
    );
};

export default App;

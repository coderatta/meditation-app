import { View, Text, ImageBackground, Pressable } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import { useEffect, useState } from "react";
import { affirmationGalleryData } from "@/constants/models/AffirmationsCategory";
import AppGradient from "@/components/AppGradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const AffirmationPractice = () => {
    const { id } = useLocalSearchParams();

    const [affirmation, setAffirmation] = useState<affirmationGalleryData>();

    useEffect(() => {
        AFFIRMATION_GALLERY.forEach((affirmationCategory) => {
            const affirmationData = affirmationCategory.data;

            const currentAffirmation = affirmationData.find(
                (affirmation) => affirmation.id === Number(id)
            );

            if (currentAffirmation) {
                setAffirmation(currentAffirmation);
                return;
            }
        });
    }, [id]);

    const sentences = affirmation?.text.split(".").filter(Boolean) || [];

    return (
        <View className="flex-1">
            <ImageBackground
                source={affirmation?.image}
                resizeMode="cover"
                className="flex-1"
            >
                <AppGradient
                    colors={["rgba(0, 0, 0, 0.3)", "rgba(0, 0, 0, 0.9)"]}
                >
                    <Pressable
                        onPress={() => router.back()}
                        className="flex h-10 w-10 items-center justify-center"
                    >
                        <MaterialIcons
                            name="arrow-back-ios-new"
                            size={24}
                            color="white"
                        />
                    </Pressable>
                    <View className="flex-1 justify-center gap-6">
                        {sentences.map((sentence, id) => (
                            <Text
                                key={id}
                                style={{ fontFamily: "Roboto-Mono" }}
                                className="text-white text-3xl text-center px-4"
                            >
                                {sentence}.
                            </Text>
                        ))}
                    </View>
                </AppGradient>
            </ImageBackground>
        </View>
    );
};

export default AffirmationPractice;

import { affirmationGalleryData } from "@/constants/models/AffirmationsCategory";
import { Link } from "expo-router";
import { View, Text, FlatList, Pressable, Image } from "react-native";

interface GuidedAffirmationsGalleryProps {
    title: string;
    previews: affirmationGalleryData[];
}

const GuidedAffirmationsGallery = ({
    title,
    previews,
}: GuidedAffirmationsGalleryProps) => {
    return (
        <View>
            <Text className="text-white font-bold text-xl mb-1 mt-2">
                {title}
            </Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={previews}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Link href={`/affirmations/${item.id}`} asChild>
                        <Pressable>
                            <View className="w-40 h-40 mr-2">
                                <Image
                                    source={item.image}
                                    resizeMode="cover"
                                    className="h-full w-full rounded-xl"
                                />
                            </View>
                        </Pressable>
                    </Link>
                )}
            />
        </View>
    );
};

export default GuidedAffirmationsGallery;

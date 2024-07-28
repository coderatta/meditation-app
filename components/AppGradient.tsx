import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

interface AppGradientProps {
    children: any;
    colors: string[];
    containerStyles?: string;
}

const AppGradient = ({
    children,
    colors,
    containerStyles = "",
}: AppGradientProps) => {
    return (
        <LinearGradient colors={colors} className="flex-1">
            <SafeAreaView className={`flex-1 px-4 ${containerStyles}`}>
                {children}
            </SafeAreaView>
        </LinearGradient>
    );
};

export default AppGradient;

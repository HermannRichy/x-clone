import { useClerk } from "@clerk/clerk-expo";
import { Alert } from "react-native";

export const useSignOut = () => {
    const { signOut } = useClerk();

    const handleSignOut = () => {
        Alert.alert(
            "Déconnexion",
            "Etes-vous sûr de vouloir vous déconnecter?",
            [
                { text: "Annuler", style: "cancel" },
                {
                    text: "Déconnexion",
                    style: "destructive",
                    onPress: () => signOut(),
                },
            ]
        );
    };

    return { handleSignOut };
};

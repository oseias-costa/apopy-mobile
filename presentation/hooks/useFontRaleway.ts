import { useFonts,Raleway_700Bold } from "@expo-google-fonts/raleway";

export const useFontRaleway = async () => {
    const [ fontsLoaded ] = useFonts({
        Raleway_700Bold
      });
    
      if (!fontsLoaded) {
        return null;
      }

      return { Raleway_700Bold }
}
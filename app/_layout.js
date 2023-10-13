import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        PBold: require('../assets/fonts/Poppins-Bold.ttf'),
        PMedium: require('../assets/fonts/Poppins-Medium.ttf'),
        PRegular: require('../assets/fonts/Poppins-Regular.ttf')
    })

    const onLayoutRootView = useCallback(async () => {
        // Membuat sebuah kondisi apabila fonts belum di loaded maka SplashScreen tetap berjalan hingga
        // Menunggu fonts telah usai dan baru SplashScreen ke hide
        if(fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null;

    return <Stack onLayout={ onLayoutRootView } />;
}

export default Layout;
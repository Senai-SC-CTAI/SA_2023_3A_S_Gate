import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import { useFonts } from 'expo-font';
import SideMenu from 'react-native-side-menu'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito': require('./assets/fonts/Nunito-Medium.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'Nunito-BoldItalic': require('./assets/fonts/Nunito-BoldItalic.ttf'),
    'Nunito-ExtraBold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
    'Nunito-ExtraBoldItalic': require('./assets/fonts/Nunito-ExtraBoldItalic.ttf'),
    'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-SemiBoldItalic': require('./assets/fonts/Nunito-SemiBoldItalic.ttf'),
    'Nunito-MediumItalic': require('./assets/fonts/Nunito-MediumItalic.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Routes/>
      <StatusBar style="auto" />
    </>
  );
}
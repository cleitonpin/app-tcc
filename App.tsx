import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
// import { useFonts, Nunito_400Regular } from '@expo-google-fonts/nunito';
import { useFonts, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import MainNavigation from './src/routes';
import theme from './src/global/styles/theme';

LogBox.ignoreLogs(['expo-app-loading is deprecated']);

export default function App() {
  const [fontsLoaded] = useFonts({
    // Nunito_400Regular,
    Rajdhani_500Medium
  })


  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <MainNavigation />
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
import { ThemeProvider } from 'styled-components';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import { ContextProvider } from '@hooks/index';

import theme from 'src/themes';

import { Home } from '@screens/Home';
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';


export default function App() {
  const [ fontsLoaded ] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor='transparent' translucent/>
        {fontsLoaded ? <Home/> : <Loading /> }
      </ThemeProvider>
    </ContextProvider>
  );
}


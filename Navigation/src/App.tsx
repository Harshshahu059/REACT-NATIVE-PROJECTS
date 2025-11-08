/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';


export type RootStackParamList = {
  // for every route you need to define the type first 
  HomePage: undefined,
  DeatilsPage: { productId: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomePage'>
         <Stack.Screen
          name='HomePage'
          component={HomePage}
          options={
            {
              title:"Trending Products",
            }
          } 
         />   
         <Stack.Screen
          name='DeatilsPage'
          component={DetailsPage}
          options={
            {
              title:"Product Details",
              animation:"slide_from_right"
            }
          } 
         />        
      </Stack.Navigator>
    </NavigationContainer>
  )

  // return (
  //   // <SafeAreaProvider>
  //   // <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName='Home'>
  //       <Stack.Screen
  //         name='Home'
  //         component={HomePage}
  //         options={{
  //           title: "TradingProduct",
  //           animation:"flip"
  //         }}
  //       />
  //       <Stack.Screen
  //         name='Details'
  //         component={Details}
  //         options={{
  //           title: "ProductDetails",
  //            animation:"slide_from_right"
  //         }}
  //       />

  //     </Stack.Navigator>
  //   </NavigationContainer>
  //   // </SafeAreaProvider>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

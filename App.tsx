import SplashScreen from './src/components/SplashScreen'
import AuthScreen from './src/containers/auth/AuthScreen'
import LoginScreen from './src/containers/auth/LoginScreen'
import RegisterScreen from './src/containers/auth/RegisterScreen'
import ForgorPasswordScreen from './src/containers/ForgotPasswordScreen'
import AppHeaderLeft from './src/containers/auth/components/Header/AppHeaderLeft'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'

const Stack = createNativeStackNavigator()

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={({navigation}) => ({
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerLeft: () => <AppHeaderLeft navigation={navigation} />,
            headerTitle: '',
          })}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={({navigation}) => ({
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerLeft: () => <AppHeaderLeft navigation={navigation} />,
            headerTitle: '',
          })}
        />
         <Stack.Screen
          name="ForgorPasswordScreen"
          component={ForgorPasswordScreen}
          options={({navigation}) => ({
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerLeft: () => <AppHeaderLeft navigation={navigation} />,
            headerTitle: '',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
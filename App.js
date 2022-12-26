import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screenwrapper from './src/components/Screenwrapper'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { CART, HOME, LOGIN, OTPVERIFY, PROFILE, SETTING } from './src/screens/Screen'
import navStrings from './src/constants/navStrings'
import CartComponent from './src/components/CartComponent'


const App = () => {

  const HomeStacksNavigations = ({ navigation }) => {
    const HomeStack = createNativeStackNavigator();
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen component={HOME} name={navStrings.Home} 
          options={{
            headerRight: () => <CartComponent
              onPress={() => {
                navigation.push(navStrings.Cart)
              }}
            />
          }}
        />
        <HomeStack.Screen component={CART} name={navStrings.Cart} />
      </HomeStack.Navigator>
    )
  }


  const AppNavigation = ({ navigation }) => {
    const AppDrawer = createDrawerNavigator();
    return (
      <AppDrawer.Navigator>
        <AppDrawer.Screen component={HomeStacksNavigations} name={"HomeStacksNavigations"} />
        <AppDrawer.Screen component={PROFILE} name={navStrings.Profile}
         
        />
        <AppDrawer.Screen component={SETTING} name={navStrings.Setting} />
      </AppDrawer.Navigator>
    )
  }

  // this flow is for the doing authantication folw.
  const AuthNaivation = ({ navigation }) => {
    const AuthStack = createNativeStackNavigator();

    return (
      <AuthStack.Navigator>
        <AuthStack.Screen component={LOGIN} name={navStrings.Login} />
        <AuthStack.Screen component={OTPVERIFY} name={navStrings.OtpVerify} />
      </AuthStack.Navigator>
    )
  }

  //  this for the main stack of the app were the frist this component is called when app is start.
  const RootStackNavigaiton = ({ navigation }) => {
    const MainAppStack = createNativeStackNavigator();

    return (
      <MainAppStack.Navigator initialRouteName={navStrings.AuthStack}>
        <MainAppStack.Screen component={AuthNaivation} name={navStrings.AuthStack} />
        <MainAppStack.Screen component={AppNavigation} name={navStrings.AppStack} />
      </MainAppStack.Navigator>
    )
  }

  return (
    <Screenwrapper>

      <NavigationContainer>
        <RootStackNavigaiton />
      </NavigationContainer>

    </Screenwrapper>
  )
}

export default App

const styles = StyleSheet.create({})
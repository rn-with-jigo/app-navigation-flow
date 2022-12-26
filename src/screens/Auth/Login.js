import { View, Text, Button } from 'react-native'
import React from 'react'
import CustomeButton from '../../components/CustomeButton'
import navStrings from '../../constants/navStrings'

const Login = ({navigation}) => {

  return (
    <View>
      <Text>Login</Text>
      <CustomeButton 
        title={"Go to Home"}
        onPress={
          () => {
            navigation.push(navStrings.AppStack)
          }
        }
      />
    </View>
  )
}

export default Login
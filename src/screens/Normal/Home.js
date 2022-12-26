import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import navStrings from '../../constants/navStrings'

const Home = ({ navigation }) => {

  // useEffect(() => {
  //   setTimeout(() => {

  //     navigation.push(navStrings.Cart)
  //   }, 3000)
  // }, [])

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
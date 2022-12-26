import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screenwrapper = ({children}) => {
  return (
    <View style={styles.main_container}>

    {Platform.OS === "ios" ?
      <SafeAreaView style={{flex:1,}}>
        {children}
      </SafeAreaView>
      :
      <View style={{flex:1,}}>
        {children}
      </View>
    }

  </View>
  )
}

export default Screenwrapper

const styles = StyleSheet.create({
    main_container: {
        flex:1,
    }
})
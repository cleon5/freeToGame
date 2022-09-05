import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text>Footer</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        height: '5%',
    }
})

export default Footer
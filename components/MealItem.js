import { View, Text } from 'react-native'
import React from 'react'

export default function MealItem({title}) {
  return (
    <View>
      <Text>{ title }</Text>
    </View>
  )
}

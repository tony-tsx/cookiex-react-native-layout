import React, { StatelessComponent } from 'react'
import { View, ViewProps, TouchableOpacityProps, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native'

interface Props extends ViewProps {
  onPress: TouchableOpacityProps['onPress']
  size: number
}

const Row: StatelessComponent<Props> = props => {
  const { onPress, style, children, ...rest } = props
  const flatten = StyleSheet.flatten( style )
  const rootStyle: ViewStyle = {
    flexDirection: 'row',
    flex: props.size ?? ( flatten && flatten.height ) ? 0 : 1,
  }

  const col = <View style={ [ flatten, rootStyle ] } { ...rest }>{children}</View>
  if ( onPress ) return <TouchableOpacity style={ [ flatten, rootStyle ] } onPress={ onPress }>{col}</TouchableOpacity>
  return col
}

export default Row
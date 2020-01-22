import React from 'react'
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  TouchableHighlightProps,
  TouchableOpacityProps
} from 'react-native'

const Touch: React.StatelessComponent<Touch.Props> = props => {
  const { highlight, opacity, non, children, ...rest } = props
  if ( 'simple' in props && props.simple )
    switch ( true ) {
      case highlight: return <TouchableHighlight onPress={ rest.onPress } >{children}</TouchableHighlight>
      case opacity: return <TouchableOpacity onPress={ rest.onPress } >{children}</TouchableOpacity>
      case non:
      case 'onPress' in props: <TouchableWithoutFeedback onPress={ rest.onPress } >{children}</TouchableWithoutFeedback>
      default: return <React.Fragment>{props.children}</React.Fragment>
    }

  switch ( true ) {
    case highlight: return <TouchableHighlight { ...rest } >{children}</TouchableHighlight>
    case opacity: return <TouchableOpacity { ...rest } >{children}</TouchableOpacity>
    case non:
    default: return <TouchableWithoutFeedback { ...rest }>{children}</TouchableWithoutFeedback>
  }
}

namespace Touch {
  export interface Highlight { highlight?: true, opacity?: boolean, non?: boolean }
  export interface Opacity { opacity?: true, non?: boolean, highlight?: boolean }
  export interface Non { non?: true, highlight?: boolean, opacity?: boolean }

  export type Simple = { simple: boolean } & (
    | Highlight & Pick<TouchableHighlightProps, 'onPress'>
    | Opacity & Pick<TouchableOpacityProps, 'onPress'>
    | Non & Pick<TouchableWithoutFeedbackProps, 'onPress'> )

  export type Props =
    | ( Highlight & TouchableHighlightProps )
    | ( Opacity & TouchableOpacityProps )
    | ( Non & TouchableWithoutFeedbackProps )
    | Simple
}

export type TouchProps = Touch.Props

export default Touch
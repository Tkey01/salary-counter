import React from 'react'
import { WrappedFieldProps } from 'redux-form'

import { Radio } from './components/Radio'
import { Switcher } from './components/Switcher'
import { Text } from './components/Text'

import { IRadioProps } from './components/Radio/Radio'
import { ISwitcherProps } from './components/Switcher/Switcher'
import { ITextProps } from './components/Text/Text'

type RadioInput = { type: 'radio' } & IRadioProps
type SwitcherInput = { type: 'switcher' } & ISwitcherProps
type TextInput = { type: 'text' } & ITextProps

type InputProps = RadioInput | SwitcherInput | TextInput

type Props = WrappedFieldProps & InputProps

export const Input: React.FC<Props> = (props) => {
  const renderInput = () => {
    switch (props.type) {
      case 'radio':
        return <Radio {...props} />
      case 'switcher':
        return <Switcher {...props} />
      default:
        return <Text {...props} />
    }
  }

  return renderInput()
}

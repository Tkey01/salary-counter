import React from 'react'
import { Radio } from './components/Radio'
import { Switcher } from './components/Switcher'
import { Text } from './components/Text'

interface Props {
  [prop: string]: any
}

export const Input: React.FC<Props> = ({ type, ...props }) => {
  const renderInput = () => {
    switch (type) {
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

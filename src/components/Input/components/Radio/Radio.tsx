import React from 'react'
import { FormGroup, CustomInput, Label, Input } from 'reactstrap'

interface Props {
  [prop: string]: any
}

export const Radio: React.FC<Props> = ({ input, meta, ...rest }) => {
  return <CustomInput type='radio' checked={input.value === rest.value} {...input} {...rest} />
}

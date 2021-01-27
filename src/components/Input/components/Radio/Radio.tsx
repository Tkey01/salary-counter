import React from 'react'
import { CustomInput } from 'reactstrap'
import { WrappedFieldProps } from 'redux-form'

export interface IRadioProps {
  id: string
  value: string
  label: string
}

type Props = WrappedFieldProps & IRadioProps

export const Radio: React.FC<Props> = ({ input, meta, id, value, label }) => {
  return <CustomInput type='radio' id={id} checked={input.value === value} label={label} {...input} value={value} />
}

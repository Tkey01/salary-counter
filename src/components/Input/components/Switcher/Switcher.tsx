import React, { useState } from 'react'
import { CustomInput } from 'reactstrap'

interface Props {
  [prop: string]: any
}

export const Switcher: React.FC<Props> = ({ input, meta, ...rest }) => {
  return (
    <div>
      <label>{rest.label1}</label>
      <CustomInput type='switch' {...input} {...rest} />
      <label>{rest.label2}</label>
    </div>
  )
}

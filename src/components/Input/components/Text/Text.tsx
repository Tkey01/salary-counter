import React from 'react'
import { Input } from 'reactstrap'
import { WrappedFieldProps } from 'redux-form'

import styles from './Text.module.scss'

export interface ITextProps {
  id: string
  label: string
}

type Props = WrappedFieldProps & ITextProps

export const Text: React.FC<Props> = ({ input, meta, id, label }) => {
  return (
    <div className={styles.container}>
      <Input type='number' {...input} className={styles.input} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

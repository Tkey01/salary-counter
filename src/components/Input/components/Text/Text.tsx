import React from 'react'
import { Input } from 'reactstrap'

import styles from './Text.module.scss'

interface Props {
  [prop: string]: any
}

export const Text: React.FC<Props> = ({ input, meta, ...rest }) => {
  return (
    <div className={styles.container}>
      <Input type='number' {...input} {...rest} className={styles.input} />
      <label htmlFor={rest.id}>{rest.label}</label>
    </div>
  )
}

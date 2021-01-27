import React, { useState } from 'react'
import { CustomInput } from 'reactstrap'

import styles from './Switcher.module.scss'

interface Props {
  [prop: string]: any
}

export const Switcher: React.FC<Props> = ({ input, meta, ...rest }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={rest.id} className={styles.label}>
        {rest.label1}
      </label>
      <CustomInput type='switch' {...input} {...rest} />
      <label htmlFor={rest.id} className={styles.label}>
        {rest.label2}
      </label>
    </div>
  )
}

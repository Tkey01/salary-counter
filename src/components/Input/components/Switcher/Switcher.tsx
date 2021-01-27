import React from 'react'
import { CustomInput } from 'reactstrap'
import { WrappedFieldProps } from 'redux-form'

import styles from './Switcher.module.scss'

export interface ISwitcherProps {
  id: string
  label1: string
  label2: string
}

type Props = WrappedFieldProps & ISwitcherProps

export const Switcher: React.FC<Props> = ({ input, meta, label1, label2, id }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label1}
      </label>
      <CustomInput type='switch' id={id} {...input} />
      <label htmlFor={id} className={styles.label}>
        {label2}
      </label>
    </div>
  )
}

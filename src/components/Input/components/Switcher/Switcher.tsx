import React from 'react'
import { CustomInput } from 'reactstrap'
import { WrappedFieldProps } from 'redux-form'
import classnames from 'classnames'

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
      <label htmlFor={id} className={classnames([styles.label, !input.value && styles.active])}>
        {label1}
      </label>
      <CustomInput type='switch' id={id} {...input} />
      <label htmlFor={id} className={classnames([styles.label, input.value && styles.active])}>
        {label2}
      </label>
    </div>
  )
}

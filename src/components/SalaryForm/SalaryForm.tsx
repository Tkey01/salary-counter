import React from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import { Input } from '../Input'
import { Tooltip } from '../Tooltip'

import styles from './SalaryForm.module.scss'

interface IProps {
  [s: string]: any
}

const SalaryFormComponent: React.FC<InjectedFormProps<{}, IProps> & IProps> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h3>Сумма</h3>
      <div className={styles.row}>
        <Field
          name='salary-type'
          component={Input}
          props={{ type: 'radio', id: 'mounthly', value: 'mounthly', label: 'Оклад за месяц' }}
        />
      </div>
      <div className={styles.row}>
        <Field
          name='salary-type'
          component={Input}
          props={{ type: 'radio', id: 'mrot', value: 'mrot', label: 'МРОТ' }}
        />
        <Tooltip text='МРОТ - минимальный размер оплаты труда. Разный для разных регионов.' />
      </div>
      <div className={styles.row}>
        <Field
          name='salary-type'
          component={Input}
          props={{ type: 'radio', id: 'daily', value: 'daily', label: 'Оклад за день' }}
        />
      </div>
      <div className={styles.row}>
        <Field
          name='salary-type'
          component={Input}
          props={{ type: 'radio', id: 'hourly', value: 'hourly', label: 'Оклад за час' }}
        />
      </div>
      <div className={styles.inputContainer}>
        <Field
          name='with-ndfl'
          component={Input}
          props={{
            type: 'switcher',
            id: 'with-ndfl',
            label1: 'Указать с НДФЛ',
            label2: 'Без НДФЛ',
          }}
        />
        <Field
          name='mounthly-count'
          component={Input}
          props={{
            type: 'text',
            id: 'mounthly-count',
            label: '₽',
          }}
        />
      </div>
    </form>
  )
}

export const SalaryForm = reduxForm({
  // a unique name for the form
  form: 'contact',
})(SalaryFormComponent)

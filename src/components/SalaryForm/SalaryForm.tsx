import React from 'react'
import { Field, reduxForm, InjectedFormProps, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { Input } from '../Input'
import { Tooltip } from '../Tooltip'

import styles from './SalaryForm.module.scss'

interface IProps {
  [s: string]: any
}

const SalaryFormComponent: React.FC<InjectedFormProps<{}, IProps> & IProps> = ({
  handleSubmit,
  salaryType,
  ...rest
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h3>Сумма</h3>
      <div className={styles.row}>
        <Field
          name='salaryType'
          component={Input}
          props={{ type: 'radio', id: 'mounthly', value: 'mounthly', label: 'Оклад за месяц' }}
        />
      </div>
      <div className={styles.row}>
        <Field
          name='salaryType'
          component={Input}
          props={{ type: 'radio', id: 'mrot', value: 'mrot', label: 'МРОТ' }}
        />
        <Tooltip text='МРОТ - минимальный размер оплаты труда. Разный для разных регионов.' />
      </div>
      <div className={styles.row}>
        <Field
          name='salaryType'
          component={Input}
          props={{ type: 'radio', id: 'daily', value: 'daily', label: 'Оклад за день' }}
        />
      </div>
      <div className={styles.row}>
        <Field
          name='salaryType'
          component={Input}
          props={{ type: 'radio', id: 'hourly', value: 'hourly', label: 'Оклад за час' }}
        />
      </div>
      <div className={styles.inputContainer}>
        <Field
          name='withNDFL'
          component={Input}
          props={{
            type: 'switcher',
            id: 'withNDFL',
            label1: 'Указать с НДФЛ',
            label2: 'Без НДФЛ',
          }}
        />
        {salaryType === 'mounthly' && (
          <Field
            name='mounthlyCount'
            component={Input}
            props={{
              type: 'number',
              id: 'mounthlyCount',
              label: '₽',
            }}
          />
        )}
        {salaryType === 'daily' && (
          <Field
            name='dailyCount'
            component={Input}
            props={{
              type: 'number',
              id: 'dailyCount',
              label: '₽ в день',
            }}
          />
        )}
        {salaryType === 'hourly' && (
          <Field
            name='hourlyCount'
            component={Input}
            props={{
              type: 'number',
              id: 'hourlyCount',
              label: '₽ в час',
            }}
          />
        )}
      </div>
    </form>
  )
}

const SalaryFormWithoutValues = reduxForm({
  form: 'salary',
})(SalaryFormComponent)

const selector = formValueSelector('salary')

export const SalaryForm = connect((state) => {
  return {
    salaryType: selector(state, 'salaryType'),
  }
})(SalaryFormWithoutValues)

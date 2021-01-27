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
      <Field
        name='salary-type'
        component={Input}
        props={{ type: 'radio', name: 'salary-type', id: 'mounthly', value: 'mounthly', label: 'Оклад за месяц' }}
      />
      <div className='flex-row'>
        <Field
          name='salary-type'
          component={Input}
          props={{ type: 'radio', name: 'salary-type', id: 'mrot', value: 'mrot', label: 'МРОТ' }}
        />
        <Tooltip text='МРОТ - минимальный размер оплаты труда. Разный для разных регионов.' />
      </div>
      <Field
        name='salary-type'
        component={Input}
        props={{ type: 'radio', name: 'salary-type', id: 'daily', value: 'daily', label: 'Оклад за день' }}
      />
      <Field
        name='salary-type'
        component={Input}
        props={{ type: 'radio', name: 'salary-type', id: 'hourly', value: 'hourly', label: 'Оклад за час' }}
      />
    </form>
  )
}

export const SalaryForm = reduxForm({
  // a unique name for the form
  form: 'contact',
})(SalaryFormComponent)

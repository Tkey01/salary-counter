import React from 'react'

import styles from './SalaryInfo.module.scss'

interface IProps {
  withoutNDFL: boolean
  salary: string
}

export const SalaryInfo: React.FC<IProps> = ({ withoutNDFL, salary }) => {
  const transformSalaryValue = (value: string | undefined): number => (value === undefined ? 0 : +value)
  const salaryCount = transformSalaryValue(salary)

  const salaryValue = withoutNDFL ? salaryCount : Math.round(salaryCount * 0.87)
  const NDFLValue = withoutNDFL ? Math.round((salaryCount / 87) * 13) : Math.round(salaryCount * 0.13)
  const totalValue = salaryValue + NDFLValue

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <span className={styles.bold}>{salaryValue} ₽</span>
        <span>сотрудник будет получать на руки</span>
      </div>
      <div className={styles.row}>
        <span className={styles.bold}>{NDFLValue} ₽</span>
        <span>НДФЛ, 13% от оклада</span>
      </div>
      <div className={styles.row}>
        <span className={styles.bold}>{totalValue} ₽</span>
        <span>за сотрудника в месяц</span>
      </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import { UncontrolledTooltip, Button } from 'reactstrap'

import close from './images/close.svg'
import info from './images/info.svg'

import styles from './Tooltip.module.scss'

const TooltipContent: React.FC<any> = ({ scheduleUpdate, text }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      scheduleUpdate()
    }, 2000)

    return () => clearInterval(intervalId)
  })

  return <>{text}</>
}

export const Tooltip: React.FC<any> = ({ text, isOpen, isAttached, toggleAttached, toggleOpen }) => {
  const onClickBtn = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <div>
      <button className={styles.btn} onClick={onClickBtn} id='ScheduleUpdateTooltip'>
        <img src={isAttached ? close : info} alt='Узнать подробнее' />
      </button>

      <UncontrolledTooltip placement='top' target='ScheduleUpdateTooltip' trigger='click'>
        {({ scheduleUpdate }) => <TooltipContent text={text} scheduleUpdate={scheduleUpdate} />}
      </UncontrolledTooltip>
    </div>
  )
}

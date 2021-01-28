import React, { useEffect, useState } from 'react'
import { Tooltip as ReactstrapTooltip } from 'reactstrap'

import close from './images/close.svg'
import info from './images/info.svg'

import styles from './Tooltip.module.scss'

interface ITooltipContent {
  scheduleUpdate: () => void
  text: string
}

interface ITooltip {
  text: string
}

const TooltipContent: React.FC<ITooltipContent> = ({ scheduleUpdate, text }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      scheduleUpdate()
    }, 2000)
    return () => clearInterval(intervalId)
  })

  return <>{text}</>
}

export const Tooltip: React.FC<ITooltip> = ({ text }) => {
  const [isOpen, toggleOpen] = useState(false)

  const toggle = () => toggleOpen((prev) => !prev)

  const onClickBtn = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <div>
      <button className={styles.btn} onClick={onClickBtn} id='ScheduleUpdateTooltip'>
        <img src={isOpen ? close : info} alt='Узнать подробнее' />
      </button>

      <ReactstrapTooltip
        isOpen={isOpen}
        toggle={toggle}
        placement='bottom-start'
        target='ScheduleUpdateTooltip'
        trigger='click'
      >
        {({ scheduleUpdate }) => <TooltipContent text={text} scheduleUpdate={scheduleUpdate} />}
      </ReactstrapTooltip>
    </div>
  )
}

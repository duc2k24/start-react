import React from 'react'
import classNames from 'classnames/bind'
import style from './Sidebar.module.scss'

const cx = classNames.bind(style)

export default function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <h2>Sidebar</h2>
    </aside>
  )
}

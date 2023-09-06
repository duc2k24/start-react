import React from 'react'
import Header from '../components/Header'
import Sidebar from './Sidebar'
import classNames from 'classnames/bind'
import style from './Defautlayout.module.scss'

const cx = classNames.bind(style)

export default function Defaulayout({children}) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>
          {children}
        </div>
      </div>
    </div>
  )
}

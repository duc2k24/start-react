import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'


export default function Defaulayout({children}) {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <div className='content'>
          {children}
        </div>
      </div>
    </div>
  )
}

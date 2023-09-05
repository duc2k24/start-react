import React from 'react'
import Header from './Header'


export default function Defaulayout({children}) {
  return (
    <div>
      <Header />
      <div>
        <div className='content'>
          {children}
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import Header from '../components/Header'


export default function HeaderOnly({children}) {
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

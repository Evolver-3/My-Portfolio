import React from 'react'
import Navbar from './Navbar'

const Container = ({children}) => {
  return (
    <div className='max-w-4xl mx-auto bg-white dark:bg-black p-4 md:p-10'>
      <Navbar/>
      {children}
    </div>
  )
}

export default Container
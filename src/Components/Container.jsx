import React from 'react'


const Container = ({children,className=""}) => {
  return (<>
    
    <div className={`max-w-4xl mx-auto w-full bg-white dark:bg-black  ${className}`}>
      
      
      {children}
    </div>
    
  </>
  )
}

export default Container
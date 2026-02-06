import React, { useEffect, useState } from 'react'

const Dark = () => {
  const [dark,setDark]=useState(false)

  useEffect(()=>{
    const root=document.documentElement

    if(dark){
      root.classList.add("dark")
      localStorage.setItem("theme","dark")

    }else{
      root.classList.remove("dark")
      localStorage.setItem("theme","light")
    }
  },[dark])
  return (
    <div className='absolute top-5 left-20 bg-foreground'>
      <button onClick={()=>setDark(!dark)}>{dark?"dark":"normal"}</button>
    </div>
  )
}

export default Dark
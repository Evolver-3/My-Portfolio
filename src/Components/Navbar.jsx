import React, { useState } from 'react' 
import {motion, useMotionValueEvent, useScroll} from 'motion/react'


const Navbar = () => {

  const navItems=[
    {
      title:"About",
      href:'/about',
    },
    {
      title:"Projects",
      href:'/projects'
    },
    {
      title:"Contact",
      href:"/contact"
    },
    {
      title:"Blog",
      href:'/blog'
    }
  ];

  const [hovered,setHovered]=useState();
  const {scrollY}=useScroll();

  const[shadow,setShadow]=useState("")

  useMotionValueEvent(scrollY,"change",(latest)=>{
    if(latest>20){
      setShadow(true)
    }else{
      setShadow(false)
    }
  })

  return (
    <>
    <motion.nav
    style={{
      boxShadow:shadow? 'var(--shadow-acer)':"none"
    }}
     className='flex fixed top-0 inset-x-0 max-w-4xlitems-center justify-between p-2'>
      <img className='w-10 h-10 rounded-full' src="/profile.jpg" height="100" width="100" alt="profile"></img>

      <div className='flex items-center '>
        {navItems.map((item,index)=>(
          <a href={item.href} key={index} className='text-sm relative px-2 py-1'
          onMouseEnter={()=>setHovered(index)}
          onMouseLeave={()=>setHovered()}>
            { hovered ===index &&
              (<motion.span layoutId='hovered-span' className='h-full w-full absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-800'>
              </motion.span>)
            }
            <span className='z-10 relative'> {item.title} </span>
          </a>
        ))}
      </div>
      
    </motion.nav>
    </>
  )
}

export default Navbar
import React from 'react'

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
  ]
  return (
    <div className='flex items-center justify-between'>
      <img src={} alt="profile.png"></img>
    </div>
  )
}

export default Navbar
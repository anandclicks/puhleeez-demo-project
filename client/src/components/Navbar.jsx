import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbarWrapper h-[100px] shadow-lg">
      <div className='flex justify-between items-center h-full max-w-[1300px] mx-auto lg:p-5'>
      {/* logo  */}
      <Link to={'/'}>
        <h1 className='text-2xl font-medium'>ᗩᑎᗩᑎᗪ ᑕᒪIᑕKᔕ</h1>
      </Link>
      {/* buttons and profile  */}
      <div className='flex gap-5 items-center'>
      <i class="ri-shopping-bag-line text-xl"></i>
      <div className="profile btnsBgColor px-4 py-2 text-sm rounded-sm">Sign in</div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
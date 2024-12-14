import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='h-[300px] bg-black '>
      <div className="footerMain max-w-[1300px] mx-auto text-white lg:p-5 flex justify-between items-center h-full">
        {/* info  */}
       <div className='info h-full'>
       <h1 className='text-xl'>ᗩᑎᗩᑎᗪ ᑕᒪIᑕKᔕ</h1>
        <p className='text-sm '>Sell your products to crores of customers on <br /> anandClicsk at 0% commission</p>
        <div className="bg-white text-black w-[130px] h-[45px] flex justify-center items-center font-medium mt-3">Explore now</div>
       </div>
       {/* quick links  */}
       <div className="links flex flex-col gap-2 capitalize">
        <h2 className='text-lg'>Quick Links</h2>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Services</Link>
        <Link>Sell online</Link>
        <Link>Pricing and Communication</Link>
        <Link>Shipping and returns</Link>
        <Link>FAQ'S</Link>
       </div>
       {/* address  */}
       <div className="info h-full flex flex-col">
        <h2 className='text-xl'>Contact us</h2>
        <p>anandclicks@gmail.com</p>
        <div className='mt-3'>
        <i class="ri-facebook-line text-xl bg-white mx-2 p-1 text-black cursor-pointer"></i>
        <i class="ri-instagram-line text-xl bg-white mx-2 p-1 text-black cursor-pointer"></i>
        <i class="ri-linkedin-line text-xl bg-white mx-2 p-1 text-black cursor-pointer"></i>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Footer
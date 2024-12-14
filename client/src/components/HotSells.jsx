import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import {Link} from 'react-router-dom'
const HotSells = () => {
  const [prodctuData, setprodctuData] = useState([])
  // api request for getting data of hot sells prodcut 
useEffect(()=> {
  const apiCall = async()=> {
    const response = await axios.get('https://puhleezbackend.onrender.com/prodcut/allProducts')
    if(response.data.sucess) {
      setprodctuData(response.data.prodcuts)
    }
  }
  apiCall()
},[])

  return (
    <div className='mt-5 h-auto my-5'>
      <h1 className='text-2xl font-medium'>Hot sells </h1>
      {/* .prodcuts  */}
      <div className="prodcutWrapper flex justify-between flex-wrap">
        {prodctuData?.map((item,key)=> (
          <Link key={key} to={`/prodcut/${item._id}`} className="prodcut h-[370px] w-[240px] m-2 cursor-pointer mb-5 shadow-md p-3">
          <img className='h-[85%] w-full object-cover' src={item.image} alt={item.image} />
          <p className='text-[14px] font-medium mt-2'>{item.title}</p>
          <div className="price">
            <p className='text-sm leading-3'>₹{item.salePrice} <span className='text-sm text-red-600 line-through'>₹{item.price}</span></p>
          </div>
        </Link >
        ))}
      </div>
      <div className="viewAllBtn w-full flex justify-center">
        <div className="btnsBgColor w-[140px] h-[50px] flex justify-center items-center mb-5 cursor-pointer">View all</div>
      </div>
    </div>
  )
}

export default HotSells
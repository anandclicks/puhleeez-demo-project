import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SpecificProduct = () => {
    useEffect(()=> {
      window.scrollTo({
        top : 0,
        behavior : 'smooth'
      })
    },[])

    
  const [prodcutData, setprodcutData] = useState([])
  // getting procut id from params 
  const {id} = useParams()
  // api call for fetching data of this prodcut from databse 
  useEffect(()=> {
    const apiCall = async()=> {
      const response = await axios.post("http://localhost:3000/prodcut/specificPorduct", {id : id})
      console.log(response)
      if(response.data.sucess) {
        setprodcutData(response.data.prodcut)
      }
    }
    apiCall()
  },[])

  // handling quentity input 
  const [quentity, setquentity] = useState({
    quentity : 1
  })
  const handleQuentity = (evt)=> {
    setquentity((prev)=> ({...prev,[evt.target.name] : evt.target.value}))
  }
  console.log(prodcutData)
  return (
    <div className='max-w-[1300px] mx-auto pt-5 my-5 flex'>
      {/* left side  */}
      <div className="leftSide h-full w-[40%] flex justify-center">
        <img className='h-[600px] object-cover' src={prodcutData.image} alt="" />
      </div>
      {/* right side  */}
      <div className="rightSide h-full p-5">
        <h1 className='text-xl'>{prodcutData.title}</h1>
        <h2 className='text-3xl mt-2 font-medium'>₹{prodcutData.salePrice} <span className='line-through text-xl text-stone-500'>₹{prodcutData.price}</span></h2>
        <p>★ ★ ★ ★ ★ <span className='text-sm'>14 Ratting</span></p>
        <p className='w-[400px] mt-5'>{prodcutData.dipscription}</p>
        <div className="color w-[120px] h-[45px] border-[1px] flex justify-center items-center mt-5 border-stone-300">{prodcutData.color}</div>
        {/* quentity and add to cart btn  */}
       <div className="inputAndBtn flex gap-3 items-center mt-5">
       <input onChange={(evt)=> handleQuentity(evt)} className='bg-transparent outline-none text-center border-stone-300 border-[1px] w-[50px] h-[50px] ' type="text" name='quentity'  value={quentity.quentity} />
       <div className="btn btnsBgColor w-[150px] h-[50px] flex justify-center items-center cursor-pointer">Add to cart</div>
       </div>
       {/* prodcut more details  */}
      <div>
        <h2 className='text-lg mt-5'>Fabric</h2>
      <p className='leading-3'>{prodcutData.fabric}</p>
      </div>
      <div >
        <h2 className='text-lg mt-5'>Company Name</h2>
      <p className='leading-3'>Anand clicks</p>
      </div>
      <div>
      </div>
      </div>
    </div>
  )
}

export default SpecificProduct
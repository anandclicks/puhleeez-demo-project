import React, { useEffect } from 'react'

const FaqSection = () => {
  useEffect(()=> {
    window.scrollTo({
      top : 0,
      behavior : 'smooth'
    })
  },[])
  const faqDatab = [
    {
      question : "What is your return and exchange policy?",
      dipscription : "We offer a hassle-free return and exchange policy within 30 days of purchase. Items must be unworn, unwashed, and in their original condition with tags attached. Please visit our Returns & Exchanges page for detailed instructions."
    },
    {
      question : "How long does shipping take?",
      dipscription : "Shipping times vary depending on your location. Orders are typically processed within 1-2 business days. Standard shipping takes 5-7 business days, while express shipping options are available for faster delivery."
    },
    {
      question : "Do you offer international shipping?",
      dipscription : "Yes, we ship to select countries worldwide. Shipping fees and delivery times may vary based on the destination. You can check available countries and rates during checkout."
    },
     {
      question : "How can I track my order?",
      dipscription : "Once your order is shipped, you will receive a confirmation email with a tracking number. Use this number to track your package on our website or the carrier's tracking page. Would you like help tailoring this further or adding more details?"
     }
  ]
  // function for handling faq 
  const handleFaq = (evt) => {
    if (evt.target.closest('.faqEachPoints')) {
      const faqElement = evt.target.closest('.faqEachPoints');
      faqElement.classList.toggle("expenedeFaq");
      console.log(faqElement.classList);
    }
  };
  return (
    <div className='faqWrapper'>
        <h1 className='text-2xl mt-5'>We've Got You Covered: FAQs</h1>
     {faqDatab.map((item,key)=> (
       <div key={key} className='faqEachPoints shadow-lg  border-stone-300 rounded-md p-5 py-8 my-3 mb-5 cursor-pointer'>
       <div onClick={(evt)=> handleFaq(evt)} className="questionAndExpendAero flex w-full justify-between">
         <h2 className='text-xl mb-5'>{key+ 1}) {item.question}</h2>
         <i class="ri-add-line text-2xl"></i>
       </div>
       <p >{item.dipscription}</p>
     </div>
     ))}
    </div>
  )
}

export default FaqSection
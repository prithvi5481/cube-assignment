import React from 'react'
import { ICustomerProps, ICustomerDetailsProps } from '../types/types';


const TextLimitFunction = (text: string) => {
    if(text.length > 130){
        return text.substring(0,130) + '...';
    }
    return text;
}

const CustomerDetails = ({customer, isSelected}:ICustomerDetailsProps) => {
  return (
    <div className={`px-6 py-4 border-b border-gray-200 
        ${isSelected ? 'bg-gray-100 border-r-[3px] border-r-gray-400 text-gray-600' : 'bg-white'}`}
    >
        <div className='font-semibold text-xl pb-2'>{customer.customerName}</div>
        <div>{TextLimitFunction(customer.customerInfo)}</div>
    </div>
  )
}

export default CustomerDetails
import React, { useState } from 'react'
import CustomerSideBar from './CustomerSideBar'
import CustomerPictures from './CustomerPictures';
import { customerList } from '../data/CustomerList';

const Customers = () => {
    const [selectedCustomer, setSelectedCustomer] = useState(customerList[0]);
  return (
    <div className='w-[100vw] h-[100vh] flex'>
        <div className='custom-scrollbar w-[25%] h-full overflow-auto bg-white border border-r-1 pl-4 border-gray-400 hover:cursor-pointer'>
            <CustomerSideBar selectedCustomer={selectedCustomer} setSelectedCustomer={setSelectedCustomer}/>
        </div>
        <div className='w-[75%] bg-gray-100 h-full overflow-auto'>
            <CustomerPictures selectedCustomer={selectedCustomer}/>
        </div>
    </div>
  )
}

export default Customers
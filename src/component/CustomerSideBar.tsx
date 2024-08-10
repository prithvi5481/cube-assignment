import React from 'react';
import CustomerDetails from './CustomerDetails';
import { customerList } from '../data/CustomerList';
import { ICustomerProps, ICustomerSideBarProps } from '../types/types';

const CustomerSideBar = ({selectedCustomer, setSelectedCustomer}:ICustomerSideBarProps) => {

  return (
    <div>
        {
            customerList.map((customer,index) => {
                return (
                    <div 
                        key={index}
                        onClick={() => setSelectedCustomer(customer)}
                    >
                        <CustomerDetails 
                            customer={customer}
                            isSelected={customer.customerName === selectedCustomer.customerName}
                        />
                    </div>
                )
            })
        }
    </div>
  )
}

export default CustomerSideBar;
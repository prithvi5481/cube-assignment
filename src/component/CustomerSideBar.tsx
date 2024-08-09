import React from 'react';
import CustomerDetails from './CustomerDetails';
import { customerList } from '../data/CustomerList';

interface Customer {
    customerName: string;
    customerInfo: string;
}

interface CustomerSideBarProps {
    selectedCustomer: any;
    setSelectedCustomer: any;
}

const CustomerSideBar = ({selectedCustomer, setSelectedCustomer}:CustomerSideBarProps) => {

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
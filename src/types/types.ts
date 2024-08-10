export interface ICustomerProps {
    customerName: string;
    customerAddress: string;
    customerInfo: string;
}

export interface ICustomerSideBarProps {
    selectedCustomer: ICustomerProps;
    setSelectedCustomer: any;
}

export interface ICustomerDetailsProps {
    isSelected: boolean;
    customer: ICustomerProps;
}
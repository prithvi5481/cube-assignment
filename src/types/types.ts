export interface ICustomerProps {
    customerName: string;
    customerAddress: string;
    customerInfo: string;
}

export interface ICustomerSideBarProps {
    selectedCustomer: ICustomerProps;
    setSelectedCustomer: React.Dispatch<React.SetStateAction<ICustomerProps>>;
}

export interface ICustomerDetailsProps {
    isSelected: boolean;
    customer: ICustomerProps;
}
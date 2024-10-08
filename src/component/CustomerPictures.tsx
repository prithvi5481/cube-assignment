import React,{useState, useEffect} from 'react';
import { ICustomerProps } from '../types/types';

const CustomerPictures = ({selectedCustomer}:{selectedCustomer: ICustomerProps}) => {
    const [images, setImages] = useState([]);

    const fetchRandomImages = async () => {
        try {
            const response = await fetch(`https://api.unsplash.com/photos/random?count=9&client_id=${process.env.REACT_APP_ACCESS_TOKEN}`);
            const data = await response.json();
            setImages(data.map((img:any) => img.urls.regular));
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    useEffect(() => {
        fetchRandomImages(); 

        const intervalId = setInterval(() => {
            fetchRandomImages();
        }, 10000);

        return () => clearInterval(intervalId);
    }, [selectedCustomer]);

  return (
    <div className='px-32 py-16'>
        <div className='flex items-center flex-col'>
            <div className='font-semibold text-xl pb-6'>{selectedCustomer.customerName}</div>
            <div className='text-center font-extralight'>{selectedCustomer.customerAddress}</div>
            <div className='text-center'>{selectedCustomer.customerInfo}</div>
        </div>
        <div className='grid grid-cols-3 items-center justify-center gap-4 mt-4 h-[100%] w-[100%]'>
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Random ${index}`} className='w-[12rem] h-[12rem] border rounded-xl object-cover' />
            ))}
        </div>
    </div>
  )
}

export default CustomerPictures
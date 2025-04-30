import React, { useEffect, useState } from 'react'
import Card from './Card';

const OnlineDelivery = () => {
    const[data, setData]= useState([]);
    
        const fetchTopRestaurant= async()=>{
            const response = await fetch('/api/restaurantChains.json');
            const apiData=await response.json();
            setData(apiData);
    
        }
    
    
        useEffect(
            () => {
                fetchTopRestaurant()
            },[]
        )
  return (
     <div className='max-w-[1200px] mx-auto px-2 '>
                <div className='flex items-center justify-between my-5'>
            
                <div className='text-[25px] font-bold'>Restaurunts with online delivery in jodhpur</div>
            
        
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {
                    data.map(
                        (d,i)=>{
                             return<Card {...d}/>
                        }
                    )
                }
            </div>
                </div>
  )
}

export default OnlineDelivery
import React, { useEffect, useState } from 'react'
import { FaArrowRight,FaArrowLeft  } from "react-icons/fa";




 const Category = () => {
    const[slide,setSlide] = useState([0]);
    const[category,setaCategory]=useState([]); 

    const fetchCategory=async()=>{
        
        const response = await fetch("/images/category.json");
        const data= await response.json();
        setaCategory(data); 
     }
    useEffect (
        ()=>{
            fetchCategory()

        },[]
    )

    const nextSlide =()=> {
        console.log(category.length);
        if(category.length-8 == slide) return false;
       setSlide(slide + 3);
    }

    const prevSlide= ()=>{
        if(slide == 0) return false;
      setSlide(slide - 3);
    }
  return (
    <div className='max-w-[1200px] mx-auto px-2'>
    <div className='flex items-center justify-between my-5'>

    <div className='text-[25px] font-bold'>What's on your mind?</div>

        <div className='flex'>
        <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'
        onClick={prevSlide}>
            <FaArrowLeft/>
        </div>
        <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'
        onClick={nextSlide}>
            < FaArrowRight />
        </div>
         </div>

    </div>
    <div className='flex overflow-hidden'>
        
        {
        category.map(
            (cat,index)=> {
                return(
                       <div style={{
                        transform:`translateX(-${slide * 100}%)`
                       }} key={index} className='w-[150px] shrink-0 duration-500'>
                        <img src={`/images/${cat.image}`}alt={cat.path} />
                        </div>

                )
            }
        )
    }
     </div>
     <hr className='my-6 '/>

    </div>
)
}

export default Category
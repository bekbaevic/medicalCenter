import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

function CardSkeleton() {
    return (
        <div className='bg-gray-200  rounded-[15px]'>
            <div className='flex  items-center justify-center p-4'>
                <div className='bg-white gray-bg   w-full rounded-md h-[250px]'></div>
            </div>
            <div className='p-4 flex flex-col gap-2 text-[14px]'>
                <p className='bg-white gray-bg h-[30px] rounded-md'></p>
                <p className='bg-white gray-bg h-[20px] rounded-md'></p>
                <p className='bg-white gray-bg h-[20px] rounded-md'></p>
                <p className='bg-white gray-bg h-[20px] rounded-md'></p>
                <p className='bg-white gray-bg h-[20px] rounded-md'></p>
                <button className='bg-white gray-bg  w-[50%] h-[20px] rounded-md mt-4'></button>
            </div>
        </div>
    )
}

export default CardSkeleton
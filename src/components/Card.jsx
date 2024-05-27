import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selecting } from '../reducers/doctors.slice';


const Card = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <div className='rounded-[15px] bg-white'>
            <div className='flex items-center justify-center p-4'>
                <img className='rounded-t-[15px] h-[250px]' src={item.photo} alt="doctor" />
            </div>
            <div className='p-4 flex flex-col gap-1 text-[14px]'>
                <h1 className='text-[20px] font-[400]'>{item.name}</h1>
                <p className='gray-text'>Должность: <span className='dark-text'>{item.role}</span></p>
                <p className='gray-text'>Мед. учреждение: <span className='dark-text'>{item.institution}</span></p>
                <p className='gray-text flex gap-1'>Адрес: <p className='dark-text'>{item.address}</p></p>
                <p className='gray-text'>Специальность: <span className='dark-text'>{item.specialization}</span></p>
                <NavLink to="/detail" onClick={() => dispatch(selecting(item))} className='flex items-center mt-4 primary'>Записаться на прием <IoIosArrowRoundForward className='text-[24px]' /></NavLink>
            </div>
        </div>
    )
}

export default Card
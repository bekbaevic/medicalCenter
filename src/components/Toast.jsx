import React from 'react'
import ToastIcon from "../assets/ToastIcon.png"
import { IoClose } from "react-icons/io5";
import { useSelector } from 'react-redux';

const Toast = ({ setToast, bron, item }) => {
    const { doctors, filteredDoctors, selectedDoctor } = useSelector(state => state.doctors)
    return (
        <div>
            <div className='fixed top-0 left-0 w-full h-screen bg-black/40'></div>
            <div className='w-[400px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg p-5 overflow-hidden'>
                <button onClick={() => setToast(false)} className='absolute top-2 right-3 text-[20px]'><IoClose /></button>
                <h1 className='text-[20px] mb-3'>Запись к врачу</h1>
                <div className='flex flex-col items-center gap-2'>
                    <img src={ToastIcon} className='mt-3' />
                    <h1 className='text-[28px]'>Вы успешно записались!</h1>
                    <p className='text-[12px]'>Желаем вам крепкого здоровья</p>
                </div>
                <div className='flex flex-col items-center text-[12px] py-5'>
                    <p className='gray-text'>Врач: <span className='text-black'>{selectedDoctor.name}</span></p>
                    <p className='gray-text'>Дата: <span className='text-black'>{bron.dt} {bron.mt}, {bron.hh}</span></p>
                </div>
                <button onClick={() => setToast(false)} className='w-full primary-bg text-white py-2 rounded-md text-[12px]'>Закрыть</button>
            </div>

        </div>
    )
}

export default Toast
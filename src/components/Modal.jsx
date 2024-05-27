import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import figure from "../assets/Figure.png"
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { useSelector } from 'react-redux';

const ModalComponent = ({ setOpenModal, bron, item, setToast }) => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [passport, setPassport] = useState('')
    const [description, setDescription] = useState('')
    const { doctors, filteredDoctors, selectedDoctor } = useSelector(state => state.doctors)


    function onSubmitted(e) {
        e.preventDefault()
        const details = {
            name,
            lastName,
            phone,
            passport,
            description,
            doctor: selectedDoctor.name,
            date: bron.dt,
            day: bron.dayt,
            month: bron.mt,
            hh: bron.hh
        }
        console.log(details);
        setOpenModal(false)
        setToast(true)
        return details
    }

    return (
        <div>
            <div className='fixed top-0 left-0 w-full h-screen bg-black/40'></div>
            <div className='w-[400px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg p-5 overflow-hidden'>
                <button onClick={() => setOpenModal(false)} className='absolute top-2 right-3 text-[20px]'><IoClose /></button>
                <h1 className='text-[20px] mb-3'>Запись к врачу</h1>
                <p className='gray-text'>Врач: <span className='text-black text-[14px]'>{selectedDoctor.name}</span></p>
                <div className='flex items-end gap-5 mb-5'>
                    <p className='gray-text'>Дата: <span className='text-black text-[14px]'>{bron.dt} {bron.mt}, {bron.hh}</span></p>
                    <button onClick={() => setOpenModal(false)} className='primary text-[12px]'>Изменить</button>
                </div>
                <form onSubmit={(e) => onSubmitted(e, "")} className='flex flex-col gap-3'>
                    <label className='flex flex-col text-[12px] '>
                        Ваше фамилия
                        <input onChange={(e) => setLastName(e.target.value)} required className='px-2 bg-[#F5F7FA] border border-[#ABBED1] rounded-md h-[32px]' type="text" />
                    </label>
                    <label className='flex flex-col text-[12px] '>
                        Ваше имя
                        <input onChange={(e) => setName(e.target.value)} required className='px-2 bg-[#F5F7FA] border border-[#ABBED1] rounded-md h-[32px]' type="text" />
                    </label>
                    <div className='flex gap-2'>
                        <label className='flex flex-col text-[12px] w-[50%]'>
                            Номер телефона
                            <input onChange={(e) => setPhone(e.target.value)} required className='px-2 bg-[#F5F7FA] border border-[#ABBED1] rounded-md h-[32px]' type="text" />
                        </label>
                        <label className='flex flex-col text-[12px] w-[50%]'>
                            Серия и номер паспорта
                            <input onChange={(e) => setPassport(e.target.value)} required className='px-2 bg-[#F5F7FA] border border-[#ABBED1] rounded-md h-[32px]' type="text" />
                        </label>
                    </div>
                    <label className='flex flex-col text-[12px] '>
                        Что вас беспокоит?
                        <textarea onChange={(e) => setDescription(e.target.value)} className='px-2 bg-[#F5F7FA] border border-[#ABBED1] rounded-md' rows={4}></textarea>
                    </label>
                    <div className='flex items-center justify-between'>
                        <img src={figure} className='h-[30px]' />
                        <button className='border rounded-md p-2'>
                            <TfiReload className='text-[12px]' />
                        </button>
                    </div>
                    <label className='flex flex-col text-[12px] '>
                        Код проверки
                        <input required className='px-2 bg-[#F5F7FA] border border-[#ABBED1] rounded-md h-[32px]' type="number" />
                    </label>
                    <div className='flex items-center text-[12px] justify-between'>
                        <label className='flex items-center gap-2'>
                            <input required type="checkbox" />
                            Я согласен(а) с правилами пользования
                        </label>
                        <button>Очистить</button>
                    </div>
                    <button type='submit' className='w-full primary-bg text-white py-2 rounded-md text-[12px]'>Записаться</button>
                </form>

            </div>
        </div>
    )
}

export default ModalComponent
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import DateComponent from '../components/Date'
import ModalComponent from '../components/Modal'
import { useLocation } from 'react-router-dom'
import Toast from '../components/Toast'

const Detail = ({ item }) => {

    function setDate(i) {
        let d = new Date();
        let timeArray = {
            dt: d.getDate() + i,
            dayt: d.getDay() + i,
            mt: d.getMonth()
        }
        return timeArray

    }
    const [bron, setBron] = useState('')

    const { doctors, filteredDoctors, selectedDoctor } = useSelector(state => state.doctors)
    const [openModal, setOpenModal] = useState(false)
    const [toast, setToast] = useState(false)

    return (
        <div className='px-[10%] gray-bg'>
            <div className='py-5'>
                <Breadcrumb separator={">"}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/' className='text-[#A3A3A3]'>Главная</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='appointment'>Запись к врачу</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>{selectedDoctor.name}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-5 py-5'>
                <div className='h-[300px] bg-white w-full md:w-[50%] flex justify-center rounded-xl'>
                    <img src={selectedDoctor.photo} alt="image" className='h-full rounded-xl object-cover' />
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-center md:text-left text-[32px] font-[400]'>{selectedDoctor.name}</h1>
                    <p className='gray-text text-[14px]'>Должность: <p className='dark-text text-[16px]'>{selectedDoctor.role}</p></p>
                    <p className='gray-text text-[14px]'>Мед. учреждение: <p className='dark-text text-[16px]'>{selectedDoctor.institution}</p></p>
                    <p className='gray-text text-[14px]'>Адрес: <p className='dark-text text-[16px]'>{selectedDoctor.address}</p></p>
                    <p className='gray-text text-[14px]'>Специальность: <p className='dark-text text-[16px]'>{selectedDoctor.specialization}</p></p>
                </div>
            </div>
            <DateComponent i={setDate(0)} bron={bron} setBron={setBron} />
            <DateComponent i={setDate(1)} bron={bron} setBron={setBron} />
            <DateComponent i={setDate(2)} bron={bron} setBron={setBron} />
            {openModal && <ModalComponent setOpenModal={setOpenModal} bron={bron} item={item} setToast={setToast}/>}
            {toast && <Toast setToast={setToast} bron={bron} item={item} />}
            <button onClick={() => (bron && setOpenModal(true))} style={bron.length === 0 ? { backgroundColor: "#42B2FC50", cursor: "no-drop" } : { opacity: 1 }} className=' primary-bg py-[15px] px-[25px] rounded-lg text-white mb-10'>Выберите время приема</button>
            <div>
                <h1 className='text-[32px]'>Другие врачи</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {doctors.slice(0, 3).map(item => (
                        <Card item={item} />
                    ))}
                </div>
                <div className='w-full flex items-center justify-center pb-20 pt-5'>
                    <button className='primary-bg text-white py-3 px-6 rounded-lg'>Показать еще</button>
                </div>
            </div>

        </div>
    )
}

export default Detail
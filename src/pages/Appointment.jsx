import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, filter } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../getData/getData'
import { API } from '../../public/api'
import CardSkeleton from '../components/CardSkeleton'
import Card from '../components/Card'
import { filtering } from '../reducers/doctors.slice'

const Appointment = () => {
  const dispatch = useDispatch()
  const { doctors, filteredDoctors, selectedDoctor } = useSelector(state => state.doctors)
  useEffect(() => { getData(API, dispatch) }, [])
  console.log(filteredDoctors)
  const [filterRole, setFilterRole] = useState('Все')
  return (
    <div className='gray-bg px-[10%]'>
      <div className='py-5'>
        <Breadcrumb separator={">"}>
          <BreadcrumbItem>
            <BreadcrumbLink href='/' className='text-[#A3A3A3]'>Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href='appointment'>Запись к врачу</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div >
      <div className='flex items-center gap-5'>
        <h1 className='text-[40px]'>Врачи</h1>
        <select onChange={(e) => (dispatch(filtering(e.target.value)), setFilterRole(e.target.value))} className='rounded-full h-[40px] px-5 max-w-fit'>
          <option value="Все">Все</option>
          <option value="Инфекционист">Инфекционист</option>
          <option value="Офтальмолог">Офтальмолог</option>
          <option value="Педиатр">Педиатр</option>
          <option value="Онколог">Онколог</option>
          <option value="Гинеколог">Гинеколог</option>
          <option value="Стоматолог">Стоматолог</option>
          <option value="Эндоскопист">Эндоскопист</option>
        </select>
      </div>
      <div className='gray-bg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10'>
        {filteredDoctors.length !== 0 && filterRole ? filteredDoctors.map(item => (
          <Card key={item.name} item={item} />
        )) : filteredDoctors.length === 0 && filterRole !== 'Все' ? <div className='h-screen flex text-[20px] gray-text'><p>У нас нет {filterRole}</p></div>
          : filterRole === "Все" ? doctors.map(item => (
            <Card key={item.name} item={item} />)
          ) :
            [0, 1, 2].map(item => (
              <CardSkeleton key={item} />
            ))
        }
      </div>
      <div className='w-full flex items-center justify-center pb-20'>
        <button className='primary-bg text-white py-3 px-6 rounded-lg'>Показать еще</button>
      </div>
    </div>
  )
}

export default Appointment
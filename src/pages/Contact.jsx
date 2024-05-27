import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
  return (
    <div className='gray-bg px-[10%] h-[100vh]'>
      <div className='py-5'>
        <Breadcrumb separator={">"}>
          <BreadcrumbItem>
            <BreadcrumbLink href='/' className='text-[#A3A3A3]'>Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href='contact'>Контакты</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div >
    </div>
  )
}

export default Contact
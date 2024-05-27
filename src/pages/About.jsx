import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'

const About = () => {
    return (
        <div className='gray-bg px-[10%] h-[100vh]'>
            <div className='py-5'>
                <Breadcrumb separator={">"}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/' className='text-[#A3A3A3]'>Главная</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='about'>Как пользоваться?</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div >
        </div>
    )
}

export default About
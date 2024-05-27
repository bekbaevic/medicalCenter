import React, { useEffect } from 'react'
import Card from '../components/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../getData/getData'
import { API } from '../../public/api'
import CardSkeleton from '../components/CardSkeleton'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

const Home = () => {
    const dispatch = useDispatch()
    const { doctors } = useSelector(state => state.doctors)
    useEffect(() => { getData(API, dispatch) }, [])

    console.log(doctors)
    return (
        <div className='gray-bg px-[10%] h-[100vh]'>
            <div className='py-5'>
                <Breadcrumb separator={">"}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/' className='text-[#A3A3A3]'>Главная</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div >

        </div>
    )
}

export default Home
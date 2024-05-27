import React from 'react'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'
import { MdLanguage } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    return (
        <div className='h-[90px] px-[10%] flex justify-between items-center sticky top-0 bg-white'>
            <Logo color={"white"} />
            <ul className='hidden lg:flex items-center gap-5'>
                <NavLink className='headerMenuItem' to={"/"}>Главная</NavLink>
                <NavLink className='headerMenuItem' to={"about"}>Как пользоваться?</NavLink>
                <NavLink className='headerMenuItem' to={"appointment"}>Запись к врачу</NavLink>
                <NavLink className='headerMenuItem' to={"contact"}>Контакты</NavLink>
            </ul>
            <div className='flex items-center gap-5'>
                <div className='hidden sm:flex items-center gap-5'>
                    <MdLanguage className='text-[20px] primary' />
                    <p className='primary'>Войти</p>
                    <p className='primary border p-2 rounded-md px-5 primary-border'>Регистрация</p>
                </div>
                <button className='lg:hidden primary text-[20px]'><RxHamburgerMenu /></button>
            </div>
        </div>
    )
}

export default Header
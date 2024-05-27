import React from 'react'
import Logo from './Logo'

const Footer = () => {
    return (
        <div className='primary-bg px-[10%] text-white'>
            <div className='flex flex-wrap gap-5 items-center justify-between py-10 border-b'>
                <ul className='flex flex-wrap item-center gap-y-3 gap-x-10 justify-center'>
                    <li>Главная</li>
                    <li>Как пользоваться</li>
                    <li>Политика конфиденциальности</li>
                    <li>Условия использования</li>
                    <li>Контакты</li>
                    <li>Еще</li>
                    <li>Войти</li>
                    <li>Регистрация</li>
                </ul>
            </div>
            <div className='flex flex-col sm:flex-row gap-3 items-center justify-between py-10'>
                <Logo color={"primary"} />
                <p>© 2010-2023 Все права защищены</p>
            </div>
        </div>
    )
}

export default Footer
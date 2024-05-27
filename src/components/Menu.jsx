import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FaAngleDown } from "react-icons/fa";

const MenuComponent = () => {
    return (
        <Menu>
            <MenuButton className='bg-white px-4 h-[40px] rounded-full' as={Button} rightIcon={<FaAngleDown />}>
                Все
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default MenuComponent
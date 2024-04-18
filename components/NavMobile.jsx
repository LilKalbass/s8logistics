'use client'
import React, {useState} from "react";

import {RiMenu2Line, RiHomeFill} from "react-icons/ri";
import {IoCloseOutline, IoCloudOffline} from "react-icons/io5";
import {BiSolidFoodMenu} from "react-icons/bi";
import {FaUsers, FaEnvelope} from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import {Link as ScrollLink} from "react-scroll"
import {Button} from "@/components/ui/button";

const links = [
    {
      icon: <RiHomeFill/>,
      path: '/',
      name: 'Головна',
    },
    {
        icon: <BiSolidFoodMenu/>,
        path: '/services',
        name: 'Послуги',
    },
    {
        icon: <FaUsers/>,
        path: '/about',
        name: 'Про нас',
    },
    {
        icon: <RiHomeFill/>,
        path: '/contacts',
        name: 'Контакти',
    }
]

const NavMobile = ({containerStyles, iconStyles, linkStyles}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className = {`${containerStyles}`}>
            <div
                className = 'cursor-pointer outline-none'
                onClick = {()  => setIsOpen(!isOpen)}
            >
                <RiMenu2Line className = 'text-3xl text-green transition-all duration-200'/>
            </div>
            <aside className = {`${isOpen ? 'right-0' : '-right-full'} bg-secondary fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}
            >
                <div className = 'flex flex-col items-center justify-between h-full pb-20'>
                    <div
                        className = 'cursor-pointer text-4xl text-white absolute w-10 h-10 left-8 top-8 bg-green flex items-center justify-center'
                        onClick = {() => setIsOpen(false)}
                    >
                        <IoCloseOutline/>
                    </div>
                    <Link href='/'>
                        <Image src = '/assets/Logo/Logo1.png' alt = 'logo_img' width={180} height={40}/>
                    </Link>
                    <div className ='flex flex-col gap-y-8 text-green'>
                        {links.map((link, index) => {
                            return (
                                <>
                                    <Link key = {index} href = {link.path} className = 'flex items-center gap-x-3 hover:scale-110' onClick = {()  => setIsOpen(!isOpen)}>
                                        <div className = {`${iconStyles}`}>{link.icon}</div>
                                        <div className = {`${linkStyles}`}>{link.name}</div>
                                    </Link>
                                </>
                            )
                        })}
                    </div>
                    <ScrollLink to = 'reservation' smooth = {true} onClick = {()  => setIsOpen(!isOpen)}>
                        <Button
                            variant = 'default' size = 'md' className=''
                        >Зв'язатися</Button>
                    </ScrollLink>
                </div>
            </aside>
        </div>
    )
}
export default NavMobile

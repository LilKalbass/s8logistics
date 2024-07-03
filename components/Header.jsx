'use client'

import React, {useState, useEffect} from 'react'
import Image from "next/image";
import Link from "next/link";
import {PhoneCall} from "lucide-react"
import {Nav} from "@/components/Nav";
import {Button} from "@/components/ui/button";
import {Link as ScrollLink} from 'react-scroll'
import NavMobile from "@/components/NavMobile";

const Header = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setActive(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);
    return (
<header className = {`${active ? 'bg-secondary py-6 text-white' : 'bg-none py-10 shadow-lg'}
                            fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200 rounded-b-3xl`}>
    <div className = 'container mx-auto'>
        <div className = 'flex items-center justify-between'>
                <Link href='/' className='hover:scale-105'>
                    <Image src = '/assets/Logo/LogoH.png' alt = 'logo_img' width={180} height={40}/>
                </Link>
            <Nav containerStyles='hidden xl:flex gap-x-10 cursor-pointer'
                 linkStyles='capitalize text-lg hover:scale-110 hover:underline decoration-green decoration-[2px] underline-offset-4 hover:text-green transtion-all'
            />
            <div className = 'flex flex-row items-center cursor-pointer gap-x-2'>
                <div className= 'md:border-2 border-green rounded-full p-2 flex items-center hover:scale-105 gap-x-2 transition-all'>
                    <a href={`tel:${+380980248994}`} className = 'hidden md:flex'>+38-098-024-89-94</a>
                    <a href={`tel:${+380980248994}`} className= ''><PhoneCall className = 'size-8 text-green'/> </a>
                </div>
                <ScrollLink to = 'reservation' smooth = {true}>
                    <Button className = 'hidden xl:flex transition-all'
                        variant='default' size= 'sm'
                    >Зв'язатися</Button>
                </ScrollLink>
                <NavMobile containerStyles = 'xl:hidden' iconStyles = 'text-3xl text-white' linkStyles = ' text-xl uppercase'/>
            </div>
        </div>
    </div>
</header>
    )
}
export default Header

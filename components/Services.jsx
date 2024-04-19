'use client'

import Image from "next/image";
import Link from "next/link";
import React from 'react'
import {ArrowRight} from 'lucide-react'

const services = [
    {
        img: '/assets/Services/TrackDev.png',
        title: 'Автоперевезення',
        desc: 'blah-blah blah-blah blah-blah blah-blah blah-blah'
    },
    {
        img: '/assets/Services/AirDev.png',
        title: 'Авіаперевезення',
        desc: 'blah-blah blah-blah blah-blah blah-blah blah-blah'
    },
    {
        img: '/assets/Services/ShipDev.png',
        title: 'Морські Контейнерні Перевезення',
        desc: 'blah-blah blah-blah blah-blah blah-blah blah-blah'
    },
    {
        img: '/assets/Services/Mitnitsya.png',
        title: 'Митне оформлення',
        desc: 'blah-blah blah-blah blah-blah blah-blah blah-blah'
    }
]

const Services = () => {
    return (
        <section className = 'relative py-4 xl:py-24 bg-service bg-no-repeat' id = 'services'>
            <div className = 'container mx-auto'>
                <div className= 'max-w-[570px] mx-auto'>
                    <h2 className = 'mb-2 text-center'>Наші Послуги</h2>
                    <p className= 'py-2'>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus consectetur eius eligendi exercitationem explicabo facilis fugiat ipsam, iusto molestias, nostrum numquam pariatur perferendis perspiciatis quia recusandae soluta tempore velit.</span>
                    </p>
                    <Link href = '/services' className = 'text-green flex justufy-center xl:justify-end items-center mb-8 hover:scale-105 font-semibold'>
                        Усі послуги
                        <ArrowRight className = 'text-3xl'/>
                    </Link>
                </div>
                <div className= 'grid grid-cols-1 gap-x-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4 gap-y-4 xl:gap-y-0'>
                    {services.map((item, index) => {
                        return (
                            <div key={index} className = 'max-w-[270px] bg-white shadow-primary mx-auto xl:mx-0 group'>
                                <div className = 'overflow-hidden'>
                                    <Image src = {item.img} alt = 'qw' width = {300} height = {260}
                                           className = 'group-hover:scale-125 transition-all duration-300'/>
                                </div>
                                <div className = 'pt-[20px] pb-[28px] px-[30px]'>
                                    <Link href = '/'>
                                        <h3 className = 'text-black mb-[14px]'>{item.title}</h3>
                                    </Link>
                                    <div className = 'text-md'>{item.desc}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Services

'use client'

import Image from "next/image";
import {motion} from 'framer-motion';
import Link from "next/link";
import React from 'react'
import {ArrowRight} from 'lucide-react'
import Accordion from "@/components/Accordion";

const services = [
    {
        img: '/assets/Services/TrackDev1.png',
        title: 'Автоперевезення',
        desc: 'blah-blah blah-blah blah-blah blah-blah blah-blah',
        fullTitle: 'Бла блабала',
        fullDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, cumque dolorum expedita iste, iusto, laboriosam laudantium nemo odio quia ratione soluta tempore ullam. Accusamus aliquidlaboriosam nesciunt obcaecati quam sunt Aut iste maiores molestiae nam quidem rerum! Blanditiis cumque debitis dolorem ducimus eos error eumexercitationem illum magnam molestias nam necessitatibus nostrum, odio optio perferendis praesentium quidem suntvoluptas voluptatum.'
    },
    {
        img: '/assets/Services/AirDev1.png',
        title: 'Авіаперевезення',
        desc: 'blah-blah blah-blah blah-blah blah-blah blah-blah',
        fullTitle: 'Бла блабала',
        fullDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, cumque dolorum expedita iste, iusto, laboriosam laudantium nemo odio quia ratione soluta tempore ullam. Accusamus aliquidlaboriosam nesciunt obcaecati quam sunt Aut iste maiores molestiae nam quidem rerum! Blanditiis cumque debitis dolorem ducimus eos error eumexercitationem illum magnam molestias nam necessitatibus nostrum, odio optio perferendis praesentium quidem suntvoluptas voluptatum.'
    },
    {
        img: '/assets/Services/ShipDev1.png',
        title: 'Морські Перевезення',
        desc: 'blah-blah blah-blah blah-blah blah-blah blah-blah',
        fullTitle: 'Бла блабала',
        fullDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, cumque dolorum expedita iste, iusto, laboriosam laudantium nemo odio quia ratione soluta tempore ullam. Accusamus aliquidlaboriosam nesciunt obcaecati quam sunt Aut iste maiores molestiae nam quidem rerum! Blanditiis cumque debitis dolorem ducimus eos error eumexercitationem illum magnam molestias nam necessitatibus nostrum, odio optio perferendis praesentium quidem suntvoluptas voluptatum.'
    },
    {
        img: '/assets/Services/Mitnitsya1.png',
        title: 'Митне оформлення',
        desc: 'blah-blah blah-blah blah-blah blah-blah blah-blah',
        fullTitle: 'Бла блабала',
        fullDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, cumque dolorum expedita iste, iusto, laboriosam laudantium nemo odio quia ratione soluta tempore ullam. Accusamus aliquidlaboriosam nesciunt obcaecati quam sunt Aut iste maiores molestiae nam quidem rerum! Blanditiis cumque debitis dolorem ducimus eos error eumexercitationem illum magnam molestias nam necessitatibus nostrum, odio optio perferendis praesentium quidem suntvoluptas voluptatum.'
    }
]

const ServicesFull = () => {
    return (
        <section className = "min-h-[1150px] lg:pt-40 pt-36  mb-16 lg:mb-40">
            <div className = "container mx-auto">
                <div className = "relative flex flex-col lg:flex-row justify-center  items-center p-6">
                    <div className = "flex justify-center">
                        <h3 className = "uppercase tracking-wide text-center">усі послуги<span className='text-green text-2xl'>:</span></h3>
                    </div>
                    <div className = "lg:absolute lg:right-4 lg:-top-36 ">
                        {/*<Image src = {} width = {700} height = {500} alt = "q"/>*/}
                    </div>
                </div>
                <div className = "grid grid-cols-1  ">
                    {services.map((item, index) => {
                        return (
                                <Accordion accordion = {item} key = {index}/>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
export default ServicesFull

// <section className = 'py-4 xl:py-24'>
//     <div className = 'px-10'>
//     <div className=''>
//     {services.map((item, index) => {
//             return (
//                 <div key={index} className = 'flex items-center'>
//                     <div className = 'flex flex-col py-4'>
//                         <Image src={item.img} alt='item_img' height={120} width={320}/>
//                     </div>
//                     <div className='flex px-4 w-full justify-center'>
//                         <div className = 'min-w-[800px]'>
//                             <h3>{item.title}</h3>
//                             <p>{item.desc}</p>
//                         </div>
//                     </div>
//                 </div>
//             )
//         })}
// </div>
// </div>
// </section>
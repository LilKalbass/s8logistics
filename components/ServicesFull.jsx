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
        <section className = "min-h-[1150px] rounded-bl-[100%] rounded-tr-[10%] bg-no-repeat lg:pt-40 lg:pb-24 mb-16 lg:mb-40">
            <div className = "container mx-auto">
                <div className = "relative flex flex-col lg:flex-row justify-center lg:justify-start items-center pt-8 pb-16 lg:pb-24">
                    <div className = "lg:max-w-[45%]">
                        <h3 className = "h3 uppercase tracking-wide">Текст</h3>
                        <h2 className = "h2 mb-6 text-black">Бла-Бла</h2>
                    </div>
                    <div className = "lg:absolute lg:right-4 lg:-top-36 ">
                        {/*<Image src = {faqData.boyImg} width = {700} height = {500} alt = "q"/>*/}
                    </div>
                </div>
                <div className = "grid grid-cols-1 lg:grid-cols-1 ">
                    {services.map((item, index) => {
                        return (
                            <div className = 'grid grid-cols-3 py-4'>
                                <div className = ''>
                                    <Image src={item.img} alt='qwe' width={400} height={200}/>
                                </div>
                                <div className='relative grid col-span-2'>
                                    <Accordion accordion = {item} key = {index}/>
                                </div>
                            </div>
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

'use client'

import Image from 'next/image'
import Link from 'next/link'

import {motion} from "framer-motion";
import {fadeIn} from "@/variants";
import {ArrowUp} from "lucide-react";
import {PiArrowUpBold} from "react-icons/pi";



const Footer = () => {
    return (
        <motion.footer
            variants = {fadeIn('up', 0.2)}
            initial = 'hidden'
            whileInView = {'show'}
            viewport = {{once: false, amount: 0}}
            className = 'bg-footer bg-cover bg-no-repeat text-white pt-16 w-full transition-all duration-200 rounded-t-3xl' //absolute left-0 right-0
        >
            <div className = 'container mx-auto'>

                <div className = 'flex flex-col justify-between items-center xl:items-start text-center xl:flex-row'>
                    <div className = 'w-[300px] mb-8 xl:mb-0 flex items-center justify-center'>
                        <Link href = '#home' className='flex items-center hover:scale-110 transition-all'>
                            <Image src = '/assets/Logo/LogoF.png' alt = 'logo_img' width = {200} height = {66}/>
                        </Link>
                    </div>
                    <div className = 'flex-1 grid  grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16'>
                        <div>
                            <h4 className = 'font-semibold mb-4'>Послуги :</h4>
                            <ul className = 'flex flex-col gap-y-6 text-sm'>
                                <li>
                                    <Link href = '/services'>
                                        Міждународні наземні перевезення
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/services'>
                                        Авіаперевезення
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/services'>
                                        Митне оформлення вантажу
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/services'>
                                        Морські перевезення
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className=''>
                            <h4 className = 'font-semibold mb-5'>Соц.мережі :</h4>
                            <ul className = 'flex flex-col gap-y-6 text-sm'>
                                <li>
                                    <Link href = '/'>
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/'>
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/'>
                                        TripAdvisor
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Link href = '#home' className='flex items-center  transition-all'>
                    <PiArrowUpBold className='text-[36px] text-black  transition-all  absolute z-50 left-10 hover:scale-125'/>
                </Link>
                <div className = 'border-t py-4 border-white/10'>
                    <p className = 'text-white/60 text-center text-sm'>Copyright &copy; S8 Logistics 2024</p>
                </div>
            </div>
        </motion.footer>
    )
}
export default Footer

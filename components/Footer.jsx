
'use client'

import Image from 'next/image'
import Link from 'next/link'

import {motion} from "framer-motion";
import {fadeIn} from "@/variants";

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
                    <div className = 'w-[300px] mb-8 xl:mb-0 flex justify-center'>
                        <Link href = '/'>
                            <Image src = '/assets/Logo/LogoF.png' alt = 'logo_img' width = {200} height = {66}/>
                        </Link>
                    </div>
                    <div className = 'flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16'>
                        <div>
                            <h4 className = 'font-semibold mb-5'>FAQ :</h4>
                            <ul className = 'flex flex-col gap-y-6 text-sm'>
                                <li>
                                    <Link href = '/'>
                                        Бла-бла
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/'>
                                        Бла-бла Бла-бла
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/'>
                                        Бла-бла Бла-бла Бла-бла
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/'>
                                        Бла-бла Бла-бла Бла-бла Бла-бла Бла-бла
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className = 'font-semibold mb-5'>Услугі(напркилакд) :</h4>
                            <ul className = 'flex flex-col gap-y-6 text-sm'>
                                <li>
                                    <Link href = '/'>
                                        ЙЦВТОЦРУЛДАУЦДЖЄЮЦдьульуло
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/'>
                                        ЙУВДЖйлцубацацсу
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/'>
                                        IDK
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/'>
                                        Whatever
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
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
                                <li>
                                    <Link href = '/'>
                                        Twitter(ak dead)
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className = 'border-t py-4 border-white/10'>
                    <p className = 'text-white/60 text-center text-sm'>Copyright &copy; S8 Logistics 2024</p>
                </div>
            </div>
        </motion.footer>
    )
}
export default Footer

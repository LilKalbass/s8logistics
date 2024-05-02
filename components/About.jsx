'use client'

import Image from "next/image";

import {motion} from "framer-motion";
import {fadeIn} from "@/variants";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const About = ({moreBut}) => {
    return (
        <section className = 'grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 xl:p-0 items-center' id ='about'>
            <motion.div
                variants = {fadeIn('right', 0.2)}
                initial = 'hidden'
                whileInView = {'show'}
                viewport = {{once: false, amount: 0.2}}
                className = 'xl:pl-[98px] flex flex-col text-center items-center xl:mb-44'
            >
                <h1 className = 'mb-9 text-black'>Про <span className = 'text-green'>S</span><span className = 'text-secondary'>8</span> Logistics</h1>
                <p className = 'mb-4'>
                    Компанія S8 Logistics є вашим надійним партнером у сфері логістики.
                </p>
                <p className = 'mb-10'>
                    Ми спеціалізуємося на міжнародних перевезеннях та митному оформленні, надаючи професійні послуги з уважністю до деталей. Наша команда забезпечує ефективність і надійність у кожному етапі процесу, гарантуючи задоволення потреб наших клієнтів.
                </p>
                <Link href='/about'><Button className = {moreBut} >Детальніше</Button></Link>
            </motion.div>
            <motion.div
                variants = {fadeIn('left', 0.4)}
                initial = 'hidden'
                whileInView = {'show'}
                viewport = {{once: false, amount: 0.2}}
            >
                <Image src = '/assets/About.png' alt = 'ab' width = {705} height = {771} className = 'hidden xl:flex rounded-b-3xl'/>
            </motion.div>
        </section>
    )
}
export default About

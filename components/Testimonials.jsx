'use client'
import React from 'react'
import Slider from '../components/Slider';
import {motion} from 'framer-motion';
import {fadeIn} from "@/variants";

const clients = [
    {
        "message": "Yes, you will need to have the land owner sign the permit application as the Permittee, and you sign the permit as the Applicant or Agent for the Permittee.",
        "image": "/assets/avatar1.png",
        "name": "Камалія Шаїзх"
    },
    {
        "message": "From most barricade or traffic control companies located in the phone book.",
        "image": "/assets/avatar1.png",
        "name": "Івана Купала"
    },
    {
        "message": "An A-Line, or access restriction deed is a property right that has been obtained by CDOT for the sole purpose of prohibiting direct",
        "image": "/assets/avatar1.png",
        "name": "Дан Балан"
    },
    {
        "message": "Yes, you will need to have the land owner sign the permit application as the Permittee, and you sign the permit as the Applicant or Agent for the Permittee.",
        "image": "/assets/avatar1.png",
        "name": "Петро Іващук"
    },
    {
        "message": "From most barricade or traffic control companies located in the phone book.",
        "image": "/assets/avatar1.png",
        "name": "Данило Кіт"
    },
    {
        "message": "An A-Line, or access restriction deed is a property right that has been obtained by CDOT for the sole purpose of prohibiting direct",
        "image": "/assets/avatar1.png",
        "name": "Аліса Шмаркля"
    }
]
const Testimonials = () => {
    return (
        <section className = "relative min-h-[480px]" id='testimonials'>
            <div className = "container mx-auto">
                <motion.div             variants = {fadeIn('up', 0.2)}
                                        initial = 'hidden'
                                        whileInView = {'show'}
                                        viewport = {{once: false, amount: 0.2}}
                            className = "flex flex-col lg:flex-row">
                    <motion.div variants = {fadeIn('up', 0.2)}
                                initial = 'hidden'
                                whileInView = {'show'}
                                viewport = {{once: false, amount: 0.2}} className = "lg:w-[30%] py-4">
                        <h1 className= 'text-green pl-8 xl:pl-0'>Відгуки</h1>
                        <h2 className = "h2 mb-6 text-black pt-12 text-center">Наші Задоволені Клієнти<span className = 'text-green'>:</span></h2>
                    </motion.div>
                    <motion.div             variants = {fadeIn('up', 0.2)}
                                            initial = 'hidden'
                                            whileInView = {'show'}
                                            viewport = {{once: false, amount: 0.2}} className = "lg:w-[60%] lg:absolute right-0 pt-10">
                        <Slider clients = {clients}/>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
export default Testimonials

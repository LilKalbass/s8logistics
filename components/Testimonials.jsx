'use client'
import React from 'react'
import Slider from '../components/Slider';
import {motion} from 'framer-motion';
import {fadeIn} from "@/variants";

const clients = [
    {
        "message": "Просто хочу сказати велике дякую S8 Logistics за доставку мого вантажу. Ви зробили все швидко і без надокучливих перешкод.",
        "image": "/assets/Testimonials/avatar1.jpg",
        "name": "Камалія",
        "surname": 'Шес'
    },
    {
        "message": "Мені все сподобалось, зробили все, що треба, без зайвих слів.",
        "image": "/assets/Testimonials/avatar2.jpg",
        "name": "Іван",
        "surname": 'Філімонов'
    },
    {
        "message": "S8 Logistics - надійна компанія з логістики. Їхні послуги простою зрозумілі та дійсно ефективні.",
        "image": "/assets/Testimonials/avatar3.jpg",
        "name": "Ден",
        "surname": 'Патрік'
    },
    {
        "message": "Доставка пройшла гладко. Ніяких проблем, просто швидкий і професійний сервіс.",
        "image": "/assets/Testimonials/avatar4.png",
        "name": "Петро",
        "surname": 'Іващук'
    },
    {
        "message": "Моя перша спроба працювати з логістичною компанією була дуже приємною завдяки S8 Logistics. Вони все зробили добре.",
        "image": "/assets/Testimonials/avatar5.jpg",
        "name": 'Данило',
        "surname": 'Кіт'
    },
    {
        "message": "Просто хочу сказати велике спасибі S8 Logistics за їхню роботу. Все було добре організовано і ефективно.",
        "image": "/assets/Testimonials/avatar6.jpg",
        "name": "Аліса",
        "surname": 'Порденко'
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
                            className = "flex flex-col lg:flex-row justify-between">
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

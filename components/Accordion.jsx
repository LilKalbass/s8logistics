'use client'
import React, {useState} from 'react';
import {motion} from 'framer-motion';

import {HiOutlinePlus, HiOutlineMinus, HiArrowRight, HiArrowLeft, HiArrowUp, HiArrowDown} from 'react-icons/hi';
import Image from "next/image";
import {fadeIn} from "@/variants";

const Accordion = ({accordion}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const handleOnFocus = () => {
        setIsFocused(true);
    };
    return (
        <div className = "flex py-5 justify-center xl:flex-row flex-col items-center">
            <div onClick={() => {setIsOpen(!isOpen)}} className = 'cursor-pointer hover:scale-105 transition-all duration-300'>
                <div className= 'flex items-center xl:flex-row flex-col hover:ml-4 transition-all hover:text-green'>
                    <motion.div variants = {fadeIn('down', 0.2)}
                                initial = 'hidden'
                                whileInView = {'show'}
                                viewport = {{once: false, amount: 0}}>
                        <Image className='rounded-xl' src={accordion.img} alt='qwe' width={300} height={150}/>
                    </motion.div>
                    <motion.h3 variants = {fadeIn('down', 0.4)}
                               initial = 'hidden'
                               whileInView = {'show'}
                               viewport = {{once: false, amount: 0}} className='text-center py-2 xl:py-0 xl:hidden'>{accordion.title}</motion.h3>
                    <div className='transition-all duration-700 '>
                        {isOpen ? ('') : (<motion.div  variants = {fadeIn('right', 0.6)}
                                                       initial = 'hidden'
                                                       whileInView = {'show'}
                                                       viewport = {{once: false, amount: 0}}><HiArrowRight className='text-3xl hidden xl:flex transition-all'/></motion.div>)}
                        {isOpen ? (<motion.div variants = {fadeIn('down', 0.6)}
                                               initial = 'hidden'
                                               whileInView = {'show'}
                                               viewport = {{once: false, amount: 0}}><HiArrowUp className='text-2xl xl:hidden transition-all'/></motion.div>) : (<motion.div variants = {fadeIn('down', 0.6)}
                                                      initial = 'hidden'
                                                      whileInView = {'show'}
                                                      viewport = {{once: false, amount: 0}}><HiArrowDown className='text-2xl xl:hidden transition-all'/></motion.div>)}
                    </div>
                </div>
                <motion.h3 variants = {fadeIn('right', 0.4)}
                           initial = 'hidden'
                           whileInView = {'show'}
                           viewport = {{once: false, amount: 0}} className='text-center py-2 xl:py-0 hidden xl:flex'>{accordion.title}</motion.h3>
            </div>
        {/*    <div className = "transition-all duration-500">*/}
        {/*    {isOpen*/}
        {/*        ? (<motion.div initial = "initial" animate = {{rotate: 180}}><HiOutlineMinus className = "text-2xl "/></motion.div>)*/}
        {/*        : (<motion.div><HiOutlinePlus initial = "initial" animate = {{rotate: 0}} className = "text-2xl text-accent"/></motion.div>)}*/}
        {/*</div>*/}
            <div className = {`${isOpen ? 'min-w-[250px]  rounded-xl drop-shadow-primary px-4' : 'max-h-0'}
         overflow-hidden flex items-center lg:max-w-[750px] max-w-[150px] transition-all`}>
                <p className = "lead leading-[30px] text-black">{accordion.fullDesc}</p>
            </div>
        </div>
    );
};

export default Accordion;

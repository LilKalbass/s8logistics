'use client'
import React, {useState} from 'react';
import {motion} from 'framer-motion';

import {HiOutlinePlus, HiOutlineMinus} from 'react-icons/hi';

const Accordion = ({accordion}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div  className = "min-w-[450px]">
            <div className = "drop-shadow-primary bg-white/10 text-black cursor-pointer rounded-xl h-[90px] px-12 flex items-center"
                 onClick={() => {setIsOpen(!isOpen)}}>
                <div className = "w-full flex justify-left items-center">
                    <h3 className = "lead font-medium leading-snug max-w-[400px] left-0 absolute hidden xl:flex">{accordion.title}</h3>
                    <div className = "transition-all duration-500">
                        {isOpen
                            ? (<div ><HiOutlineMinus className = "text-2xl "/></div>)
                            : (<div className=''><HiOutlinePlus className = "text-2xl text-accent"/></div>)}
                    </div>
                </div>
            </div>
            <div className = {`${isOpen ? 'max-h-[160px] p-8 bg-white/10 rounded-xl drop-shadow-primary my-2' : 'max-h-0'}
        h-[160px] overflow-hidden transition-all flex items-center max-w-[250px]`}>
                <p className = "lead leading-[30px] text-black">{accordion.fullDesc}</p>
            </div>
        </div>
    );
};

export default Accordion;

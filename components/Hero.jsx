'use client'

import React from 'react'
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Link as ScrollLink} from "react-scroll"


const Hero = () => {
    return (
        <section className= 'bg-hero bg-no-repeat xl:bg-cover relative xl:h-[1098px] py-40 pb-32 xl:py-0' id='home'>
            <div className= 'container mx-auto'>
                <div className='flex items-center xl:h-[960px]'>
                    <div className='w-full xl:max-w-[560px] text-center xl:text-left'>
                        <h1 className='text-secondary xl:mb-0 '><span className= 'text-green'>Перевозки,</span><br/>ще не були такими легкими</h1>
                        <p className = 'text-grey font-semibold xl:mb-10 mb-8'>
                            Авіа та Авто доставка, морськи перевезення, доставимо зі Сполучених Штатів Америки, Європи, Турції та Китаю.
                            Допомогаємо з митним оформленням, FLC/TLC <br/>Дотримуємося Максимально продуманого підходу до кожного клієнта, щоб швидко та надійно надавати послуги з митного оформлення, логістики
                        </p>
                        <ScrollLink to = 'reservation' smooth = {true}>
                            <Button
                                variant= 'default'
                                size= 'md'
                            >Зв'язатися
                            </Button>
                        </ScrollLink>
                        {/*<div className = 'hidden xl:flex xl:absolute xl:top-[432px] rotate-12 xl:right-[-32px]'>*/}
                        {/*    <Image src='/assets/HeroImgRightMid.png' alt='hero_img' width={500} height={200} className='rounded-tl-3xl rounded-bl-3xl'/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            {/*<div className = 'hidden xl:flex xl:relative xl:-top-40 left-[-4px]'>*/}
            {/*    <Image src='/assets/HeroImgLeftBot.png' alt='hero_img' width={500} height={200} className= 'rounded-3xl rounded-tl-none'/>*/}
            {/*</div>*/}
        </section>
    )
}
export default Hero

'use client'
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({clients}) => {
    return (
        <Swiper slidesPerView = {2} spaceBetween = {20} slidesOffsetBefore = {20} grabCursor = {true} modules = {[]} className = "w-full xl:h-[440px] h-[500px]"
        breakpoints={{
            300: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }}>
            {clients.map((client, id) => {
                return (
                    <SwiperSlide key = {id}>
                        <div className = "flex flex-col justify-between items-center bg-secondary/10 h-[420px] rounded-2xl xl:px-[48px] px-4 py-9 ph:py-4">
                            <p className = "text-black xl:font-light leading-[30px] ph:leading-[22px] text-[16px] text-center xl:text-lg">{client.message}</p>
                            <div className = "flex items-center md:gap-x-5 ph:gap-x-0 flex-col xl:flex-row justify-end gap-y-2">
                                <Image src = {client.image} width = {60} height = {60} alt = "q" className='rounded-full pb-1'/>
                                <span className = "font-semibold text-black text-center leading-none ">{client.name}</span>
                                <span className = "font-semibold text-black text-center leading-none ">{client.surname}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Slider;

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
                        <div className = "flex flex-col justify-between items-center bg-secondary/10 h-[420px] rounded-2xl xl:px-[48px] px-8 py-9">
                            <p className = "text-black font-light leading-[30px] text-[14px] xl:text-lg">{client.message}</p>
                            <div className = "flex items-center gap-x-5 xl:flex-row flex-col justify-center">
                                <Image src = {client.image} width = {60} height = {60} alt = "q"/>
                                <span className = "font-semibold text-black text-center">{client.name}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Slider;

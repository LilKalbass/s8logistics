'use client'

import Image from 'next/image'
import {useMediaQuery} from "react-responsive";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import {Icon} from 'leaflet'
import {AtSign, PhoneOutgoing, MapPinned} from 'lucide-react'

import 'leaflet/dist/leaflet.css'

import {motion} from "framer-motion";
import {fadeIn} from "@/variants";
import React from "react";

const markers = [
    {
        position: [46.502832638513155, 30.721903487898263],
        title: 'HEd',
        subtle: 'bla-blah',
        image: '/assets/Testimonials2.png'
    },
]

const customIcon = new Icon(
    {
        iconUrl: '/assets/pin-solid.svg',
        iconSize: [40,40]
    }
)

const Contact = () => {
    const isMobile = useMediaQuery(
        {
            query: '(max-width: 768px)'
        }
    )
    return (
        <motion.section
            variants = {fadeIn('up', 0.2)}
            initial = 'hidden'
            whileInView = {'show'}
            viewport = {{once: false, amount: 0.2}}
            className = 'relative'
            id = 'contacts'
            //xl:after:w-full xl:after:h-[240px] xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80
            //                         xl:after:to-white/20 xl:after:absolute xl:after:top-0 xl:after:z-20
        >
            <div className= 'xl:grid xl:grid-cols-3 px-2 xl:px-0'>
                <div className = 'flex flex-col py-10'>
                    <h1 className= 'pl-8 mb-10'>Контакти<span className = 'text-green'>:</span></h1>
                    <div className= 'xl:py-4 py-2 flex items-center'>
                        <PhoneOutgoing className = 'size-[44px] text-green mr-1' strokeWidth={2.25}/>
                        <h3 className = 'text-secondary font-bold cursor-default'>Телефон<span className = 'text-green'>:</span></h3>
                        <a href={`tel:${+380980248994}`} className = 'text-[18px] px-2 mt-0.5 text-grey'>+(098)-024-89-94</a>
                    </div>
                    <div className= 'xl:py-4 py-2 flex items-center'>
                        <AtSign className = 'size-[44px] text-green mr-1' strokeWidth={2.25}/>
                        <h3 className = 'text-secondary font-bold cursor-default'>Пошта<span className = 'text-green'>:</span></h3>
                        <p className= 'text-[18px] px-2 mt-0.5 text-grey'>sales@s8logistics.com.ua<span className = 'text-green'>.</span>com</p>
                    </div>
                    <div className= 'xl:py-4 py-2 flex items-center'>
                        <MapPinned className= 'size-[44px] text-green mr-1' strokeWidth={2.25}/>
                        <h3 className = 'text-secondary font-bold cursor-default'>Адреса<span className = 'text-green'>:</span></h3>
                        <p className= 'px-2 text-[18px] mt-0.5 text-grey'>Одеса<span className = 'text-green'>,</span> вул<span className = 'text-green'>.</span>Церковна 19</p>
                    </div>
                </div>
                <MapContainer
                    center = {[46.47960683091236, 30.73817966394077]}
                    zoom = {isMobile ? 10 : 12}
                    className = {`${isMobile ? 'h-[300px]' : 'h-[600px]'} z-10 col-span-2  rounded-3xl`}
                    zoomControl = {false}
                >
                    <TileLayer
                        attribution = '&copy; <a href = "https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
                    />
                    {markers.map((marker, index) => {
                        return (
                            <Marker key = {index} position = {marker.position} icon = {customIcon}>
                                {/*<Popup>*/}
                                {/*    <div className = 'flex gap-x-[30px]'>*/}
                                {/*        <div className = 'flex-1'>*/}
                                {/*            <h3>{marker.title}</h3>*/}
                                {/*            <p className = 'leading-snug'>{marker.subtle}</p>*/}
                                {/*        </div>*/}
                                {/*        <div className = 'flex-1'>*/}
                                {/*            <Image src = {marker.image} alt = 'img' width = {130} height = {160}/>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</Popup>*/}
                            </Marker>
                        )
                    })}
                </MapContainer>
            </div>
        </motion.section>
    )
}
export default Contact
'use client'

import React from 'react'
import Link from 'next/link'
import ServicesFull from "@/components/ServicesFull";
import ContactForm from "@/components/ContactForm";
const ServiceList = () => {
    return (
        <section className= ''>
            <ServicesFull/>
            <div className='container mx-auto'>
                <ContactForm/>
            </div>
        </section>
    )
}
export default ServiceList

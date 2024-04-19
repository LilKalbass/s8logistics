'use client'

import React from 'react'
import Link from 'next/link'
import ServicesFull from "@/components/ServicesFull";
const ServiceList = () => {
    return (
        <section className= ''>
            <ServicesFull/>
            <h2 className= 'mt-20'>
                <Link href="/" className = 'underline'>Back to home</Link>
            </h2>
        </section>
    )
}
export default ServiceList

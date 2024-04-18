'use client'

import React from 'react'
import Link from 'next/link'
import Services from "@/components/Services";
const ServiceList = () => {
    return (
        <div className= 'flex items-center justify-center mt-32 flex-col'>
            <h1>Service Page</h1>
            <Services/>
            <h2 className= 'mt-20'>
                <Link href="/" className = 'underline'>Back to home</Link>
            </h2>
        </div>
    )
}
export default ServiceList

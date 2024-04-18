'use client'

import React from 'react'
import Link from 'next/link'
import Contact from "@/components/Contact";
const Contacts = () => {
    return (
        <div className= 'flex items-center justify-center mt-32 flex-col'>
            <h1>Contacts Page</h1>
            <Contact/>
            <h2 className= 'mt-20'>
                <Link href="/" className = 'underline'>Back to Home</Link>
            </h2>
        </div>
    )
}
export default Contacts

'use client'

import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Contactss = dynamic(() => import("@/components/Contact"), { ssr: false });

const Contacts = () => {
    return (
        <div className= 'flex items-center justify-center mt-32 flex-col'>
            <h1>Contacts Page</h1>
            <Contactss/>
            <h2 className= 'mt-20'>
                <Link href="/" className = 'underline'>Back to Home</Link>
            </h2>
        </div>
    )
}
export default Contacts

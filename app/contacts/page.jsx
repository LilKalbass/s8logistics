'use client'

import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Contactss = dynamic(() => import("@/components/Contact"), { ssr: false });

const Contacts = () => {
    return (
        <section className = 'flex items-center justify-center mt-40 flex-col'>
            <Contactss/>
        </section>
    )
}
export default Contacts

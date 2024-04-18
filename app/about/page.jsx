'use client'

import React from 'react'
import Link from 'next/link'
import About from "@/components/About";
const Aboutt = () => {
    return (
        <div className= 'flex items-center justify-center mt-32 flex-col'>
            <h1>About Page</h1>
            <About/>
            <h2 className= 'mt-20'>
                <Link href="/" className = 'underline'>Back to home</Link>
            </h2>
        </div>
    )
}
export default Aboutt

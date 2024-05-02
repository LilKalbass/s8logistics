'use client'

import React from 'react'
import Link from 'next/link'
import About from "@/components/About";
const Aboutt = () => {
    return (
<div className='mx-auto max-w-[1400px]'>
    <div className= 'flex items-center justify-center mt-32 flex-col'>
        <About moreBut='hidden'/>
    </div>
</div>
    )
}
export default Aboutt

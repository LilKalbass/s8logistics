'use client'

import React from 'react'
import Link from 'next/link'

const links = [
    {
        path: '/',
        name: 'Головна',
    },
    {
        path: 'services',
        name: 'Послуги',
        offset: -50
    },
    {
        path: 'contacts',
        name: 'Контакти',
        offset: -150
    },
    {
        path: '/about',
        name: 'Про нас',
    },
    // {
    //     path: 'testimonials',
    //     name: 'Відгуки',
    //     offset: -200
    // },
]
export const Nav = ({containerStyles, linkStyles}) => {
    return (
        <nav className = {`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <Link
                        key = {index}
                        href = {link.path}
                        className = {`${linkStyles}`}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
}

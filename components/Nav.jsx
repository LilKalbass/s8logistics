'use client'

import React from 'react'
import {Link} from 'react-scroll'

const links = [
    {
        path: 'home',
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
        path: 'about',
        name: 'Про нас',
    },
    {
        path: 'testimonials',
        name: 'Відгуки',
        offset: -200
    },
]
export const Nav = ({containerStyles, linkStyles}) => {
    return (
        <nav className = {`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <Link
                        key = {index}
                        to = {link.path}
                        spy = {true}
                        smooth = {true}
                        offset = {link.offset}
                        duration = {500}
                        className = {`${linkStyles}`}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
}

import React from 'react';
import { links } from '../data';

const Navbar = () => {
    return (
        <nav className='bg-emerald-100'>
            <div className='mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
                <h2 className='text-3xl font-bold'>Esra<span className='text-emerald-600'>Elif</span></h2>
                <div className='flex gap-x-3'>
                    {links.map((link) => {
                        const { id, href, text } = link
                        return <a href={href} key={id}
                            className='text-emerald-600 capitalize text-lg tracking-wide duration-300 hover:text-emerald-500'>{text}</a>
                    })}

                </div>
            </div>
            navbar
        </nav>
    );
}

export default Navbar;

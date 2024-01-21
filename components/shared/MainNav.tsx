import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';




const MainNav = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    const listenScrollEvent = () => {
        setIsScrolled(window.scrollY > 15);
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <nav className={`container hidden xl:flex justify-between border border-[#D0D5DD] transition-all duration-500 rounded-full bg-[#F2F4F7] py-3 ${isScrolled ? 'shadow-xl' : ''} `}>
            <div className='pr-10 flex items-center'>
                <Image
                    src='/logo.svg'
                    alt='logo'
                    width={150}
                    height={30}
                />
            </div>

            <div className='hidden md:flex items-center gap-4 text-muted-foreground font-semibold'>
                <Link href='/' className='flex gap-3'>
                    <p>Products</p>
                    <ChevronDown />
                </Link>
                <Link href='/' className='flex gap-3'>
                    <p>Solutions</p>
                    <ChevronDown />
                </Link>
                <Link href='/' className='flex gap-3'>
                    <p>Resources</p>
                    <ChevronDown />
                </Link>
                <Link href='/' className='flex gap-3'>
                    <p>Pricing</p>
                    <ChevronDown />
                </Link>
            </div>

            <div className='hidden md:flex items-center gap-4'>
                <Button asChild size={'lg'} variant={'outline'} >
                    <Link href='/'>Talk to sales</Link>
                </Button>
                <Button asChild size={'lg'}>
                    <Link href='/'>Sign up for free</Link>
                </Button>
            </div>
        </nav>
    )
}

export default MainNav
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const MobileNav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const listenScrollEvent = () => {
        setIsScrolled(window.scrollY > 15);
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    const handleButtonClick = () => {
        setExpanded(!expanded);
    };

    return (
        <nav className={`container overflow-hidden flex xl:hidden  flex-col justify-between border border-[#D0D5DD]  rounded-full bg-[#F2F4F7] py-2 ${expanded ? 'rounded-lg' : ''}  ${isScrolled ? 'shadow-xl' : ''}`}>
            <div className='flex items-center w-full justify-between'>
                <Image
                    src='/logo.svg'
                    alt='logo'
                    width={100}
                    height={30}
                />

                <button onClick={handleButtonClick} className='border-none bg-transparent text-muted-foreground'><Menu size={30} /></button>
            </div>


            <div className={`items-center py-5 gap-4 text-muted-foreground font-semibold ${expanded ? 'flex flex-col' : 'hidden'}`} >
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
                <Button asChild size={'lg'} variant={'outline'} className='bg-white border  border-[#98A2B3] text-foreground' >
                    <Link href='/'>Talk to sales</Link>
                </Button>
                <Button asChild size={'lg'}>
                    <Link href='/'>Sign up for free</Link>
                </Button>
            </div>
        </nav>
    );
};

export default MobileNav;

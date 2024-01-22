import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import { ChevronDown, SlashIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"





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


            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="flex items-center justify-center">
                                <div className="p-8 rounded-lg max-w-lg mx-auto">
                                    <div className="flex gap-8">
                                        <div className="bg-muted p-4 rounded-lg flex flex-col items-center justify-center">
                                            <h2 className="font-bold text-lg mt-4">Built with shadcn/ui</h2>
                                            <p className="text-muted-forefround text-sm mt-2">
                                                Beautifully designed components built with Radix UI and Tailwind CSS.
                                            </p>
                                        </div>
                                        <div className="flex flex-col space-y-4">
                                            <div>
                                                <h3 className="font-semibold text-lg">Introduction</h3>
                                                <p className="text-muted-forefround text-sm mt-1">Re-usable components built using Radix UI and Tailwind CSS.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg">Installation</h3>
                                                <p className="text-muted-forefround text-sm mt-1">How to install dependencies and structure your app.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg">Typography</h3>
                                                <p className="text-muted-forefround text-sm mt-1">Styles for headings, paragraphs, lists...etc</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="flex items-center justify-center">
                                <div className="p-8 rounded-lg max-w-lg mx-auto">
                                    <div className="flex gap-8">
                                        <div className="bg-muted p-4 rounded-lg flex flex-col items-center justify-center">
                                            <h2 className="font-bold text-lg mt-4">Built with shadcn/ui</h2>
                                            <p className="text-muted-forefround text-sm mt-2">
                                                Beautifully designed components built with Radix UI and Tailwind CSS.
                                            </p>
                                        </div>
                                        <div className="flex flex-col space-y-4">
                                            <div>
                                                <h3 className="font-semibold text-lg">Introduction</h3>
                                                <p className="text-muted-forefround text-sm mt-1">Re-usable components built using Radix UI and Tailwind CSS.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg">Installation</h3>
                                                <p className="text-muted-forefround text-sm mt-1">How to install dependencies and structure your app.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg">Typography</h3>
                                                <p className="text-muted-forefround text-sm mt-1">Styles for headings, paragraphs, lists...etc</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="flex items-center justify-center">
                                <div className="p-8 rounded-lg max-w-lg mx-auto">
                                    <div className="flex gap-8">
                                        <div className="bg-muted p-4 rounded-lg flex flex-col items-center justify-center">
                                            <h2 className="font-bold text-lg mt-4">Built with shadcn/ui</h2>
                                            <p className="text-muted-forefround text-sm mt-2">
                                                Beautifully designed components built with Radix UI and Tailwind CSS.
                                            </p>
                                        </div>
                                        <div className="flex flex-col space-y-4">
                                            <div>
                                                <h3 className="font-semibold text-lg">Introduction</h3>
                                                <p className="text-muted-forefround text-sm mt-1">Re-usable components built using Radix UI and Tailwind CSS.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg">Installation</h3>
                                                <p className="text-muted-forefround text-sm mt-1">How to install dependencies and structure your app.</p>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg">Typography</h3>
                                                <p className="text-muted-forefround text-sm mt-1">Styles for headings, paragraphs, lists...etc</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>


            {/* <div className='hidden md:flex items-center gap-4 text-muted-foreground font-semibold'>
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
            </div> */}

            <div className='hidden md:flex items-center gap-4'>
                <Button asChild size={'lg'} variant={'outline'} className='bg-white border  border-[#98A2B3] text-foreground' >
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
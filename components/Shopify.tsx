import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
import Sarah from '@/public/sarah.jpg'


const Shopify = () => {
    return (
        <div className='container flex flex-col xl:flex-row'>
            <div>
                <span className='flex flex-col gap-8'>
                    <Image
                        alt="Shopify logo"
                        className="h-6 sm:h-8"
                        height="32"
                        src="/icons/Shopify2.svg"
                        width="112"
                    />
                    <span className='flex'>

                        <StarIcon size={20} fill='#FDB022' className="text-[#FDB022]" />
                        <StarIcon size={20} fill='#FDB022' className="text-[#FDB022]" />
                        <StarIcon size={20} fill='#FDB022' className="text-[#FDB022]" />
                        <StarIcon size={20} fill='#FDB022' className="text-[#FDB022]" />
                        <StarIcon size={20} fill='#FDB022' className="text-[#FDB022]" />
                    </span>
                </span>
                <p className='hidden md:block text-[44px] font-mediumm leading-[60px] mb-6'>ClearLink has upgraded our <br /> remote meetings. High-quality <br /> video, screen sharing, and <br />top-notch security make it <br /> essential for our team.</p>
                <p className='md:hidden text-3xl font-mediumm mb-6'>ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.</p>
                <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 mb-6'>
                    <div className='flex items-center gap-4'>
                        <Avatar>
                            <AvatarImage src='/sarah.jpg' />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className='flex flex-col'>
                            <p className='font-semibold'>Sarah Thompson</p>
                            <p className='text-muted-foreground text-sm'>Project Manager, Shopify</p>
                        </span>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <Link href='#' className='p-4 bg-white border border-[#D1E9FF] rounded-full'>
                            <ArrowLeftIcon className='text-primary' />
                        </Link >

                        <Link href='#' className='p-4 bg-white border border-[#D1E9FF] rounded-full'>
                            <ArrowRightIcon className='text-primary' />
                        </Link >
                    </div>
                </div>

            </div>
            <div className='flex justify-center'>
                <Image
                    src='/Contents.png'
                    alt='Contents'
                    width={640}
                    height={500}
                />
            </div>
        </div>
    )
}

export default Shopify
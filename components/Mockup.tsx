import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import MockupImage from '@/public/mockup.jpg'
import { CheckCircle2 } from 'lucide-react'

const Mockup = () => {

    return (
        <div className='flex flex-col-reverse gap-8 xl:gap-10 xl:flex-row max-w-[2000px] mx-auto'>
            <div className='basis-1/2 flex flex-col mx-auto xl:ml-20 2xl:ml-40'>
                <h1 className="text-2xl text-center xl:text-left  xl:text-4xl font-bold  mb-6">Ready to clear the path to perfect communication?</h1>
                <ul className="space-y-4 text-primary mb-6 mx-auto xl:mx-0">
                    <li className="flex items-center text-muted-foreground">
                        <CheckCircle2 className="text-primary mr-2" />
                        30 days free trial
                    </li>
                    <li className="flex items-center text-muted-foreground">
                        <CheckCircle2 className="text-primary mr-2" />
                        Cancel at any time
                    </li>
                    <li className="flex items-center text-muted-foreground">
                        <CheckCircle2 className="text-primary mr-2" />
                        Access to all features
                    </li>
                    <li className="flex items-center text-muted-foreground">
                        <CheckCircle2 className="text-primary mr-2" />
                        Personalized onboarding
                    </li>
                </ul>
                <div className="flex space-x-4 mx-auto xl:mx-0">
                    <Button className='bg-white text-foreground border border-[#98A2B3]' variant={'outline'}>Talk to sales</Button>
                    <Button >Start your free trial</Button>
                </div>
            </div>
            <div className="flex justify-end items-end basis-1/2border border-red-500 ">
                <Image
                    alt="Communication app interface"
                    height="1000"
                    src="/mockup.jpg"
                    width="1000"
                />
            </div>
        </div>
    )
}

export default Mockup

// bg - [url('/mockup.jpg')] bg - no - repeat object - contain bg - center bg - cover max - h - [1000px] max - w - [700px]
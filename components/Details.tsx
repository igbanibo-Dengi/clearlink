import { CalendarIcon, CameraIcon, ShieldCheckIcon, VolumeIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const Details = () => {

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className='relative'>
                <h2 className=" text-base md:text-lg font-bold text-primary">The ClearLink Advantage</h2>
                <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Why choose ClearLink?</h1>
                <p className="mt-4 text-lg md:text-2xl text-muted-foreground md:hidden">
                    In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app
                    offers:
                </p>
                <p className="mt-4 text-lg md:text-2xl text-muted-foreground hidden md:block">
                    In a world where connection is everything, ClearLink takes the lead. Our <br /> cutting-edge video conferencing app
                    offers:
                </p>
                <Image
                    alt="User 1"
                    src="/icons/arrow.svg"
                    height="100"
                    width="200"
                    className='absolute right-[240px] top-[45px] hidden xl:block'
                />
            </div>
            <div className="flex flex-col-reverse gap-10 xl:gap-0 xl:flex-row mt-20">
                <div className="xl:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
                    <div className="flex flex-col justify-between">
                        <div className='p-3 bg-[#F9FAFB] border border-[#EAECF0] rounded-full w-fit mx-auto xl:mx-0'>
                            <Image
                                alt="User 1"
                                height="20"
                                src="/icons/video.svg"
                                width="20"
                            />
                        </div>
                        <div className="">
                            <h3 className="text-lg text-center xl:text-left font-medium leading-6 text-gray-900">Crystal-clear HD video</h3>
                            <p className="mt-2 text-[18px] text-muted-foreground">
                                No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in
                                meetings.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className='p-3 bg-[#F9FAFB] border border-[#EAECF0] rounded-full w-fit mx-auto xl:mx-0'>
                            <Image
                                alt="User 1"
                                height="20"
                                src="/icons/recording.svg"
                                width="20"
                            />
                        </div>
                        <div className="">
                            <h3 className="text-lg text-center xl:text-left font-medium leading-6 text-gray-900">Noise-canceling audio</h3>
                            <p className="mt-2 text-[18px] text-muted-foreground">
                                Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className='p-3 bg-[#F9FAFB] border border-[#EAECF0] rounded-full w-fit mx-auto xl:mx-0'>
                            <Image
                                alt="User 1"
                                height="20"
                                src="/icons/calendar.svg"
                                width="20"
                            />
                        </div>
                        <div className="">
                            <h3 className="text-lg text-center xl:text-left font-medium leading-6 text-gray-900">Scheduling made easy</h3>
                            <p className="mt-2 text-[18px] text-muted-foreground">
                                Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and
                                receive reminders in one place.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className='p-3 bg-[#F9FAFB] border border-[#EAECF0] rounded-full w-fit mx-auto xl:mx-0'>
                            <Image
                                alt="User 1"
                                height="20"
                                src="/icons/lock.svg"
                                width="20"
                            />
                        </div>
                        <div className="">
                            <h3 className="text-lg text-center xl:text-left font-medium leading-6 text-gray-900">Bank-grade security</h3>
                            <p className="mt-2 text-[18px] text-muted-foreground">
                                Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data
                                from unwanted intruders.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center xl:justify-end basis-1/2">
                    <Image
                        src='/people.jpg'
                        alt='people'
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    )
}

export default Details

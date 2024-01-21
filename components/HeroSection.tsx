import React from 'react'
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { StarIcon } from "lucide-react";
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className="container md:h-screen lg md:max-h-[800px] flex justify-center md:items-end bg-[url('/bg-image.jpg')]">
            <div className="flex flex-col-reverse xl:flex-row gap-8 pb-16">
                <div className='flex flex-col justify-between gap-6 border'>
                    <h1 className="text-2xl sm:text-6xl font-semibold leading-tight">Uniting the world, one video call at a time</h1>
                    <p className="hidden md:block text-sm md:text-xl text-muted-foreground">
                        Experience the future of communication with ClearLink – <br /> where crystal-clear video conferencing meets <br />
                        unparalleled simplicity.
                    </p>
                    <p className="md:hidden text-sm md:text-xl text-muted-foreground">
                        Experience the future of communication with ClearLink – where crystal-clear video conferencing meets
                        unparalleled simplicity.
                    </p>
                    <div className="flex space-x-4">
                        <Button className="bg-blue-600 text-white">Start your free trial</Button>
                        <Button className="bg-[#e0e7ff] text-blue-600 flex gap-2">
                            <Image
                                src='/icons/robot.svg'
                                alt='robot'
                                width={20}
                                height={16}
                            />
                            <p> Discover AI assistant</p>
                        </Button>
                    </div>
                    <div className="flex items-center space-x-[8px]">
                        <Image
                            alt="User 1"
                            className="rounded-lg"
                            height="40"
                            src="/avatar-group.jpg"
                            width="152"
                        />
                        <div className="flex flex-col items-center">
                            <span className='flex'>

                                <StarIcon size={20} fill='#FDB022' className="text-[#FDB022]" />
                                <StarIcon size={20} fill='#FDB022' className="text-[#FDB022]" />
                                <StarIcon size={20} fill='#FDB022' className="text-[#FDB022]" />
                                <StarIcon size={20} fill='#FDB022' className="text-[#FDB022]" />
                                <StarIcon size={20} fill='#FDB022' className="text-[#FDB022]" />
                                <span className="text-lg font-semibold ml-2">5.0</span>
                            </span>
                            <span className="text-muted-foreground ml-1">from 3,000+ reviews</span>
                        </div>
                    </div>
                </div>
                <Card className="w-full bg-[#EFF8FF] border border-[#B2DDFF]">
                    <CardContent className="flex flex-col items-center p-8 w-full">
                        <div className="grid grid-cols-3 justify-center w-fit mb-8 gap-2  md:gap-8 lg:gap-10">
                            <Image
                                alt="User 1"
                                className="rounded-lg"
                                height="160"
                                src="/animoji1.jpg"
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="160"
                            />
                            <Image
                                alt="User 2"
                                className="rounded-lg"
                                height="160"
                                src="/animoji2.jpg"
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="160"
                            />
                            <Image
                                alt="User 3"
                                className="rounded-lg"
                                height="160"
                                src="/animoji3.jpg"
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="160"
                            />
                            <Image
                                alt="User 4"
                                className="rounded-lg"
                                height="160"
                                src="/animoji4.jpg"
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="160"
                            />
                            <Image
                                alt="User 4"
                                className="rounded-lg"
                                height="160"
                                src="/animoji5.jpg"
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="160"
                            />
                            <Image
                                alt="User 4"
                                className="rounded-lg"
                                height="160"
                                src="/animoji6.jpg"
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="160"
                            />
                        </div>
                        <div className="flex space-x-4">

                            <div className='p-3 bg-white rounded-full'>
                                <Image
                                    alt="User 1"
                                    className=" bg-white"
                                    height="20"
                                    src="/icons/microphone.svg"
                                    width="20"
                                />
                            </div>

                            <div className='p-3 bg-white rounded-full'>
                                <Image
                                    alt="User 2"
                                    className=" bg-white"
                                    height="20"
                                    src="/icons/video.svg"
                                    width="20"
                                />
                            </div>

                            <div className='p-3 bg-white rounded-full'>
                                <Image
                                    alt="User 3"
                                    className=" bg-white"
                                    height="20"
                                    src="/icons/monitor.svg"
                                    width="20"
                                />
                            </div>

                            <div className='p-3 bg-white rounded-full'>
                                <Image
                                    alt="User 4"
                                    className=" bg-white"
                                    height="20"
                                    src="/icons/face.svg"
                                    width="20"
                                />
                            </div>

                            <div className='p-3 bg-white rounded-full'>
                                <Image
                                    alt="User 4"
                                    className=" bg-white"
                                    height="20"
                                    src="/icons/message.svg"
                                    width="20"
                                />
                            </div>

                            <div className='p-3 bg-white rounded-full'>
                                <Image
                                    alt="User 4"
                                    className=" bg-white"
                                    height="20"
                                    src="/icons/settings.svg"
                                    width="20"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default HeroSection
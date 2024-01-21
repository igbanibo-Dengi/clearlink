import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

    return (
        <footer className="pt-10">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-7 gap-8">
                    <div className="col-span-2 md:col-span-2">
                        <Image
                            src='/logo.svg'
                            alt='logo'
                            width={150}
                            height={30}
                        />
                        <p className="text-sm text-muted-foreground mt-10">
                            ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of
                            communication!
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-muted-foreground">Product</h4>
                        <Link className="block text-[#475467] font-semibold " href="#">
                            Overview
                        </Link>
                        <Link className="block text-[#475467] font-semibold " href="#">
                            Features
                        </Link>
                        <Link className="block text-[#475467] font-semibold " href="#">
                            Solutions
                        </Link>
                        <Link className="block text-[#475467] font-semibold " href="#">
                            Tutorials
                        </Link>
                        <Link className="block text-[#475467] font-semibold " href="#">
                            Pricing
                        </Link>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-muted-foreground">Company</h4>
                        <Link className="block text-[#475467] font-semibold " href="#">
                            About us
                        </Link>
                        <Link className="block text-[#475467] font-semibold " href="#">
                            Careers
                        </Link>
                        <Link className="block text-[#475467] font-semibold " href="#">
                            Press
                        </Link>
                        <Link className="block text-[#475467] font-semibold " href="#">
                            News
                        </Link>
                        <Link className="block text-[#475467] font-semibold " href="#">
                            Contact
                        </Link>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-muted-foreground">Resources</h4>
                        <Link className="block text-[#475467] font-semibold " href="#">
                            Blog
                        </Link>
                        <Link className="block text-[#475467] font-semibold " href="#">
                            Events
                        </Link>
                        <Link className="block text-[#475467] font-semibold " href="#">
                            Help centre
                        </Link>
                        <Link className="block text-[#475467] font-semibold " href="#">
                            Tutorials
                        </Link>
                        <Link className="block text-[#475467] font-semibold " href="#">
                            Support
                        </Link>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold text-muted-foreground">Legal</h4>
                        <Link className="block text-[#475467] font-semibold " href="#">
                            Terms
                        </Link>
                        <Link className="block text-[#475467] font-semibold " href="#">
                            Privacy
                        </Link>
                        <Link className="block text-[#475467] font-semibold " href="#">
                            Cookies
                        </Link>
                        <Link className="block text-[#475467] font-semibold " href="#">
                            Licenses
                        </Link>
                        <Link className="block text-[#475467] font-semibold " href="#">
                            Contact
                        </Link>
                    </div>
                    <div className="space-y-3 col-span-2 md:col-span-1 flex flex-col items-center">
                        <h4 className="font-semibold sm:text-sm lg:text-base">Get the app</h4>
                        <Link className="block" href="#">
                            <Image
                                src='/app-store.png'
                                alt='linkedin'
                                width={135}
                                height={40}
                            />
                        </Link>
                        <Link className="block" href="#">
                            <Image
                                src='/play-store.png'
                                alt='linkedin'
                                width={135}
                                height={40}
                            />
                        </Link>
                    </div>
                </div>

            </div>
            <section className="border-t border-gray-200 bg-[#F9FAFB] mt-8 py-8 text-sm text-muted-foreground flex flex-col md:flex-row gap-3 justify-between items-center">
                <div className='container flex flex-col gap-4 md:flex-row justify-between items-center'>
                    <span>© 2023 ClearLink. All rights reserved.</span>
                    <div className="flex space-x-4">
                        <Image
                            src='/icons/linkedin.svg'
                            alt='linkedin'
                            width={24}
                            height={24}
                        />
                        <Image
                            src='/icons/twitter.svg'
                            alt='linkedin'
                            width={24}
                            height={24}
                        />
                        <Image
                            src='/icons/facebook.svg'
                            alt='linkedin'
                            width={24}
                            height={24}
                        />
                        <Image
                            src='/icons/instagram.svg'
                            alt='linkedin'
                            width={24}
                            height={24}
                        />
                        <Image
                            src='/icons/github.svg'
                            alt='linkedin'
                            width={24}
                            height={24}
                        />
                        <Image
                            src='/icons/youtube.svg'
                            alt='linkedin'
                            width={24}
                            height={24}
                        />
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer


import Details from '@/components/Details'
import Faqs from '@/components/Faqs'
import HeroSection from '@/components/HeroSection'
import Mockup from '@/components/Mockup'
import Shopify from '@/components/Shopify'
import Image from 'next/image'
import React from 'react'


export default function Home() {

  return (<>
    <section className='pt-24 md:pt-60 lg:pt-72 xl:pt-0'>
      <HeroSection />
    </section >
    <section className=' my-0 mt-10 xl:my-20'>
      <div className="py-8">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-sm text-muted-foreground">
            Join 1,500+ companies already video conferencing the ClearLink way
          </p>
          <div className="grid grid-cols-2 w-full gap-x-6 gap-y-8 sm:grid-cols-3 xl:grid-cols-6 xl:gap-x-0 xl:gap-y-0 xl:flex xl:justify-between ">
            <Image
              alt="Shopify logo"
              className="h-6 sm:h-8"
              height="53"
              src="/icons/Shopify.svg"
              width="141"
            />
            <Image
              alt="Coinbase logo"
              className="h-6 sm:h-8"
              height="32"
              src="/icons/coinbase.svg"
              width="177"
            />
            <Image
              alt="Dropbox logo"
              className="h-6 sm:h-8"
              height="36"
              src="/icons/Dropbox.png"
              width="184"
            />
            <Image
              alt="Intercom logo"
              className="h-6 sm:h-8"
              height="40"
              src="/icons/Intercom.svg"
              width="174"
            />
            <Image
              alt="Marvel logo"
              className="h-6 sm:h-8"
              height="40"
              src="/icons/Marvel.svg"
              width="100"
            />
            <Image
              alt="Automattic logo"
              className="h-6 sm:h-8"
              height="20"
              src="/icons/Automattic.svg"
              width="240"
            />
          </div>
        </div>

      </div>
    </section>
    <section className='my-20 xl:mt-32'>
      <Details />
    </section>
    <section className='my-10 bg-[#F9FAFB] py-10'>
      <Shopify />
    </section>
    <section className='my-10  py-10'>
      <Faqs />
    </section>
    <section className='my-10  py-10'>
      <Mockup />
    </section>
  </>
  )
}

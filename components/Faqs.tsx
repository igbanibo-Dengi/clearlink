import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

const Faqs = () => {




    return (
        <div className="container p-8">
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1">
                    <h2 className="text-[18px] text-primary font-semibold mb-4">Support</h2>
                    <h3 className="text-5xl font-semibold mb-6">FAQs</h3>
                    <p className="mb-6 pr-20 text-muted-foreground">
                        Everything you need to know about the product and billing. Can&apos;t find the answer you&apos;re looking for? Please  &nbsp;
                        <a className="underline" href="#">
                            chat to our friendly team.
                        </a>
                    </p>
                </div>
                <div className="flex-1 space-y-4">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How many participants can join a ClearLink video conference?</AccordionTrigger>
                            <AccordionContent>
                                ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Can I use ClearLink on multiple devices?</AccordionTrigger>
                            <AccordionContent>
                                ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is ClearLink compatible with other video conferencing platforms?</AccordionTrigger>
                            <AccordionContent>
                                ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>How does ClearLink ensure the security of my video conferences?</AccordionTrigger>
                            <AccordionContent>
                                ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Do I need to download any software to use ClearLink?</AccordionTrigger>
                            <AccordionContent>
                                ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>What kind of customer support does ClearLink provide?</AccordionTrigger>
                            <AccordionContent>
                                ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
            </div>
        </div>
    )
}

export default Faqs

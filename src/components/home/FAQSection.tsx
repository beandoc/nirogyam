
'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generalFaqs, livingDonationFaqs, deceasedDonationFaqs } from '@/lib/data';

const FaqItem = ({ question, children, value }: { question: string, children: React.ReactNode, value: string }) => {
  return (
    <AccordionItem value={value} className="border-b bg-card rounded-lg mb-2">
        <AccordionTrigger className="text-lg font-semibold text-foreground/90 hover:no-underline p-4 rounded-lg text-left">
            {question}
        </AccordionTrigger>
        <AccordionContent className="text-foreground/80 mt-1 p-4 pt-0 text-base rounded-lg space-y-4">
            {children}
        </AccordionContent>
    </AccordionItem>
  );
};

export const FAQSection = () => {
    return (
        <section id="faq" className="py-20 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-primary">Frequently Asked Questions</h3>
                <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">Find quick answers to common questions about kidney health and treatment.</p>
                </div>
                <Tabs defaultValue="general" className="max-w-3xl mx-auto">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="general">General</TabsTrigger>
                        <TabsTrigger value="living">Living Donation</TabsTrigger>
                        <TabsTrigger value="deceased">Deceased Donation</TabsTrigger>
                    </TabsList>
                    <TabsContent value="general">
                        <Accordion type="single" collapsible className="w-full space-y-3">
                            {generalFaqs.map((faq, index) => (
                                <FaqItem key={`general-${index}`} value={`item-${index}`} question={faq.question}>
                                    <p>{faq.answer}</p>
                                </FaqItem>
                            ))}
                        </Accordion>
                    </TabsContent>
                    <TabsContent value="living">
                        <Accordion type="single" collapsible className="w-full space-y-3">
                            {livingDonationFaqs.map((faq, index) => (
                                <FaqItem key={`living-${index}`} value={`item-${index}`} question={faq.question}>
                                    <p>{faq.answer}</p>
                                </FaqItem>
                            ))}
                        </Accordion>
                    </TabsContent>
                    <TabsContent value="deceased">
                        <Accordion type="single" collapsible className="w-full space-y-3">
                            {deceasedDonationFaqs.map((faq, index) => (
                                <FaqItem key={`deceased-${index}`} value={`item-${index}`} question={faq.question}>
                                    <p>{faq.answer}</p>
                                </FaqItem>
                            ))}
                        </Accordion>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

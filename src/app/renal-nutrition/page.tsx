
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, Droplet, Flame, HeartPulse, Bone, Utensils, Scale, UserCheck, Wind, Soup, Cloudy, Leaf } from 'lucide-react';

const NutrientCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card>
        <CardHeader>
            <div className="flex items-center gap-4">
                {icon}
                <CardTitle>{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <div className="text-foreground/80 space-y-2">{children}</div>
        </CardContent>
    </Card>
);

const FaqItem = ({ value, question, children }: { value: string, question: string, children: React.ReactNode }) => (
    <AccordionItem value={value}>
        <AccordionTrigger>{question}</AccordionTrigger>
        <AccordionContent className="space-y-4 text-foreground/80">
            {children}
        </AccordionContent>
    </AccordionItem>
);

const RenalNutritionPage = () => {
    return (
        <div className="bg-background text-foreground">
            <header className="bg-card/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <svg className="h-10 w-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75V3.5C9.1 3.5 7.25 5.1 7.25 7.25C7.25 9.4 9.1 11 11.25 11V21.25C11.25 21.6642 11.5858 22 12 22C12.4142 22 12.75 21.6642 12.75 21.25V11C14.9 11 16.75 9.4 16.75 7.25C16.75 5.1 14.9 3.5 12.75 3.5V2.75Z" />
                            <path d="M7.25 14.5C7.25 14.0858 6.91421 13.75 6.5 13.75C6.08579 13.75 5.75 14.0858 5.75 14.5V15C4.37 15 3.25 16 3.25 17.25C3.25 18.5 4.37 19.5 5.75 19.5V20C5.75 20.4142 6.08579 20.75 6.5 20.75C6.91421 20.75 7.25 20.4142 7.25 20V19.5C8.63 19.5 9.75 18.5 9.75 17.25C9.75 16 8.63 15 7.25 15V14.5Z" />
                            <path d="M18.25 13.75C17.8358 13.75 17.5 14.0858 17.5 14.5V15C16.12 15 15 16 15 17.25C15 18.5 16.12 19.5 17.5 19.5V20C17.5 20.4142 17.8358 20.75 18.25 20.75C18.6642 20.75 19 20.4142 19 20V19.5C20.38 19.5 21.5 18.5 21.5 17.25C21.5 16 20.38 15 19 15V14.5C19 14.0858 18.6642 13.75 18.25 13.75Z" />
                        </svg>
                        <h1 className="text-2xl font-bold text-primary">Nirogyam</h1>
                    </Link>
                    <nav>
                        <Button variant="ghost" asChild>
                            <Link href="/"><Home className="mr-2 h-4 w-4" /> Home</Link>
                        </Button>
                    </nav>
                </div>
            </header>
            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <section id="intro" className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Your Guide to Renal Nutrition</h1>
                        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                           Making healthy food choices is vital for everyone, especially if you have chronic kidney disease (CKD). Good nutrition can help slow the progression of CKD, provide energy, and maintain overall health.
                        </p>
                    </section>

                    <section id="dietitian" className="mb-12 bg-primary/10 p-8 rounded-lg flex flex-col md:flex-row items-center gap-8">
                        <div className="text-center">
                            <UserCheck className="h-16 w-16 text-primary mx-auto mb-4" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">The Role of a Registered Dietitian</h2>
                            <p className="text-foreground/80">
                                A registered dietitian specializing in kidney disease can be an invaluable partner. They can create a personalized eating plan based on your lifestyle and lab results, help you manage related conditions like diabetes and high blood pressure, and guide you in slowing the progression of your kidney disease. Ask your doctor for a referral; this service is often covered by Medicare and other insurance plans.
                            </p>
                        </div>
                    </section>

                    <section id="nutrients" className="mb-12">
                         <h2 className="text-3xl font-bold text-primary mb-8 text-center">Key Nutrients to Manage in CKD</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <NutrientCard icon={<Cloudy className="h-8 w-8 text-primary" />} title="Sodium">
                                <p>Healthy kidneys balance sodium levels, but in CKD, excess sodium can cause fluid buildup, swelling, and high blood pressure. Limiting salt intake is crucial. Your healthcare provider will recommend a specific daily limit for you.</p>
                            </NutrientCard>
                            <NutrientCard icon={<HeartPulse className="h-8 w-8 text-primary" />} title="Potassium">
                                <p>Potassium is vital for muscle and heart function. In advanced CKD, potassium can build up to dangerous levels. Your required intake depends on your kidney function and medications. High-potassium foods include bananas, oranges, and dried fruits.</p>
                            </NutrientCard>
                            <NutrientCard icon={<Bone className="h-8 w-8 text-primary" />} title="Phosphorus">
                                <p>As kidney function declines, phosphorus can accumulate in the blood, weakening your bones. Limiting high-phosphorus foods like dairy, organ meats, and processed foods with phosphate additives is often necessary.</p>
                            </NutrientCard>
                            <NutrientCard icon={<Bone className="h-8 w-8 text-primary" />} title="Calcium">
                                <p>Foods high in calcium are often also high in phosphorus. Your doctor will guide you on whether to limit calcium. Always consult them before taking any over-the-counter calcium or vitamin D supplements.</p>
                            </NutrientCard>
                            <NutrientCard icon={<Leaf className="h-8 w-8 text-primary" />} title="Protein">
                                <p>Protein is essential for muscle and tissue repair. Plant-based proteins (beans, nuts) are often easier on the kidneys than animal proteins. Eating the right amount—not too much, not too little—is key. Your dietitian will help determine your specific needs.</p>
                            </NutrientCard>
                            <NutrientCard icon={<Droplet className="h-8 w-8 text-primary" />} title="Fluids">
                                <p>In early-stage CKD, fluid restriction is usually not needed. As the disease progresses, your doctor may advise you to limit your fluid intake to prevent swelling and heart strain. Fluids include any food that is liquid at room temperature.</p>
                            </NutrientCard>
                             <NutrientCard icon={<Flame className="h-8 w-8 text-primary" />} title="Calories">
                                <p>Getting the right number of calories provides the energy your body needs and helps it use protein effectively. A dietitian can help you create a plan to maintain a healthy weight without overburdening your kidneys.</p>
                            </NutrientCard>
                            <NutrientCard icon={<Utensils className="h-8 w-8 text-primary" />} title="Vitamins and Minerals">
                                <p>People with CKD may need special vitamin or mineral supplements because some foods are restricted. Only take supplements prescribed by your doctor, as many over-the-counter products can be harmful.</p>
                            </NutrientCard>
                        </div>
                    </section>

                    <section id="questions-for-team" className="mb-12">
                         <h2 className="text-3xl font-bold text-primary mb-8 text-center">Questions for Your Healthcare Team</h2>
                         <div className="max-w-3xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                <FaqItem value="q1" question="What type of diet is best for my individual needs?">
                                    <p>Your dietary needs are unique. Your healthcare team can provide personalized recommendations based on your specific stage of CKD, lab results, and overall health.</p>
                                </FaqItem>
                                <FaqItem value="q2" question="Can you refer me to a registered dietitian who specializes in kidney disease?">
                                    <p>A kidney dietitian (or renal dietitian) has specialized knowledge to help you create a practical and effective eating plan that you can stick with.</p>
                                </FaqItem>
                                <FaqItem value="q3" question="How can I adjust my diet to help with high acid levels in my blood?">
                                    <p>Your team can check your blood for high acid levels (metabolic acidosis) and suggest dietary changes, such as incorporating more plant-based foods, to help manage it.</p>
                                </FaqItem>
                                <FaqItem value="q4" question="Am I getting enough protein to maintain my muscle mass?">
                                    <p>It's a delicate balance. Your dietitian can evaluate your protein intake to ensure you're getting enough to stay strong without putting extra strain on your kidneys.</p>
                                </FaqItem>
                                <FaqItem value="q5" question="Where can I find support for getting healthy, kidney-friendly foods?">
                                    <p>Your healthcare team or social worker may be able to connect you with local resources, meal delivery programs, or financial assistance for purchasing healthy foods.</p>
                                </FaqItem>
                            </Accordion>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
};

export default RenalNutritionPage;

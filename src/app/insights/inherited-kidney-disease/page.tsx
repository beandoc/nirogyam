
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const InfoCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <Card className="mb-8">
        <CardHeader>
            <CardTitle className="text-2xl text-primary">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="prose lg:prose-xl max-w-none text-foreground/90 space-y-4">
                {children}
            </div>
        </CardContent>
    </Card>
);

const InheritedKidneyDiseasePage = () => {
    return (
        <div className="bg-background text-foreground flex-1">
            <AppHeader />
            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <Button asChild variant="outline" className="mb-8">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">When Kidney Problems Run in the Family: A Guide to Inherited Kidney Disease</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>Sometimes, certain health problems, including kidney disease, can be passed down through families from one generation to the next. These are known as inherited or genetic kidney diseases. They are caused by specific faulty genes that affect how the kidneys are built or how they function.</p>
                        <p>It’s important to remember that not all kidney disease is inherited. In fact, most cases are caused by other conditions like diabetes and high blood pressure. However, if kidney problems seem to be common in your family, it's wise to understand what this could mean for your own health.</p>
                    </div>

                    <InfoCard title="What's the Difference Between 'Inherited' and 'Congenital'?">
                        <p>You might hear these two terms, and they can be a bit confusing.</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Inherited diseases</strong> are passed down through the genes from a parent.</li>
                            <li><strong>Congenital diseases</strong> are simply conditions that are present at birth. They might be inherited, or they could happen for other reasons during a baby's development in the womb.</li>
                        </ul>
                        <p>This guide focuses on the inherited types that can affect families.</p>
                    </InfoCard>

                    <InfoCard title="Common Types of Inherited Kidney Disease">
                        <p>There are many different types of genetic kidney diseases, but some are more common than others.</p>
                        <h3 className="text-xl font-semibold text-foreground">Polycystic Kidney Disease (PKD)</h3>
                        <p>This is one of the most well-known inherited kidney diseases. In PKD, many fluid-filled sacs called "cysts" begin to grow in the kidneys. Over many years, these cysts can multiply and grow larger, causing the kidneys to become enlarged and eventually lose their ability to function properly.</p>
                        
                        <Card className="my-6 bg-primary/10 border-primary/20">
                            <CardHeader>
                                <CardTitle>ADPKD Road Map Toolkit</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground/80 mb-4">If you or a loved one is affected by ADPKD, use our interactive road map to navigate the condition.</p>
                                <Button asChild>
                                    <Link href="/toolkits/adpkd-road-map">
                                        Launch Toolkit <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <h3 className="text-xl font-semibold text-foreground mt-4">Other Genetic Conditions</h3>
                        <p>There are many other, rarer types of inherited kidney diseases. Some affect the kidney's delicate filtering units, some cause long-term inflammation, and some can even be linked to hearing or vision problems. The specific type of disease will determine the symptoms and how it progresses over time.</p>
                    </InfoCard>

                    <InfoCard title="What are the Common Signs and Symptoms?">
                        <p>The symptoms of inherited kidney disease can vary, but some common signs to watch for include:</p>
                        <ul className="list-disc pl-6">
                            <li>High blood pressure (hypertension), especially at a younger age.</li>
                            <li>Protein in the urine (your doctor will find this on a test, but it might make your urine look foamy).</li>
                            <li>Blood in the urine (which can make it look pink, red, or brownish).</li>
                            <li>Swelling (soojan), especially in the legs, ankles, or around the eyes.</li>
                            <li>Feeling tired and weak all the time.</li>
                            <li>Pain in the side or back, which is common with PKD as the cysts grow.</li>
                            <li>Getting frequent urinary tract infections (UTIs) or kidney stones.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="How Do You Know if It's Inherited?">
                        <p>Figuring out if a kidney problem is genetic involves a few key steps:</p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Look at Your Family's Health History:</strong> This is the biggest clue. Have other close relatives (parents, grandparents, aunts, uncles, siblings) also had kidney problems, high blood pressure, or needed dialysis? Talking openly with your family about their health can provide vital information.</li>
                            <li><strong>Get Regular Medical Check-ups:</strong> If you know there is a history of kidney disease in your family, it's very important to see a doctor for regular check-ups. Simple blood and urine tests can monitor your kidney health long before you ever feel any symptoms.</li>
                            <li><strong>Consider Genetic Testing:</strong> In some cases, your doctor might suggest a special blood test called genetic testing. This test can look for the specific faulty gene that is known to cause certain kidney diseases. A genetic counsellor can help you understand the results and what they mean for you and other family members.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="How Are These Conditions Managed?">
                        <p>While most inherited kidney diseases cannot be cured, they can be managed effectively to slow down their progression and protect your health.</p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Working with a Specialist:</strong> You will need to be under the care of a kidney specialist, known as a nephrologist.</li>
                            <li><strong>Key Management Steps:</strong> The main goals of treatment are to control symptoms and slow down kidney damage. This usually involves:
                                <ul className="list-disc pl-8">
                                    <li>Strictly controlling your blood pressure with medication.</li>
                                    <li>Following a kidney-friendly diet (often low in salt).</li>
                                    <li>Drinking an appropriate amount of water.</li>
                                    <li>Avoiding medications that can be harmful to the kidneys (like certain painkillers).</li>
                                </ul>
                            </li>
                             <li><strong>Planning for the Future:</strong> For many people with these conditions, kidney function will unfortunately decline over time. Your doctor will help you understand the progression and plan for future treatments, which might eventually include dialysis or a kidney transplant.</li>
                        </ul>
                    </InfoCard>
                    
                    <InfoCard title="A Final Thought">
                        <p>If kidney disease runs in your family, being proactive is your greatest strength. Understanding your family's health history and getting regular check-ups can help you catch any problems at the earliest possible stage. Working closely with a kidney specialist will help you manage the condition effectively, slow its progression, and protect your health for as long as possible. If you have any concerns, don't hesitate to speak with a healthcare professional to get the guidance and care you need.</p>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default InheritedKidneyDiseasePage;

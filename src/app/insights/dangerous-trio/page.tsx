
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
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

const DangerousTrioPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">The Dangerous Trio: How Diabetes, High BP, and Your Kidneys Are Linked</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>In India, many of us live with two very common health conditions: high blood pressure (BP) and diabetes. While we focus on managing them, we often forget about their silent victim—our kidneys.</p>
                        <p>Together, these two diseases are the number one cause of long-term kidney damage in our country, responsible for about 7 out of 10 cases. On their own, they are serious. But when combined with kidney problems, they form a dangerous trio that often goes unnoticed until the damage is severe, sometimes leading to the need for dialysis or a kidney transplant.</p>
                    </div>

                    <InfoCard title="How Diabetes and High BP Attack Your Kidneys">
                        <p>Think of your kidneys as a very fine chai strainer (sieve). Their main job is to filter waste products out of your blood, 24/7. Here’s how this delicate system gets damaged:</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Diabetes (High Blood Sugar):</strong> When your blood sugar is high, your blood becomes thick and sticky, a bit like a sugary syrup. Over time, this "syrup" clogs and damages the tiny, delicate holes in your kidney's strainer.</li>
                            <li><strong>Hypertension (High BP):</strong> High blood pressure is like blasting water through that same strainer with too much force. This constant, intense pressure weakens and damages the fine mesh, making it less effective.</li>
                        </ul>
                         <p><strong>Double Trouble:</strong> When you have both conditions, it's a powerful double attack that wears out your kidney filters much, much faster. In fact, having both diabetes and high BP can double your risk of developing kidney failure.</p>
                    </InfoCard>

                    <InfoCard title="The Vicious Cycle of Damage">
                        <p>It’s a snowball effect. High BP and diabetes damage the kidneys. As the kidneys get weaker, they can't remove extra salt and water from the body efficiently. This leftover fluid raises your blood pressure even more.</p>
                        <p>So, high BP damages the kidneys, and the damaged kidneys make the BP even higher. This dangerous cycle can spin quietly for years, often without any clear symptoms.</p>
                    </InfoCard>

                    <InfoCard title="Warning Signs You Must Not Ignore">
                        <p>The most dangerous thing about Chronic Kidney Disease (CKD) is that it is often silent in its early stages. However, as it progresses, be on the lookout for these signs:</p>
                        <ul className="list-disc pl-6">
                            <li>Swelling (soojan) in your feet, ankles, or face.</li>
                            <li>Needing to urinate more often, especially at night.</li>
                            <li>Foamy or bubbly urine (looks like soap foam in the toilet).</li>
                            <li>Feeling constantly tired, weak, or losing your appetite.</li>
                            <li>High blood pressure that becomes very difficult to control, even with medication.</li>
                        </ul>
                        <p><strong>Remember:</strong> Even if you feel perfectly fine, if you have diabetes or hypertension, you must be proactive about checking your kidney health.</p>
                    </InfoCard>
                    
                    <InfoCard title="Your 5-Point Kidney Protection Plan">
                        <p>The good news is that you can take steps to protect your kidneys. Here’s a simple guide:</p>
                        <ol className="list-decimal pl-6 space-y-3">
                            <li><strong>Control Your Numbers:</strong> Work closely with your doctor to keep your blood sugar (HbA1c) and blood pressure within a healthy range. Take your prescribed medications every single day—don't skip them!</li>
                            <li><strong>Get a Yearly Kidney Check:</strong> This is non-negotiable. Ask your doctor for a simple blood test (KFT/RFT) and a urine test every year to see how well your kidneys are working.</li>
                            <li><strong>Eat a Kidney-Friendly Diet:</strong> Reduce your intake of salt (and salty snacks like bhujia and pickles), sugar, red meat, and fried foods. Focus on fresh vegetables, fruits, and whole grains.</li>
                            <li><strong>Stay Active:</strong> Just 30 minutes of physical activity each day, like a brisk walk or yoga, can make a huge difference.</li>
                            <li><strong>Be Smart About Medicines:</strong> Avoid the overuse of painkillers. Always talk to your doctor before taking any new over-the-counter drugs or local remedies, as some can be harmful to your kidneys.</li>
                        </ol>
                    </InfoCard>

                    <InfoCard title="A Final Word">
                        <p>High blood pressure and diabetes are more than just lifestyle conditions in India; they are the leading pathways to kidney failure. Their damage is silent, so you cannot wait for symptoms to appear. If you or a loved one lives with these conditions, make an annual kidney check-up your top health priority. Acting early is the best way to protect your kidneys for a long and healthy life.</p>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default DangerousTrioPage;

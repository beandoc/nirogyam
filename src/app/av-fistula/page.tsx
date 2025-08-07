
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Heart, ShieldCheck, AlertTriangle } from 'lucide-react';
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

const AVFistulaPage = () => {
    return (
        <div className="bg-background text-foreground flex-1">
            <AppHeader />
            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <Button asChild variant="outline" className="mb-8">
                        <Link href="/kidney-health">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Kidney Health Topics
                        </Link>
                    </Button>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Understanding AV Fistulas</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>For individuals with chronic kidney disease (CKD) who require long-term haemodialysis, a durable and reliable form of vascular access is essential. During hemodialysis, your blood flows into a machine to be cleaned of waste and excess fluid. The cleaned blood is then returned to your body. To do this, you need a reliable way to access your bloodstream, known as a hemodialysis access.</p>
                        <p>The three commonly used methods are a fistula, a graft, or a central venous catheter. The AV fistula is generally considered the best choice for most people, but it may not be possible for everyone.</p>
                    </div>

                    <InfoCard title="What is an AV Fistula?">
                        <p>An AV fistula (arteriovenous fistula) is a surgically created connection between an artery (a vessel carrying blood from the heart) and a vein (a vessel carrying blood back to the heart). This procedure redirects some arterial blood into the vein, creating a single, larger, and more robust blood vessel. This stronger vessel provides a reliable access point capable of handling the rapid blood flow necessary for efficient dialysis.</p>
                    </InfoCard>

                    <InfoCard title="Benefits of an AV Fistula">
                        <p>An AVF is generally considered the best form of long-term haemodialysis access for several key reasons:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Superior Dialysis Efficiency:</strong> An AVF allows blood to flow more quickly than a dialysis line, resulting in more efficient dialysis during each session, which is important for long-term health.</li>
                            <li><strong>Lower Risk of Infection and Clotting:</strong> Because a fistula uses your own blood vessels without any artificial materials, the risk of infection and blood clots is much lower compared to grafts or catheters.</li>
                            <li><strong>Long-Lasting Durability:</strong> AV fistulas have the best long-term success rate and are more likely to last for many years compared to other access types.</li>
                            <li><strong>Greater Lifestyle Freedom:</strong> The absence of external components means patients can more easily swim, shower, or bathe once the surgical site has fully healed.</li>
                             <li><strong>Preservation of Blood Vessels:</strong> Dialysis lines can cause damage to the large central veins. This can make it difficult to place future lines or create fistulas. An AVF avoids this complication.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="The Surgical Procedure">
                        <p>The surgery to create an AV fistula is a surgical procedure performed in a hospital. Prior to the operation, an ultrasound scan is often performed to evaluate the blood vessels in the arm and determine the exact size and optimal placement for the fistula. It is typically performed while the patient is awake, using either local or regional anesthetic to numb the arm. The operation itself usually lasts about one hour, and most patients can go home the same day.</p>
                        <p>The fistula is typically created in the patient's non-dominant arm (the arm not used for writing), usually on the inside of the arm near the wrist or elbow. The surgeon makes a small incision in the skin, then creates a small opening between a selected artery and vein to join them. The incision is closed with stitches, which are generally dissolvable.</p>
                    </InfoCard>
                    
                     <InfoCard title="The Maturation Process">
                        <p>A newly created fistula cannot be used for dialysis immediately; it requires a period of time to "mature." The high-pressure blood flow from the artery causes the vein to grow larger and its walls to become thicker and stronger. This maturation process typically takes around 10 weeks, although it can be longer. Your nephrology team may recommend simple exercises, such as regularly squeezing a stress ball, to help the fistula mature. These exercises should only begin after any post-operative swelling has resolved.</p>
                        <p>When the fistula is ready, your dialysis nurse will insert two needles into the access site for each hemodialysis treatment.</p>
                     </InfoCard>

                    <Card className="mb-8 border-primary/20">
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">Caring for Your AV Fistula</CardTitle>
                        </CardHeader>
                        <CardContent className="prose lg:prose-xl max-w-none text-foreground/90 space-y-4">
                            <h3 className="font-semibold text-lg text-primary">After Surgery</h3>
                            <p>Your healthcare team will provide specific instructions on how to care for your dressing. Once the incision is healed (usually about two weeks), you can begin the exercises recommended by your team. You should also start to feel a "thrill" – a constant vibration over the fistula – which is a good sign that blood is flowing through it correctly.</p>

                            <h3 className="font-semibold text-lg text-primary">Daily Care at Home</h3>
                            <p>It's crucial to check your access every day. Look for any changes in the hand below your fistula, such as a change in color or temperature, numbness, or swelling. Also check the fistula site itself for any redness, warmth, pain, or bleeding. Most importantly, check for the "thrill." The kidney team will teach you what the fistula should feel and sound like so you can perform daily self-checks.</p>
                            <p className="font-bold">If the thrill disappears or changes, notify your nephrology team immediately, as it could indicate a blockage.</p>
                            
                             <h3 className="font-semibold text-lg text-primary">During and After Dialysis</h3>
                             <p>Ensure your access site is visible at all times during treatment. After the needles are removed, you will need to apply light pressure for about 10 minutes to help the sites clot. If bleeding starts again after you leave, apply pressure for another 20 minutes. If it doesn't stop, go to the nearest emergency department.</p>
                        </CardContent>
                    </Card>
                    
                    <InfoCard title="Potential Risks and Complications">
                        <p>While every effort is made to prevent them, all surgical procedures carry some risk. Possible complications include:</p>
                         <ul className="list-disc pl-6 space-y-2">
                           <li><strong>Numbness:</strong> Temporary numbness near the thumb can occur from nerve bruising and usually resolves in a few weeks.</li>
                           <li><strong>Swelling:</strong> Post-operative swelling is usually temporary and can be managed by elevating the arm.</li>
                           <li><strong>Infection:</strong> A fistula that feels hot, swollen, or painful should be reported immediately, as it may require antibiotics.</li>
                           <li><strong>Steal Syndrome:</strong> This rare complication occurs when the fistula diverts too much blood from the hand, causing coldness, numbness, or pain. It may require medication or surgical correction.</li>
                           <li><strong>Thrombosis (Clotting):</strong> If a clot forms, the "thrill" will disappear. This requires immediate medical attention.</li>
                           <li><strong>Hemorrhage (Bleeding):</strong> Bleeding from the fistula between dialysis sessions is a medical emergency. Apply firm pressure and seek immediate help.</li>
                        </ul>
                    </InfoCard>

                    <Card className="mb-8 border-destructive/20">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <AlertTriangle className="h-8 w-8 text-destructive" />
                            <CardTitle className="text-2xl text-destructive">Important Reminders & Precautions</CardTitle>
                        </CardHeader>
                        <CardContent className="prose lg:prose-xl max-w-none text-foreground/90">
                           <p>To protect your fistula arm and keep it working well for a long time, you must AVOID the following on that arm:</p>
                           <ul className="list-disc pl-6 space-y-2">
                                <li>Blood pressure measurements.</li>
                                <li>Blood draws or IV lines (other than for dialysis).</li>
                                <li>Wearing tight watches, jewelry, or sleeves.</li>
                                <li>Sleeping on the arm or keeping it bent for long periods.</li>
                                <li>Lifting heavy objects.</li>
                           </ul>
                        </CardContent>
                    </Card>

                </div>
            </main>
        </div>
    );
};

export default AVFistulaPage;


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
                        <p>During hemodialysis, your blood flows into a machine to be cleaned of waste and excess fluid. The cleaned blood is then returned to your body. To do this, you need a reliable way to access your bloodstream, known as a hemodialysis access.</p>
                        <p>The three commonly used methods are a fistula, a graft, or a central venous catheter. The AV fistula is generally considered the best choice for most people, but it may not be possible for everyone.</p>
                    </div>

                    <InfoCard title="What is an AV Fistula?">
                        <p>An AV fistula (arteriovenous fistula) is created by a minor surgical procedure where a surgeon connects an artery directly to a vein, usually in your arm. Because of the higher blood flow from the artery, the vein grows larger and stronger over time. This strengthening process is called "maturing."</p>
                        <p>Once matured, the fistula provides a durable access point where dialysis needles can be inserted for each treatment. Your surgeon or nephrology team may ask you to do special exercises to help your fistula mature.</p>
                    </InfoCard>

                    <InfoCard title="Benefits of an AV Fistula">
                        <p>The AV fistula is the preferred method of access for several key reasons:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Lower Risk of Infection and Clotting:</strong> Because a fistula uses your own blood vessels without any artificial materials, the risk of infection and blood clots is much lower compared to grafts or catheters.</li>
                            <li><strong>Long-Lasting Durability:</strong> AV fistulas have the best long-term success rate and are more likely to last for many years compared to other access types.</li>
                            <li><strong>Fewer Restrictions:</strong> Once the surgical site has fully healed, you typically have no restrictions on activities like swimming or showering.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="The Surgical Procedure">
                        <p>The surgery to create an AV fistula is usually performed under local anesthetic (your arm will be numbed), and the procedure typically takes 30 to 60 minutes. Most patients can go home the same day.</p>
                        <p>After the surgery, the fistula needs time to mature before it can be used for dialysis. This usually takes between four to six weeks, but can sometimes take longer.</p>
                        <p>When the fistula is ready, your dialysis nurse will insert two needles into the access site for each hemodialysis treatment.</p>
                    </InfoCard>

                    <Card className="mb-8 border-primary/20">
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">Caring for Your AV Fistula</CardTitle>
                        </CardHeader>
                        <CardContent className="prose lg:prose-xl max-w-none text-foreground/90 space-y-4">
                            <h3 className="font-semibold text-lg text-primary">After Surgery</h3>
                            <p>Your healthcare team will provide specific instructions on how to care for your dressing. Once the incision is healed (usually about two weeks), you can begin the exercises recommended by your team. You should also start to feel a "thrill" – a gentle vibration over the fistula – which is a good sign that blood is flowing through it correctly.</p>

                            <h3 className="font-semibold text-lg text-primary">Daily Care at Home</h3>
                            <p>It's crucial to check your access every day. Look for any changes in the hand below your fistula, such as a change in color or temperature, numbness, or swelling. Also check the fistula site itself for any redness, warmth, pain, or bleeding. Most importantly, check for the "thrill."</p>
                            <p className="font-bold">If the thrill disappears or changes, notify your nephrology team immediately.</p>
                            
                             <h3 className="font-semibold text-lg text-primary">During and After Dialysis</h3>
                             <p>Ensure your access site is visible at all times during treatment. After the needles are removed, you will need to apply light pressure for about 10 minutes to help the sites clot. If bleeding starts again after you leave, apply pressure for another 20 minutes. If it doesn't stop, go to the nearest emergency department.</p>
                        </CardContent>
                    </Card>

                    <Card className="mb-8 border-destructive/20">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <AlertTriangle className="h-8 w-8 text-destructive" />
                            <CardTitle className="text-2xl text-destructive">Important Reminders & Precautions</CardTitle>
                        </CardHeader>
                        <CardContent className="prose lg:prose-xl max-w-none text-foreground/90">
                           <p>To protect your fistula arm and keep it working well for a long time, you must AVOID the following on that arm:</p>
                           <ul className="list-disc pl-6 space-y-2">
                                <li>Blood pressure measurements.</li>
                                <li>Blood draws or IV lines.</li>
                                <li>Wearing tight watches, jewelry, or sleeves.</li>
                                <li>Sleeping on the arm or keeping it bent for long periods.</li>
                           </ul>
                        </CardContent>
                    </Card>

                </div>
            </main>
        </div>
    );
};

export default AVFistulaPage;

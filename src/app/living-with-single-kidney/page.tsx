
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, AlertTriangle, ShieldCheck, HeartPulse, ArrowLeft } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card>
        <CardHeader className="flex flex-row items-center gap-4">
            {icon}
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="text-foreground/80 space-y-4">{children}</div>
        </CardContent>
    </Card>
);

const LivingWithSingleKidneyPage = () => {
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
                    <section className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Living with a Single Kidney</h1>
                        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                            Information and guidance for individuals with one kidney, whether by birth, donation, or medical necessity.
                        </p>
                    </section>

                    <div className="space-y-8">
                        <InfoCard icon={<HeartPulse className="h-10 w-10 text-primary" />} title="Understanding the Long-Term Outlook">
                            <p>Individuals who have only one normal (solitary) kidney – because they donate or are born with one kidney, or through an accident or disease (e.g., tumor, obstruction) – frequently express concern as to the future effects of not having two of these organs. The long-term outlook is in fact, excellent.</p>
                            <p>There are people born with a solitary kidney. In many cases they go through life not knowing they were born with a solitary kidney. There does not appear to be any appreciably higher incidence of kidney failure in patients born with only one normal kidney or of them experiencing renal failure as a result of the second kidney being removed. The classic example of the latter is the individual who donates a kidney for a kidney transplant. There is, however, some evidence that individuals who donate a kidney for transplant and are left with a solitary kidney may have slightly higher blood pressure and a minimally increased amount of protein in their urine 10-15 years after the donation.</p>
                        </InfoCard>

                        <InfoCard icon={<ShieldCheck className="h-10 w-10 text-green-600" />} title="Activity and Lifestyle">
                            <p>For the most part, nephrologists indicate that the activity of anyone with a solitary kidney need not be restricted, except for avoiding rigorous contact sports (e.g. tackle football, body checking in hockey, etc.).</p>
                            <p>Furthermore, special precautions are not required for child bearing. However, individuals who have been kidney transplant recipients do need to exercise more caution in these situations and should consult with their nephrologist for guidance specific to their situation.</p>
                        </InfoCard>
                        
                        <InfoCard icon={<AlertTriangle className="h-10 w-10 text-destructive" />} title="Dietary Considerations">
                             <p>If the solitary kidney is not completely normal dietary advice should be sought from a nephrologist. No other special dietary precautions are required.</p>
                        </InfoCard>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LivingWithSingleKidneyPage;

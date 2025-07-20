
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, AlertTriangle, ShieldCheck, HeartPulse } from 'lucide-react';

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
                            <Link href="/"><Home className="mr-2 h-4 w-4" />Home</Link>
                        </Button>
                    </nav>
                </div>
            </header>
            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
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


'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, Droplet, Clock, Heart, Download, Settings, Hospital, Syringe, Users, LifeBuoy, Plane, AlertTriangle, ShieldCheck, Dumbbell, Info } from 'lucide-react';

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card className="mb-8">
        <CardHeader className="flex flex-row items-center gap-4">
            {icon}
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="text-foreground/80 space-y-4">{children}</div>
        </CardContent>
    </Card>
);

const HemodialysisPage = () => {
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
                            <Link href="/"><Home className="mr-2 h-4 w-4" /> Home</Link>
                        </Button>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <section className="text-center mb-16">
                        <Droplet className="h-16 w-16 text-primary mx-auto mb-4" />
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Understanding Haemodialysis</h1>
                        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                            Haemodialysis is a life-sustaining treatment for kidney failure that cleans your blood to remove toxins and excess fluid.
                        </p>
                    </section>

                    <div className="space-y-8">
                        <InfoCard icon={<Info className="h-8 w-8 text-primary" />} title="What is haemodialysis?">
                            <p>Haemodialysis is a treatment for kidney failure. When your kidneys don’t work properly, they can’t clean your blood, so toxins build up in your bloodstream.</p>
                            <p>Your kidneys also make less urine so excess fluid and waste products remain in the body. Haemodialysis ‘cleans’ your blood by running it through a dialysis machine filter to remove toxins and excess fluid. The clean blood is then returned to your body and the dialysis fluid is thrown away.</p>
                        </InfoCard>

                        <InfoCard icon={<Heart className="h-8 w-8 text-primary" />} title="How can haemodialysis help me?">
                            <p>Haemodialysis can help relieve symptoms related to kidney failure, including feeling sick, tired or weak.</p>
                            <p>It can also help with symptoms caused by having too much fluid in your body, such as puffy ankles and shortness of breath. Haemodialysis can also help to protect your bones and reduce your potassium levels.</p>
                        </InfoCard>

                        <Accordion type="single" collapsible className="w-full space-y-4">
                            <Card>
                                <AccordionItem value="item-1" className="border-b-0">
                                    <AccordionTrigger className="p-6 text-xl">More About Your Treatment</AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6">
                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><Clock className="h-5 w-5"/>How often will I need to have haemodialysis?</h4>
                                                <p>Most people have haemodialysis three times a week, with each session lasting around four hours. You may need more or less haemodialysis than this. Your healthcare team will discuss the right treatment schedule for you.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><Settings className="h-5 w-5"/>Will haemodialysis repair the damage to my kidneys?</h4>
                                                <p>If you have acute kidney injury (AKI), the damage to your kidneys is temporary and can be repaired. You may only need dialysis for a few weeks or months until your kidneys recover and your kidney function improves.</p>
                                                <p>However, if you have chronic kidney disease (CKD), the damage cannot be fully repaired and your kidney function will not improve even with dialysis treatment.</p>
                                                <p>Dialysis does the job of healthy kidneys by removing toxins and fluids from your body, but it will not cure your CKD. Once you start dialysis you will need to continue with it for the rest of your life, or until you receive a kidney transplant.</p>
                                            </div>
                                             <div>
                                                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><Hospital className="h-5 w-5"/>Where will I have haemodialysis?</h4>
                                                <p>You can have haemodialysis in hospital or in a separate specialist dialysis unit. You may also be able to do your own dialysis at home (home haemodialysis).</p>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Card>

                            <Card>
                                <AccordionItem value="item-2" className="border-b-0">
                                     <AccordionTrigger className="p-6 text-xl">Preparation and Support</AccordionTrigger>
                                     <AccordionContent className="px-6 pb-6">
                                         <div className="space-y-6">
                                             <div>
                                                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><Syringe className="h-5 w-5"/>What needs to happen before I can start haemodialysis?</h4>
                                                <p>During haemodialysis your blood is taken from your body and cleaned in a dialysis machine. For most people, access to your bloodstream is through a special connection in your arm called an arterio-venous (AV) fistula. This is made by a small medical procedure that joins two types of blood vessels: an artery, which carries blood from the heart round the body, and a vein, which carries blood back to the heart. This makes one large, stronger blood vessel.</p>
                                                <p>If your blood vessels are very small or fragile, a piece of tubing called an arterio-venous graft may be used instead of a fistula. A fistula needs to be made about six to eight weeks before dialysis starts, to allow time for it to ‘mature’ and get strong enough.</p>
                                                <p>If you need dialysis before your fistula or graft is ready or you are unable to have one made, then you can have haemodialysis through a special dialysis line in your neck (central venous line). This can be used immediately.</p>
                                                <p>You will also be advised to have a vaccine to protect you from hepatitis B. This is a virus that can be caught from blood. The vaccine may be given by the dialysis team or by your GP.</p>
                                             </div>
                                             <div>
                                                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><Users className="h-5 w-5"/>Who will help me with my treatment?</h4>
                                                <p>In hospital, a dialysis nurse or healthcare assistant will help you with your haemodialysis. You will also be seen regularly by a doctor who will advise on your medications and monitor your blood test results. A kidney dietitian will check whether you need to make any changes to your diet, such as limiting the amount of salt, potassium or phosphate that you eat. They will help with practical suggestions about how to adapt your diet.</p>
                                                <p>Some people learn to do some or all of their haemodialysis themselves, with guidance and support from nursing staff. Your kidney team can provide more information on shared haemodialysis care.</p>
                                             </div>
                                             <div>
                                                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><LifeBuoy className="h-5 w-5"/>What support is available to help manage my dialysis?</h4>
                                                <p>Starting haemodialysis is a big change. It will impact your everyday life and routines, including work, social life and relationships. Your kidney team are there to help you and your family. You may also find it useful to talk to a renal social worker or counsellor, who can help you with a range of practical and emotional matters.</p>
                                             </div>
                                         </div>
                                     </AccordionContent>
                                 </AccordionItem>
                            </Card>

                             <Card>
                                 <AccordionItem value="item-3" className="border-b-0">
                                     <AccordionTrigger className="p-6 text-xl">Lifestyle and Side Effects</AccordionTrigger>
                                     <AccordionContent className="px-6 pb-6">
                                         <div className="space-y-6">
                                            <div>
                                                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><AlertTriangle className="h-5 w-5 text-destructive"/>What are the side effects of haemodialysis?</h4>
                                                <p>Haemodialysis can leave you feeling tired, sick and washed out. It can also cause cramps and low blood pressure. These symptoms can be eased by reducing the amount of fluid that needs to be removed at each dialysis session. This depends on how much you drink between sessions. Your kidney team can advise you on how to measure and control your fluid intake. This is known as fluid restriction.</p>
                                                <p>If you are receiving dialysis treatment, you may develop an infection in the bloodstream. This can be treated with antibiotics. You may also develop problems with your fistula or dialysis line. Fistulas may bruise, especially when they are first used. This gets better with time. Anaesthetic (numbing) cream can help relieve any pain when the needle is inserted. Sometimes your fistula or dialysis line may not work very well and you will need to have extra tests and procedures to help improve their function. Fistulas can stop working. When you have a fistula, you will notice it has a ‘buzz’ which you can feel. If this disappears between dialysis sessions, call your unit immediately and they will advise you on what to do next.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><ShieldCheck className="h-5 w-5 text-green-600"/>How can I stay healthy on dialysis?</h4>
                                                <p>To stay as healthy as possible, it is important to: keep fit with regular exercise, attend every dialysis session, check your medications with your team, monitor your blood pressure, and keep to your diet and fluid allowances. Other ways you can stay healthy include stopping smoking, maintaining a healthy weight, and limiting alcohol intake.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><Plane className="h-5 w-5"/>If I’m having regular haemodialysis, will I be able to travel?</h4>
                                                <p>Yes, you can still travel and go on holiday if you are on haemodialysis. It is important to plan your travel in advance with your dialysis team – ideally give at least three months’ notice. If you are away from home, you will still need to follow your regular treatment schedule and have your haemodialysis in the local area.</p>
                                            </div>
                                             <div>
                                                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><Dumbbell className="h-5 w-5"/>Are there any alternatives to haemodialysis?</h4>
                                                <p>Other treatments for kidney failure include peritoneal dialysis, a kidney transplant, or managing the symptoms without active treatment (conservative care). Your kidney team will discuss these choices with you and your family so you can decide which is the best option.</p>
                                             </div>
                                         </div>
                                     </AccordionContent>
                                 </AccordionItem>
                             </Card>
                        </Accordion>
                        
                        <Card className="mt-8 text-center p-6">
                            <CardTitle className="mb-4">Download Haemodialysis Booklet</CardTitle>
                            <CardContent>
                                <p className="text-foreground/80 mb-4">Download this information about haemodialysis as a free PDF file to view on your computer, email to others, or print at home.</p>
                                <Button>
                                    <Download className="mr-2 h-5 w-5" />
                                    Download Now
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HemodialysisPage;

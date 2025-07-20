
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
  Stethoscope,
  Menu,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  HeartPulse,
  Users,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppHeader } from '@/components/AppHeader';


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

const Quiz = () => {
    const questions = [
        "Do you have diabetes?",
        "Do you have high blood pressure?",
        "Is there a history of kidney disease in your family?",
        "Are you over the age of 60?",
        "Do you take over-the-counter pain medications regularly?"
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<{[key: number]: string}>({});
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (questionIndex: number, value: string) => {
        setAnswers({...answers, [questionIndex]: value});
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSubmit = () => {
        setShowResult(true);
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setAnswers({});
        setShowResult(false);
    };

    if (showResult) {
        return (
             <div id="result" className="result-div mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg text-center">
                <h4 className="text-xl font-bold text-primary mb-4">Quiz Results</h4>
                <p className="text-foreground/80 mb-4">Thank you for taking the assessment. Based on your responses, here's a general indication of your potential risk. Please consult a healthcare professional for a complete evaluation.</p>
                <Button onClick={restartQuiz}>Retake Quiz</Button>
            </div>
        )
    }

    return (
        <Card className="max-w-xl mx-auto p-2 sm:p-8 shadow-xl border-primary/20">
          <CardContent className="pt-6">
            <div>
                {questions.map((q, index) => (
                    <div key={index} className={cn({ 'hidden': currentQuestion !== index })}>
                        <p className="text-lg font-semibold text-foreground mb-4">{`${index + 1}. ${q}`}</p>
                        <div className="space-y-3">
                             <label className="flex items-center text-foreground/90 cursor-pointer text-base p-3 rounded-md border border-input has-[:checked]:bg-primary/10 has-[:checked]:border-primary transition-colors">
                                <input type="radio" name={`q${index}`} value="yes" className="mr-3 h-4 w-4" onChange={(e) => handleAnswer(index, e.target.value)} checked={answers[index] === 'yes'} /> Yes
                            </label>
                            <label className="flex items-center text-foreground/90 cursor-pointer text-base p-3 rounded-md border border-input has-[:checked]:bg-primary/10 has-[:checked]:border-primary transition-colors">
                                <input type="radio" name={`q${index}`} value="no" className="mr-3 h-4 w-4" onChange={(e) => handleAnswer(index, e.target.value)} checked={answers[index] === 'no'} /> No
                            </label>
                           {index < 3 && <label className="flex items-center text-foreground/90 cursor-pointer text-base p-3 rounded-md border border-input has-[:checked]:bg-primary/10 has-[:checked]:border-primary transition-colors">
                                <input type="radio" name={`q${index}`} value="unsure" className="mr-3 h-4 w-4" onChange={(e) => handleAnswer(index, e.target.value)} checked={answers[index] === 'unsure'} /> Unsure
                            </label>}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={prevQuestion} className={cn({ 'invisible': currentQuestion === 0 })}>Previous</Button>
                {currentQuestion < questions.length - 1 && <Button onClick={nextQuestion}>Next</Button>}
                {currentQuestion === questions.length - 1 && <Button onClick={handleSubmit}>Submit</Button>}
            </div>
          </CardContent>
        </Card>
    );
};

const generalFaqs = [
    {
        question: "How successful are kidney transplants?",
        answer: "The success rate for a kidney transplant from a living donor is 90–95% after one year and the transplanted kidney lasts 15 to 20 years on average. For transplants from a deceased donor, the success rate is also high: 85–90% of these kidneys are working well after one year and will last on average from 10 to 15 years."
    },
    {
        question: "What percentage of people on the waiting list for an organ transplant are waiting for a kidney?",
        answer: "About 80% of those on the waiting list need a kidney."
    },
    {
        question: "Can a person sell their organs for money?",
        answer: "No. The key word is “donate”. Organ donation is a gift. There is no monetary compensation, and it is illegal to buy or sell organs."
    }
];

const livingDonationFaqs = [
    {
        question: "What organs can be donated through living donation?",
        answer: "A kidney, or part of the liver, lung, small bowel or pancreas can be donated through living donation."
    },
    {
        question: "Who can be a living donor?",
        answer: "Anyone who is healthy and meets the required age of consent can be a potential living donor. They must be in good general health with no evidence of significant high blood pressure, diabetes, cancer, kidney disease, heart disease or hepatitis."
    },
    {
        question: "What are the risks of donating a kidney?",
        answer: (
            <>
                <p>As with any major surgery, there are risks of physical complications, but these can usually be effectively managed. Short term risks include pneumonia, infection, pain and discomfort, allergic reaction to anesthesia, collapsed lung or blood clots. Rarely, death occurs. In the longer term, potential risks include:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Slight increased risk of high blood pressure</li>
                    <li>Slight increased incidence of kidney failure</li>
                    <li>Possibility of injuring the remaining kidney</li>
                    <li>Slight risk of developing a disease of the remaining kidney</li>
                    <li>Some people also experience psychological difficulties, although most donors are satisfied with their decision to donate a kidney</li>
                </ul>
            </>
        )
    },
    {
        question: "Are there any costs I'll have to pay?",
        answer: "In most cases, you may have to pay any non-medical costs such as travel expenses, out-of-pocket costs, and any additional child-care costs. You may also have a possible loss of salary for time off work for recovery from the surgery, unless you have sick leave coverage from your employer’s company health plan. Some programs may offer financial assistance for these expenses, so speak to the social worker or Living Donor Coordinator at the transplant center to find out more."
    },
    {
        question: "How much time will I need to take off work?",
        answer: "Depending on the type of surgery you have (traditional open nephrectomy or keyhole nephrectomy) full recovery may take up to twelve weeks. You may be able to return to work within three to six weeks depending on the type of work you do. Before the surgery, you may also need some time off work for medical tests and appointments, counselling sessions and other aspects of the pre-donation evaluation process."
    },
    {
        question: "How do I become a living donor?",
        answer: "First, learn as much as you can about living donation, and find out your blood type. Then, contact the transplant center that is taking care of the potential recipient to arrange testing to confirm whether your blood type is compatible. From there, the transplant center staff will lead you through the process."
    },
    {
        question: "Can I change my mind after I've decided to become a living donor?",
        answer: "Yes, you can change your mind at any time during the process, and your decision will be respected by the health care team. They'll also help you communicate your decision to the potential recipient."
    },
    {
        question: "I've been asked to donate one of my kidneys, but I just don't want to do it. What should I do?",
        answer: "If after learning about living donation you choose not to become a living donor, speak to the social worker, counsellor or any member of the health care team at the transplant center. They will support your decision and help you to communicate this decision to the recipient, and family members, in a way that preserves harmony."
    }
];

const deceasedDonationFaqs = [
    {
        question: "What organs can be donated through deceased donation?",
        answer: "The lungs, heart, liver, kidneys, pancreas and bowel can be donated. Tissues may include eye tissue, heart valves, bone, tendons, veins and ligaments. It is the health of the organs and tissues that is most important, not the age of the donor."
    },
    {
        question: "If I have indicated my decision for organ donation, will everything be done to save my life?",
        answer: "Yes. The first and foremost concern for doctors caring for critically ill patients is to do everything possible to save their lives. The possibility of donation is considered only when all lifesaving efforts have failed."
    },
    {
        question: "How can I make sure my wishes to donate will be respected?",
        answer: "Once you’ve registered your intention to donate your organs, it is crucial to speak to your family and loved ones to make sure they know your wishes."
    }
];


export default function NirogyamPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    
    return (
        <div className="bg-background text-foreground flex-1 flex flex-col min-h-screen">
            <AppHeader />

            <main className="flex-grow">
                <section className="hero-pattern py-20 md:py-24">
                    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-4 tracking-tight">Empowering Your Kidney Health Journey</h2>
                            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl">A comprehensive, compassionate resource for understanding kidney health, managing kidney disease, and finding the support you need.</p>
                            <Button size="lg" asChild>
                                <a href="#assess-kidney">Assess Your Risk Now</a>
                            </Button>
                        </div>
                        <div className="hidden md:block">
                            <Image src="https://placehold.co/600x400.png" alt="Healthy kidneys illustration" width={600} height={400} className="rounded-lg shadow-xl" data-ai-hint="kidney health" />
                        </div>
                    </div>
                </section>

                <section id="iam-a-section" className="py-20 bg-card">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-primary mb-4">How Can We Help?</h3>
                            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                                A kidney disease diagnosis can be overwhelming. You may be wondering, "What can I do to avoid dialysis?" We're here to show you that there are proactive steps you can take to preserve and even improve your kidney function.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-center">
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-primary/10 rounded-full mb-3"><Users className="h-10 w-10 text-primary"/></div>
                                    <CardTitle className="text-primary text-2xl">Patients</CardTitle>
                                    <CardDescription>Guidance and resources tailored for your health journey.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="text-foreground/80 text-left space-y-3">
                                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><Link href="/kidney-health" className="hover:underline">Explore Kidney Topics</Link></li>
                                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><Link href="/renal-nutrition" className="hover:underline">Diet &amp; Nutrition Guides</Link></li>
                                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><a href="#assess-kidney" className="hover:underline">Take the Risk Quiz</a></li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-center">
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-primary/10 rounded-full mb-3"><Stethoscope className="h-10 w-10 text-primary"/></div>
                                    <CardTitle className="text-primary text-2xl">Health Professionals</CardTitle>
                                    <CardDescription>Clinical tools and the latest research to support your practice.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="text-foreground/80 text-left space-y-3">
                                    <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><Link href="/kidney-function-tests" className="hover:underline">Access Clinical Resources</Link></li>
                                    <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><Link href="/stages-of-ckd" className="hover:underline">Review Latest Research</Link></li>
                                    <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><Link href="/kidney-transplant" className="hover:underline">Consult Treatment Guidelines</Link></li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-center">
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-primary/10 rounded-full mb-3"><HeartPulse className="h-10 w-10 text-primary"/></div>
                                    <CardTitle className="text-primary text-2xl">Caregivers</CardTitle>
                                    <CardDescription>Support and information to help you care for your loved ones.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="text-foreground/80 text-left space-y-3">
                                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><Link href="/kidney-health" className="hover:underline">Find Support Resources</Link></li>
                                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><Link href="/renal-nutrition" className="hover:underline">Get Help with Diet Planning</Link></li>
                                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><Link href="/kidney-transplant" className="hover:underline">Prepare for Treatments</Link></li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                
                <section id="digital-toolkits" className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-primary">Digital Toolkits</h3>
                            <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">Interactive tools to help you assess risks and make informed decisions about your kidney health.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                            <Card className="flex flex-col">
                                <Image src="https://placehold.co/600x400.png" alt="Know Hemodialysis" width={600} height={400} className="rounded-t-lg" data-ai-hint="dialysis machine" />
                                <CardHeader>
                                    <CardTitle>Know Hemodialysis</CardTitle>
                                    <CardDescription>An interactive guide to understanding hemodialysis.</CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-auto">
                                    <Button asChild className="w-full">
                                        <Link href="/toolkits/know-hemodialysis">Launch Toolkit <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                             <Card className="flex flex-col">
                                <Image src="https://placehold.co/600x400.png" alt="CKD Assessment" width={600} height={400} className="rounded-t-lg" data-ai-hint="medical assessment" />
                                <CardHeader>
                                    <CardTitle>CKD Assessment</CardTitle>
                                    <CardDescription>Assess your risk and stages of Chronic Kidney Disease.</CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-auto">
                                    <Button asChild className="w-full">
                                        <Link href="/toolkits/ckd-assessment">Launch Toolkit <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className="flex flex-col">
                                <Image src="https://placehold.co/600x400.png" alt="AKI Risk Assessment" width={600} height={400} className="rounded-t-lg" data-ai-hint="risk chart" />
                                <CardHeader>
                                    <CardTitle>AKI Risk Assessment</CardTitle>
                                    <CardDescription>Evaluate the risk factors for Acute Kidney Injury.</CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-auto">
                                    <Button asChild className="w-full">
                                        <Link href="/toolkits/aki-risk-assessment">Launch Toolkit <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className="flex flex-col">
                                <Image src="https://placehold.co/600x400.png" alt="Kidney Care Choices" width={600} height={400} className="rounded-t-lg" data-ai-hint="decision tree" />
                                <CardHeader>
                                    <CardTitle>Kidney Care Choices</CardTitle>
                                    <CardDescription>Explore treatment options and make informed care decisions.</CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-auto">
                                    <Button asChild className="w-full">
                                        <Link href="/toolkits/kidney-care-choices">Launch Toolkit <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                             <Card className="flex flex-col">
                                <Image src="https://placehold.co/600x400.png" alt="ADPKD Road map" width={600} height={400} className="rounded-t-lg" data-ai-hint="medical roadmap" />
                                <CardHeader>
                                    <CardTitle>ADPKD Road Map</CardTitle>
                                    <CardDescription>A guide for navigating Autosomal Dominant Polycystic Kidney Disease.</CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-auto">
                                    <Button asChild className="w-full">
                                        <Link href="/toolkits/adpkd-road-map">Launch Toolkit <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className="flex flex-col">
                                <Image src="https://placehold.co/600x400.png" alt="Biopsy Consent" width={600} height={400} className="rounded-t-lg" data-ai-hint="medical consent" />
                                <CardHeader>
                                    <CardTitle>Biopsy Consent</CardTitle>
                                    <CardDescription>An interactive guide to understanding the biopsy consent process.</CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-auto">
                                    <Button asChild className="w-full">
                                        <Link href="/toolkits/biopsy-consent">Launch Toolkit <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section>
                
                <section id="assess-kidney" className="py-20 bg-card">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-primary">Assess Your Kidney Health</h3>
                            <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">Take our quick assessment to understand your risk factors. Early detection can help prevent or slow the progression of kidney disease.</p>
                        </div>
                        <Quiz />
                    </div>
                </section>

                <section id="renal-nutrition" className="py-20 bg-background">
                    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-lg overflow-hidden shadow-xl">
                            <Image src="https://placehold.co/600x600.png" alt="A colorful plate of healthy food" width={600} height={600} className="object-cover" data-ai-hint="healthy food plate" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-primary mb-6">Your Guide to Renal Nutrition</h3>
                            <p className="text-lg text-foreground/80 mb-6">
                                A well-balanced diet of nutritious, low-sodium foods rich in vitamins and minerals can slow or stop kidney disease progression.
                            </p>
                            <Button size="lg" asChild>
                                <Link href="/renal-nutrition">Explore the Nutrition Guide <ArrowRight className="ml-2 h-4 w-4"/></Link>
                            </Button>
                        </div>
                    </div>
                </section>
                
                {isClient && (
                <section id="kidney-conversations" className="py-20 bg-card">
                    <div className="container mx-auto px-4 text-center">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-primary">Kidney Conversations</h3>
                            <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">Tune into our podcasts for in-depth discussions with experts, patient stories, and the latest advancements in kidney care.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card>
                                <CardHeader><CardTitle className="text-primary">CKD "A Blind Spot"</CardTitle></CardHeader>
                                <CardContent>
                                    <p className="text-foreground/80 mb-4">An introductory episode covering the basics of Chronic Kidney Disease.</p>
                                    <audio controls className="w-full">
                                        <source src="/podcast_episode_1.mp3" type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader><CardTitle className="text-primary">CKD- Correct BP measurement</CardTitle></CardHeader>
                                <CardContent>
                                    <p className="text-foreground/80 mb-4">Expert insights on managing your diet for kidney health.</p>
                                    <audio controls className="w-full">
                                        <source src="/podcast_episode_2.mp3" type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader><CardTitle className="text-primary">Sharing your feelings</CardTitle></CardHeader>
                                <CardContent>
                                    <p className="text-foreground/80 mb-4">Inspiring journeys from individuals living with kidney disease.</p>
                                    <audio controls className="w-full">
                                        <source src="/podcast_episode_3.mp3" type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="mt-12">
                            <Button size="lg" variant="outline">Explore More Podcasts</Button>
                        </div>
                    </div>
                </section>
                )}
                
                <section id="faq" className="py-20 bg-background">
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
                                            {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
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

                <section id="about" className="py-20 bg-card">
                    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-bold text-primary mb-6">About Nirogyam</h3>
                            <p className="text-lg text-foreground/80 max-w-xl">Nirogyam is dedicated to providing clear, reliable, and accessible information on kidney health. We believe that informed patients and caregivers are empowered to make the best decisions for their health journey. Our content is curated by medical professionals and patient advocates to ensure accuracy and relevance.</p>
                        </div>
                        <div>
                        <Image src="https://placehold.co/600x400.png" alt="Team of doctors" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="doctors team" />
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-20 bg-background">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-3xl font-bold text-primary mb-4">Get In Touch</h3>
                        <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">Have questions, need support, or want to share your story? Reach out to us!</p>
                        <Card className="max-w-lg mx-auto shadow-xl border-primary/20 bg-card">
                            <CardContent className="pt-6">
                                <form className="space-y-4">
                                    <Input type="text" placeholder="Your Name" />
                                    <Input type="email" placeholder="Your Email" />
                                    <Textarea placeholder="Your Message" rows={5} />
                                    <Button type="submit" size="lg" className="w-full">Send Message</Button>

                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>

            <footer className="bg-primary/90 text-primary-foreground">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#about" className="hover:underline opacity-80 hover:opacity-100">About Us</a></li>
                                <li><Link href="/kidney-health" className="hover:underline opacity-80 hover:opacity-100">Kidney Health</Link></li>
                                <li><a href="#faq" className="hover:underline opacity-80 hover:opacity-100">FAQs</a></li>
                                <li><a href="#contact" className="hover:underline opacity-80 hover:opacity-100">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                            <div className="flex justify-center md:justify-start space-x-4">
                                <a href="#" aria-label="Facebook" className="opacity-80 hover:opacity-100"><Facebook /></a>
                                <a href="#" aria-label="Twitter" className="opacity-80 hover:opacity-100"><Twitter /></a>
                                <a href="#" aria-label="Instagram" className="opacity-80 hover:opacity-100"><Instagram /></a>
                                <a href="#" aria-label="LinkedIn" className="opacity-80 hover:opacity-100"><Linkedin /></a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
                            <ul className="space-y-2 opacity-80">
                                <li>Dept of Nephrology Command Hospital, Pune.</li>
                                <li>Email: nirogyam93@gmail.com</li>
                                <li>Phone: (123) 456-7890</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center text-sm border-t border-primary-foreground/20 pt-6 mt-6">
                        <p>&copy; 2025 Nirogyam. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

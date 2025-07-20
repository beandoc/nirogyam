
'use client';

import React, { useState } from 'react';
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
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
  Stethoscope,
  Utensils,
  MessageSquare,
  Calendar,
  BookOpen,
  Hospital,
  Menu,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  HeartPulse,
  Leaf,
  GraduationCap,
  Users,
  CheckCircle,
  FileText,
  TestTube,
  Diamond,
  HeartHandshake,
  ArrowRight,
  Shield,
  Gauge,
  Sparkles,
  Wind,
  Droplet,
  Hand,
  Ban,
  ClipboardCheck,
  TestTube2,
  Apple,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


const FaqItem = ({ question, answer, value }: { question: string, answer: string, value: string }) => {
  return (
    <AccordionItem value={value} className="border-b bg-background rounded-lg mb-2">
        <AccordionTrigger className="text-lg font-semibold text-foreground/90 hover:no-underline p-4 rounded-lg">
            {question}
        </AccordionTrigger>
        <AccordionContent className="text-foreground/80 mt-1 p-4 pt-0 text-base rounded-lg">
            {answer}
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


export default function NirogyamPage() {
    
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

                    <nav className="hidden md:flex items-center">
                      <NavigationMenu>
                        <NavigationMenuList>
                           <NavigationMenuItem>
                            <NavigationMenuTrigger>Kidney Health</NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <div className="grid w-[600px] grid-cols-[1fr_2fr]">
                                <div className="p-4 bg-primary/5">
                                    <Link href="/" className="flex items-center font-semibold text-primary mb-4">
                                      Kidney Health <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                    <div className="flex flex-col gap-1">
                                      <NavigationMenuLink asChild>
                                        <Link href="#kidney-topic" className="p-3 font-semibold bg-primary/10 rounded-md">Kidney Topics</Link>
                                      </NavigationMenuLink>
                                      <NavigationMenuLink asChild>
                                        <Link href="#" className="p-3 rounded-md hover:bg-accent">News & Stories</Link>
                                      </NavigationMenuLink>
                                      <NavigationMenuLink asChild>
                                        <Link href="#assess-kidney" className="p-3 rounded-md hover:bg-accent">Assess Your Kidney Health</Link>
                                      </NavigationMenuLink>
                                      <NavigationMenuLink asChild>
                                        <Link href="#renal-nutrition" className="p-3 rounded-md hover:bg-accent">Diet & Nutrition</Link>
                                      </NavigationMenuLink>
                                    </div>
                                </div>
                                <div className="p-4 grid grid-cols-2 gap-4">
                                  <div>
                                    <h3 className="text-sm font-semibold text-muted-foreground mb-2 px-3">FEATURED TOPICS</h3>
                                    <ul className="flex flex-col gap-1">
                                      <li><Link href="/ckd-explained" className="p-3 block hover:bg-accent rounded-md">Chronic Kidney Disease (CKD)</Link></li>
                                      <li><Link href="/egfr-explained" className="p-3 block hover:bg-accent rounded-md">eGFR Explained</Link></li>
                                      <li><Link href="/creatinine-explained" className="p-3 block hover:bg-accent rounded-md">Creatinine Explained</Link></li>
                                      <li><Link href="/stages-of-ckd" className="p-3 block hover:bg-accent rounded-md">Stages of Chronic Kidney Disease (CKD)</Link></li>
                                      <li><Link href="/kidney-function-tests" className="p-3 block hover:bg-accent rounded-md">Kidney Function Tests</Link></li>
                                      <li><Link href="/kidney-stones" className="p-3 block hover:bg-accent rounded-md">Kidney Stones</Link></li>
                                      <li><Link href="/kidney-transplant" className="p-3 block hover:bg-accent rounded-md">Kidney Transplant</Link></li>
                                      <li><a href="#" className="p-3 block text-primary hover:bg-accent rounded-md font-semibold">See All Kidney Topics</a></li>
                                    </ul>
                                  </div>
                                  <div>
                                    <h3 className="text-sm font-semibold text-muted-foreground mb-2 px-3">BROWSE BY CATEGORY</h3>
                                     <ul className="flex flex-col gap-1">
                                      <li><a href="#" className="p-3 block hover:bg-accent rounded-md">Diet and nutrition</a></li>
                                      <li><a href="#" className="p-3 block hover:bg-accent rounded-md">Diseases and conditions</a></li>
                                      <li><a href="#" className="p-3 block hover:bg-accent rounded-md">Prevention, daily life, and wellbeing</a></li>
                                      <li><a href="#" className="p-3 block hover:bg-accent rounded-md">Tests and procedures</a></li>
                                      <li><a href="#" className="p-3 block hover:bg-accent rounded-md">Treatments and therapies</a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger>Treatment &amp; Support</NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <div className="grid w-[600px] grid-cols-[1fr_2fr]">
                                <div className="p-4 bg-primary/5">
                                    <Link href="/" className="flex items-center font-semibold text-primary mb-4">
                                      Treatment &amp; Support <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                    <div className="flex flex-col gap-1">
                                      <NavigationMenuLink asChild>
                                        <Link href="#" className="p-3 font-semibold bg-primary/10 rounded-md flex justify-between items-center">Dialysis <ArrowRight className="h-4 w-4" /></Link>
                                      </NavigationMenuLink>
                                      <NavigationMenuLink asChild>
                                        <Link href="/kidney-transplant" className="p-3 rounded-md hover:bg-accent flex justify-between items-center">Transplant <ArrowRight className="h-4 w-4" /></Link>
                                      </NavigationMenuLink>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-sm font-semibold text-muted-foreground mb-2 px-3">FEATURED TOPICS</h3>
                                    <ul className="flex flex-col gap-1">
                                      <li><a href="#" className="p-3 block hover:bg-accent rounded-md">Dialysis</a></li>
                                      <li><a href="#" className="p-3 block hover:bg-accent rounded-md">Hemodialysis</a></li>
                                      <li><a href="#" className="p-3 block hover:bg-accent rounded-md">Peritoneal Dialysis</a></li>
                                      <li><a href="#" className="p-3 block hover:bg-accent rounded-md">Home Dialysis</a></li>
                                      <li><a href="#" className="p-3 block hover:bg-accent rounded-md">Coping Effectively</a></li>
                                    </ul>
                                </div>
                              </div>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger>Transplantation</NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                  <NavigationMenuLink asChild>
                                    <a
                                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                      href="/kidney-transplant"
                                    >
                                      <HeartHandshake className="h-6 w-6" />
                                      <div className="mb-2 mt-4 text-lg font-medium">
                                        Kidney Transplant
                                      </div>
                                      <p className="text-sm leading-tight text-muted-foreground">
                                        A new beginning. Learn about the process and benefits.
                                      </p>
                                    </a>
                                  </NavigationMenuLink>
                                </li>
                                <ListItem href="/kidney-transplant" title="About Transplants">
                                  What to expect from the transplant journey.
                                </ListItem>
                                <ListItem href="#" title="Living Donation">
                                  How to become a living donor and save a life.
                                </ListItem>
                                <ListItem href="#" title="Patient Stories">
                                  Real stories from transplant recipients.
                                </ListItem>
                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                           <NavigationMenuItem>
                            <Link href="#" legacyBehavior passHref>
                              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                For Professionals
                              </NavigationMenuLink>
                            </Link>
                          </NavigationMenuItem>
                           <NavigationMenuItem>
                            <Link href="#" legacyBehavior passHref>
                              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Take Action
                              </NavigationMenuLink>
                            </Link>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                    </nav>

                     <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <SheetHeader>
                                    <SheetTitle>Nirogyam</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col space-y-4 mt-8">
                                    <Button variant="link" asChild><a href="#kidney-topic">Kidney Topics</a></Button>
                                    <Button variant="link" asChild><a href="#renal-nutrition">Renal Nutrition</a></Button>
                                    <Button variant="link" asChild><a href="#assess-kidney">Risk Quiz</a></Button>
                                    <Button variant="link" asChild><a href="#services">Services</a></Button>
                                    <Button variant="link" asChild><a href="#faq">FAQs</a></Button>
                                    <Button variant="link" asChild><a href="#contact">Contact Us</a></Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>

            <main>
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
                                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><a href="#kidney-topic" className="hover:underline">Explore Kidney Topics</a></li>
                                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><a href="#renal-nutrition" className="hover:underline">Diet &amp; Nutrition Guides</a></li>
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
                                       <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><a href="#clinical-resources" className="hover:underline">Access Clinical Resources</a></li>
                                       <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><a href="#latest-research" className="hover:underline">Review Latest Research</a></li>
                                       <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><a href="#treatment-guidelines" className="hover:underline">Consult Treatment Guidelines</a></li>
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
                                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><a href="#support-resources" className="hover:underline">Find Support Resources</a></li>
                                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><a href="#diet-planning" className="hover:underline">Get Help with Diet Planning</a></li>
                                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><a href="#treatment-preparation" className="hover:underline">Prepare for Treatments</a></li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                
                 <section id="kidney-topic" className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-primary">Explore Kidney Topics</h3>
                            <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">Dive deep into common topics to understand your kidney health.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="text-center p-4">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                                        <HeartPulse className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle>CKD Explained</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-foreground/80 mb-4">Learn about Chronic Kidney Disease, its causes, symptoms, and progression.</p>
                                    <Button asChild variant="link">
                                        <Link href="/ckd-explained">Learn More</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                            <Card className="text-center p-4">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                                        <FileText className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle>eGFR Explained</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-foreground/80 mb-4">Understand what your estimated Glomerular Filtration Rate (eGFR) means for your kidney health.</p>
                                    <Button asChild variant="link">
                                        <Link href="/egfr-explained">Learn More</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                             <Card className="text-center p-4">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                                        <GraduationCap className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle>Stages of CKD</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-foreground/80 mb-4">Find out about the different stages of CKD and what they mean for your treatment plan.</p>
                                    <Button asChild variant="link">
                                        <Link href="/stages-of-ckd">Learn More</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                            <Card className="text-center p-4">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                                        <TestTube className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle>Kidney Function Tests</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-foreground/80 mb-4">A guide to the various tests used to monitor your kidney health.</p>
                                    <Button asChild variant="link">
                                        <Link href="/kidney-function-tests">Learn More</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                             <Card className="text-center p-4">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                                        <Diamond className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle>Kidney Stones</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-foreground/80 mb-4">Learn about the causes, symptoms, and treatments for kidney stones.</p>
                                    <Button asChild variant="link">
                                        <Link href="/kidney-stones">Learn More</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                            <Card className="text-center p-4">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                                        <HeartHandshake className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle>Kidney Transplant</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-foreground/80 mb-4">Explore the process and benefits of receiving a kidney transplant.</p>
                                    <Button asChild variant="link">
                                        <Link href="/kidney-transplant">Learn More</Link>
                                    </Button>
                                </CardContent>
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

                <section id="prevention-tips" className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-primary">Guarding Your Health: Simple Tips for Happy Kidneys</h3>
                            <p className="text-lg text-foreground/80 mt-2 max-w-3xl mx-auto">
                                Small, consistent habits can make a big difference in keeping your kidneys healthy. Here are some simple tips to keep your kidneys smiling.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="text-center p-4">
                                <CardHeader className="items-center">
                                    <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                                        <Gauge className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle>Maintain Normal Blood Pressure</CardTitle>
                                </CardHeader>
                            </Card>
                             <Card className="text-center p-4">
                                <CardHeader className="items-center">
                                    <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                                        <Hand className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle>Hand Hygiene</CardTitle>
                                </CardHeader>
                            </Card>
                            <Card className="text-center p-4">
                                <CardHeader className="items-center">
                                    <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                                        <Ban className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle>Avoid Pain Killers</CardTitle>
                                </CardHeader>
                            </Card>
                             <Card className="text-center p-4">
                                <CardHeader className="items-center">
                                    <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                                        <Droplet className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle>Check Blood Sugar</CardTitle>
                                </CardHeader>
                            </Card>
                            <Card className="text-center p-4">
                                <CardHeader className="items-center">
                                    <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                                        <Apple className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle>Healthy Diet</CardTitle>
                                </CardHeader>
                            </Card>
                             <Card className="text-center p-4">
                                <CardHeader className="items-center">
                                    <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                                        <TestTube2 className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle>Test for Protein in Urine</CardTitle>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                <section id="renal-nutrition" className="py-20 bg-card">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-primary">Renal Nutrition Guide</h3>
                             <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">Proper nutrition is crucial. Explore resources on dietary guidelines for all stages of kidney disease.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                           <Card className="overflow-hidden group">
                             <Image src="https://placehold.co/600x400.png" alt="Healthy food" width={600} height={400} className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300" data-ai-hint="healthy food" />
                             <CardHeader><CardTitle>Diet for Early Stages</CardTitle></CardHeader>
                             <CardContent><p className="text-foreground/80">Learn the best foods to support kidney function in early CKD stages.</p></CardContent>
                           </Card>
                           <Card className="overflow-hidden group">
                             <Image src="https://placehold.co/600x400.png" alt="Low potassium foods" width={600} height={400} className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300" data-ai-hint="low potassium food" />
                             <CardHeader><CardTitle>Managing Potassium</CardTitle></CardHeader>
                             <CardContent><p className="text-foreground/80">Tips and food lists to help control potassium levels in your diet.</p></CardContent>
                           </Card>
                           <Card className="overflow-hidden group">
                              <Image src="https://placehold.co/600x400.png" alt="Low phosphorus foods" width={600} height={400} className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300" data-ai-hint="low phosphorus food" />
                             <CardHeader><CardTitle>Controlling Phosphorus</CardTitle></CardHeader>
                             <CardContent><p className="text-foreground/80">Understand phosphorus restrictions and find smart food choices.</p></CardContent>
                           </Card>
                        </div>
                    </div>
                </section>
                
                 <section id="kidney-conversations" className="py-20 bg-background">
                    <div className="container mx-auto px-4 text-center">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-primary">Kidney Conversations</h3>
                            <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">Tune into our podcasts for in-depth discussions with experts, patient stories, and the latest advancements in kidney care.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card>
                                <CardHeader><CardTitle>Episode 1: Understanding CKD</CardTitle></CardHeader>
                                <CardContent>
                                    <p className="text-foreground/80 mb-4">An introductory episode covering the basics of Chronic Kidney Disease.</p>
                                    <audio controls className="w-full">
                                        <source src="placeholder_podcast_1.mp3" type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader><CardTitle>Episode 2: The Role of Diet</CardTitle></CardHeader>
                                <CardContent>
                                    <p className="text-foreground/80 mb-4">Expert insights on managing your diet for kidney health.</p>
                                    <audio controls className="w-full">
                                        <source src="placeholder_podcast_2.mp3" type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader><CardTitle>Episode 3: Patient Stories</CardTitle></CardHeader>
                                <CardContent>
                                    <p className="text-foreground/80 mb-4">Inspiring journeys from individuals living with kidney disease.</p>
                                    <audio controls className="w-full">
                                        <source src="placeholder_podcast_3.mp3" type="audio/mpeg" />
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

                <section id="services" className="py-20 bg-card">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                           <h3 className="text-3xl font-bold text-primary">Our Comprehensive Services</h3>
                           <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">We provide a wide range of resources and tools to support you at every stage of your journey.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="text-center p-6 bg-background rounded-lg">
                                <Stethoscope className="mx-auto h-12 w-12 text-primary mb-4" />
                                <h4 className="text-xl font-semibold mb-3">Expert Articles</h4>
                                <p className="text-foreground/80">Access a wealth of information written and reviewed by kidney health experts.</p>
                            </div>
                            <div className="text-center p-6 bg-background rounded-lg">
                                <Utensils className="mx-auto h-12 w-12 text-primary mb-4" />
                                <h4 className="text-xl font-semibold mb-3">Dietary Guidance</h4>
                                <p className="text-foreground/80">Find kidney-friendly recipes and personalized nutrition advice.</p>
                            </div>
                            <div className="text-center p-6 bg-background rounded-lg">
                                <MessageSquare className="mx-auto h-12 w-12 text-primary mb-4" />
                                <h4 className="text-xl font-semibold mb-3">Support Forums</h4>
                                <p className="text-foreground/80">Connect with a community of patients and caregivers for shared experiences.</p>
                            </div>
                            <div className="text-center p-6 bg-background rounded-lg">
                                <Calendar className="mx-auto h-12 w-12 text-primary mb-4" />
                                <h4 className="text-xl font-semibold mb-3">Event Calendar</h4>
                                <p className="text-foreground/80">Stay informed about upcoming webinars, workshops, and awareness campaigns.</p>
                            </div>
                             <div className="text-center p-6 bg-background rounded-lg">
                                <BookOpen className="mx-auto h-12 w-12 text-primary mb-4" />
                                <h4 className="text-xl font-semibold mb-3">Resource Library</h4>
                                <p className="text-foreground/80">Downloadable guides, infographics, and other helpful resources.</p>
                            </div>
                            <div className="text-center p-6 bg-background rounded-lg">
                                <Hospital className="mx-auto h-12 w-12 text-primary mb-4" />
                                <h4 className="text-xl font-semibold mb-3">Find a Specialist</h4>
                                <p className="text-foreground/80">Directory of nephrologists and kidney care centers near you.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-3xl font-bold text-primary mb-12">What Our Community Says</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="border-primary/20 bg-card">
                                <CardContent className="pt-6">
                                    <p className="text-foreground/80 italic mb-4">"Nirogyam has been an invaluable resource in understanding my kidney condition. The information is so clear and easy to understand."</p>
                                    <p className="font-semibold text-primary">- Priya S.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-primary/20 bg-card">
                               <CardContent className="pt-6">
                                    <p className="text-foreground/80 italic mb-4">"The dietary advice provided here has significantly helped me manage my diet and feel better. Highly recommend!"</p>
                                    <p className="font-semibold text-primary">- Rajesh K.</p>
                                </CardContent>
                            </Card>
                             <Card className="border-primary/20 bg-card">
                                <CardContent className="pt-6">
                                    <p className="text-foreground/80 italic mb-4">"The assessment tool was a great starting point for me to realize the importance of kidney health."</p>
                                    <p className="font-semibold text-primary">- Sunita R.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                
                <section id="faq" className="py-20 bg-card">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                           <h3 className="text-3xl font-bold text-primary">Frequently Asked Questions</h3>
                           <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">Find quick answers to common questions about kidney health and treatment.</p>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <Accordion type="single" collapsible className="w-full space-y-3">
                                <FaqItem 
                                    value="item-1"
                                    question="What are the early signs of kidney disease?"
                                    answer="Early signs can be subtle and include fatigue, swelling in legs, ankles, or feet, changes in urination frequency, muscle cramps, and dry, itchy skin."
                                />
                                <FaqItem
                                    value="item-2"
                                    question="How can diet affect kidney health?"
                                    answer="Diet plays a crucial role. A kidney-friendly diet often involves limiting sodium, potassium, and phosphorus intake, and managing protein consumption."
                                />
                                <FaqItem
                                    value="item-3"
                                    question="What is the difference between hemodialysis and peritoneal dialysis?"
                                    answer="Hemodialysis uses an artificial kidney machine to filter waste and excess fluid from your blood, typically done at a clinic. Peritoneal dialysis uses the lining of your abdomen (peritoneum) to filter blood inside your body, which can often be done at home."
                                />
                            </Accordion>
                        </div>
                    </div>
                </section>

                 <section id="about" className="py-20 bg-background">
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

                <section id="contact" className="py-20 bg-card">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-3xl font-bold text-primary mb-4">Get In Touch</h3>
                        <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">Have questions, need support, or want to share your story? Reach out to us!</p>
                        <Card className="max-w-lg mx-auto shadow-xl border-primary/20 bg-background">
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
                                <li><a href="#services" className="hover:underline opacity-80 hover:opacity-100">Services</a></li>
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

    

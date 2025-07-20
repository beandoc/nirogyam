
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
  Calculator,
  Home,
  Droplet,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppHeader } from '@/components/AppHeader';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { usePathname } from 'next/navigation';
import en from '@/locales/en.json';
import hi from '@/locales/hi.json';


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

const Quiz = ({ t }: { t: any }) => {
    const questions = t.home.quiz.questions;

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
                <h4 className="text-xl font-bold text-primary mb-4">{t.home.quiz.result.title}</h4>
                <p className="text-foreground/80 mb-4">{t.home.quiz.result.description}</p>
                <Button onClick={restartQuiz}>{t.home.quiz.result.retakeButton}</Button>
            </div>
        )
    }

    return (
        <Card className="max-w-xl mx-auto p-2 sm:p-8 shadow-xl border-primary/20">
          <CardContent className="pt-6">
            <div>
                {questions.map((q: string, index: number) => (
                    <div key={index} className={cn({ 'hidden': currentQuestion !== index })}>
                        <p className="text-lg font-semibold text-foreground mb-4">{`${index + 1}. ${q}`}</p>
                        <div className="space-y-3">
                             <label className="flex items-center text-foreground/90 cursor-pointer text-base p-3 rounded-md border border-input has-[:checked]:bg-primary/10 has-[:checked]:border-primary transition-colors">
                                <input type="radio" name={`q${index}`} value="yes" className="mr-3 h-4 w-4" onChange={(e) => handleAnswer(index, e.target.value)} checked={answers[index] === 'yes'} /> {t.home.quiz.options.yes}
                            </label>
                            <label className="flex items-center text-foreground/90 cursor-pointer text-base p-3 rounded-md border border-input has-[:checked]:bg-primary/10 has-[:checked]:border-primary transition-colors">
                                <input type="radio" name={`q${index}`} value="no" className="mr-3 h-4 w-4" onChange={(e) => handleAnswer(index, e.target.value)} checked={answers[index] === 'no'} /> {t.home.quiz.options.no}
                            </label>
                           {index < 3 && <label className="flex items-center text-foreground/90 cursor-pointer text-base p-3 rounded-md border border-input has-[:checked]:bg-primary/10 has-[:checked]:border-primary transition-colors">
                                <input type="radio" name={`q${index}`} value="unsure" className="mr-3 h-4 w-4" onChange={(e) => handleAnswer(index, e.target.value)} checked={answers[index] === 'unsure'} /> {t.home.quiz.options.unsure}
                            </label>}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={prevQuestion} className={cn({ 'invisible': currentQuestion === 0 })}>{t.home.quiz.buttons.previous}</Button>
                {currentQuestion < questions.length - 1 && <Button onClick={nextQuestion}>{t.home.quiz.buttons.next}</Button>}
                {currentQuestion === questions.length - 1 && <Button onClick={handleSubmit}>{t.home.quiz.buttons.submit}</Button>}
            </div>
          </CardContent>
        </Card>
    );
};

const EgfrCalculator = ({ t }: { t: any }) => {
    const [creatinine, setCreatinine] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState<'male' | 'female' | ''>('');
    const [egfrResult, setEgfrResult] = useState<number | null>(null);

    const calculateEgfr = (e: React.FormEvent) => {
        e.preventDefault();
        const scr = parseFloat(creatinine);
        const patientAge = parseInt(age, 10);

        if (isNaN(scr) || isNaN(patientAge) || !sex) {
            alert(t.home.egfrCalculator.alert);
            return;
        }

        const kappa = sex === 'female' ? 0.7 : 0.9;
        const alpha = sex === 'female' ? -0.241 : -0.302;
        const sexFactor = sex === 'female' ? 1.012 : 1;

        const scrOverKappa = scr / kappa;
        
        const term1 = Math.min(scrOverKappa, 1) ** alpha;
        const term2 = Math.max(scrOverKappa, 1) ** -1.200;
        const term3 = 0.9938 ** patientAge;

        const result = 142 * term1 * term2 * term3 * sexFactor;
        setEgfrResult(Math.round(result));
    };

    return (
        <Card className="max-w-xl mx-auto shadow-xl border-primary/20">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                    <Calculator className="h-6 w-6" />
                    {t.home.egfrCalculator.title}
                </CardTitle>
                <CardDescription>
                    {t.home.egfrCalculator.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={calculateEgfr} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="creatinine">{t.home.egfrCalculator.form.creatinine.label}</Label>
                        <Input
                            id="creatinine"
                            type="number"
                            step="0.01"
                            placeholder={t.home.egfrCalculator.form.creatinine.placeholder}
                            value={creatinine}
                            onChange={(e) => setCreatinine(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="age">{t.home.egfrCalculator.form.age.label}</Label>
                        <Input
                            id="age"
                            type="number"
                            placeholder={t.home.egfrCalculator.form.age.placeholder}
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>{t.home.egfrCalculator.form.sex.label}</Label>
                        <RadioGroup onValueChange={(value) => setSex(value as 'male' | 'female')} value={sex} className="flex gap-4">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="female" id="female" />
                                <Label htmlFor="female">{t.home.egfrCalculator.form.sex.female}</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="male" id="male" />
                                <Label htmlFor="male">{t.home.egfrCalculator.form.sex.male}</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <Button type="submit" className="w-full">{t.home.egfrCalculator.form.button}</Button>
                </form>
                {egfrResult !== null && (
                    <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg text-center">
                        <p className="text-lg text-foreground/80">{t.home.egfrCalculator.result.prefix}</p>
                        <p className="text-4xl font-bold text-primary my-2">{egfrResult}</p>
                        <p className="text-sm text-muted-foreground">{t.home.egfrCalculator.result.unit}</p>
                        <p className="mt-4 text-xs text-foreground/70">
                            {t.home.egfrCalculator.result.disclaimer}
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

const WhatsAppIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current">
        <path d="M17.472 14.382c-.297-.149-.88-.436-1.017-.486s-.282-.08-.41.08c-.128.16-.49.614-.602.737-.112.123-.224.137-.41.04-.187-.097-.796-.293-1.517-.925-.568-.487-.945-1.09-.945-1.09s-.04-.055.03-.105c.06-.05.136-.123.204-.195.07-.07.09-.123.136-.203.048-.08.024-.15-.014-.24-.038-.09-.41-.986-.562-1.355-.15-.37-.304-.32-.41-.326-.102-.005-.224-.005-.346-.005s-.33.04-.49.195c-.16.155-.613.59-.613,1.44s.627,1.66.713,1.78c.085.12.97,1.48,2.34,2.05.34.14.58.22.77.28.32.09.62.08.86.05.28-.04.88-.36,1-1.004.12-.644.12-.97.08-1.014s-.07-.07-.15-.123zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18.15c-4.477 0-8.125-3.648-8.125-8.125S7.523 3.875 12 3.875 20.125 7.523 20.125 12 16.477 20.15 12 20.15z" />
    </svg>
);


export default function NirogyamPage({ params: { lang } }: { params: { lang: string } }) {
    const [isClient, setIsClient] = useState(false);
    const t = lang === 'hi' ? hi : en;

    useEffect(() => {
        setIsClient(true);
    }, []);

    const ContactForm = () => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');

        const handleSendMessage = () => {
            const subject = encodeURIComponent(`${t.home.contact.form.subjectPrefix} ${name}`);
            const body = encodeURIComponent(
                `${t.home.contact.form.bodyName}: ${name}\n${t.home.contact.form.bodyEmail}: ${email}\n\n${t.home.contact.form.bodyMessage}:\n${message}`
            );
            window.location.href = `mailto:nirogyam93@gmail.com?subject=${subject}&body=${body}`;
        };

        return (
            <Card className="max-w-lg mx-auto shadow-xl border-primary/20 bg-card">
                <CardContent className="pt-6">
                    <div className="space-y-4">
                        <Input 
                            type="text" 
                            placeholder={t.home.contact.form.namePlaceholder} 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input 
                            type="email" 
                            placeholder={t.home.contact.form.emailPlaceholder}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Textarea 
                            placeholder={t.home.contact.form.messagePlaceholder} 
                            rows={5} 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button size="lg" className="w-full" onClick={handleSendMessage}>
                            {t.home.contact.form.sendButton}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );
    };
    
    return (
        <div className="bg-background text-foreground flex-1 flex flex-col min-h-screen">
            <AppHeader />

            <main className="flex-grow">
                <section className="hero-pattern py-20 md:py-24">
                    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-4 tracking-tight">{t.home.hero.title}</h2>
                            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl">{t.home.hero.subtitle}</p>
                            <Button size="lg" asChild>
                                <a href="#assess-kidney">{t.home.hero.ctaButton}</a>
                            </Button>
                        </div>
                        <div className="hidden md:block">
                            <Image src="/herosection_image.png" alt={t.home.hero.imageAlt} width={600} height={400} className="rounded-lg shadow-xl" data-ai-hint="doctors patient kidney" />
                        </div>
                    </div>
                </section>

                <section id="iam-a-section" className="py-20 bg-card">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-primary mb-4">{t.home.help.title}</h3>
                            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                                {t.home.help.subtitle}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-center">
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-primary/10 rounded-full mb-3"><HeartPulse className="h-10 w-10 text-primary"/></div>
                                    <CardTitle className="text-primary text-2xl">{t.home.help.cards.ckd.title}</CardTitle>
                                    <CardDescription>{t.home.help.cards.ckd.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="text-foreground/80 text-left space-y-3">
                                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><Link href={`/${lang}/kidney-health`} className="hover:underline">{t.home.help.cards.ckd.link}</Link></li>
                                    </ul>
                                </CardContent>
                            </Card>
                             <Card className="hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-center">
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-primary/10 rounded-full mb-3"><Droplet className="h-10 w-10 text-primary"/></div>
                                    <CardTitle className="text-primary text-2xl">{t.home.help.cards.hemodialysis.title}</CardTitle>
                                    <CardDescription>{t.home.help.cards.hemodialysis.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="text-foreground/80 text-left space-y-3">
                                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><Link href={`/${lang}/hemodialysis`} className="hover:underline">{t.home.help.cards.hemodialysis.link}</Link></li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-center">
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-primary/10 rounded-full mb-3"><Home className="h-10 w-10 text-primary"/></div>
                                    <CardTitle className="text-primary text-2xl">{t.home.help.cards.peritoneal.title}</CardTitle>
                                    <CardDescription>{t.home.help.cards.peritoneal.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="text-foreground/80 text-left space-y-3">
                                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><Link href={`/${lang}/peritoneal-dialysis`} className="hover:underline">{t.home.help.cards.peritoneal.link}</Link></li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                
                <section id="digital-toolkits" className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-primary">{t.home.toolkits.title}</h3>
                            <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">{t.home.toolkits.subtitle}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                           {t.home.toolkits.cards.map((toolkit: any, index: number) => (
                                <Card key={index} className="flex flex-col">
                                    <Image src={toolkit.image} alt={toolkit.title} width={600} height={400} className="rounded-t-lg" data-ai-hint={toolkit.aiHint} />
                                    <CardHeader>
                                        <CardTitle>{toolkit.title}</CardTitle>
                                        <CardDescription>{toolkit.description}</CardDescription>
                                    </CardHeader>
                                    <CardFooter className="mt-auto">
                                        <Button asChild className="w-full">
                                            <Link href={`/${lang}${toolkit.href}`}>{t.home.toolkits.launchButton} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                
                <section id="assess-kidney" className="py-20 bg-card">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-primary">{t.home.quiz.title}</h3>
                            <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">{t.home.quiz.subtitle}</p>
                        </div>
                        <Quiz t={t} />
                    </div>
                </section>

                <section id="egfr-calculator" className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-primary">{t.home.egfrCalculator.sectionTitle}</h3>
                            <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">{t.home.egfrCalculator.sectionSubtitle}</p>
                        </div>
                        <EgfrCalculator t={t} />
                    </div>
                </section>

                <section id="renal-nutrition" className="py-20 bg-card">
                    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-lg overflow-hidden shadow-xl">
                            <Image src="/foodbasics.png" alt={t.home.nutrition.imageAlt} width={600} height={600} className="object-cover" data-ai-hint="healthy food plate" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-primary mb-6">{t.home.nutrition.title}</h3>
                            <p className="text-lg text-foreground/80 mb-6">
                               {t.home.nutrition.description}
                            </p>
                            <Button size="lg" asChild>
                                <Link href={`/${lang}/renal-nutrition`}>{t.home.nutrition.ctaButton} <ArrowRight className="ml-2 h-4 w-4"/></Link>
                            </Button>
                        </div>
                    </div>
                </section>
                
                {isClient && (
                <section id="kidney-conversations" className="py-20 bg-background">
                    <div className="container mx-auto px-4 text-center">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-primary">{t.home.podcasts.title}</h3>
                            <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">{t.home.podcasts.subtitle}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                             {t.home.podcasts.episodes.map((episode: any, index: number) => (
                                <Card key={index}>
                                    <CardHeader><CardTitle className="text-primary">{episode.title}</CardTitle></CardHeader>
                                    <CardContent>
                                        <p className="text-foreground/80 mb-4">{episode.description}</p>
                                        <video controls className="w-full">
                                            <source src={episode.src} type="video/mp4" />
                                            {t.home.podcasts.videoError}
                                        </video>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="mt-12">
                            <Button size="lg" variant="outline">{t.home.podcasts.moreButton}</Button>
                        </div>
                    </div>
                </section>
                )}
                
                <section id="faq" className="py-20 bg-card">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-primary">{t.home.faq.title}</h3>
                        <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">{t.home.faq.subtitle}</p>
                        </div>
                        <Tabs defaultValue="general" className="max-w-3xl mx-auto">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="general">{t.home.faq.tabs.general}</TabsTrigger>
                                <TabsTrigger value="living">{t.home.faq.tabs.living}</TabsTrigger>
                                <TabsTrigger value="deceased">{t.home.faq.tabs.deceased}</TabsTrigger>
                            </TabsList>
                            <TabsContent value="general">
                                <Accordion type="single" collapsible className="w-full space-y-3">
                                    {t.home.faq.generalFaqs.map((faq: any, index: number) => (
                                        <FaqItem key={`general-${index}`} value={`item-${index}`} question={faq.question}>
                                            <p>{faq.answer}</p>
                                        </FaqItem>
                                    ))}
                                </Accordion>
                            </TabsContent>
                            <TabsContent value="living">
                                <Accordion type="single" collapsible className="w-full space-y-3">
                                    {t.home.faq.livingDonationFaqs.map((faq: any, index: number) => (
                                        <FaqItem key={`living-${index}`} value={`item-${index}`} question={faq.question}>
                                            {faq.answer.map((p: any, i: number) => (
                                                <div key={i}>
                                                  <p>{p.text}</p>
                                                  {p.list && <ul className="list-disc pl-6 mt-2 space-y-1">{p.list.map((item: string, j:number) => <li key={j}>{item}</li>)}</ul>}
                                                </div>
                                            ))}
                                        </FaqItem>
                                    ))}
                                </Accordion>
                            </TabsContent>
                            <TabsContent value="deceased">
                                <Accordion type="single" collapsible className="w-full space-y-3">
                                    {t.home.faq.deceasedDonationFaqs.map((faq: any, index: number) => (
                                        <FaqItem key={`deceased-${index}`} value={`item-${index}`} question={faq.question}>
                                            <p>{faq.answer}</p>
                                        </FaqItem>
                                    ))}
                                </Accordion>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>

                <section id="about" className="py-20 bg-background">
                    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-bold text-primary mb-6">{t.home.about.title}</h3>
                            <p className="text-lg text-foreground/80 max-w-xl">{t.home.about.description}</p>
                        </div>
                        <div>
                        <Image src="/nirogyamlogo.png" alt={t.home.about.imageAlt} width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="company logo" />
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-20 bg-card">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-3xl font-bold text-primary mb-4">{t.home.contact.title}</h3>
                        <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">{t.home.contact.subtitle}</p>
                        <ContactForm />
                    </div>
                </section>

                <section id="whatsapp-cta" className="py-16 bg-green-50">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-2xl mx-auto">
                            <div className="flex justify-center mb-4">
                               <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 fill-green-600">
                                    <path d="M17.472 14.382c-.297-.149-.88-.436-1.017-.486s-.282-.08-.41.08c-.128.16-.49.614-.602.737-.112.123-.224.137-.41.04-.187-.097-.796-.293-1.517-.925-.568-.487-.945-1.09-.945-1.09s-.04-.055.03-.105c.06-.05.136-.123.204-.195.07-.07.09-.123.136-.203.048-.08.024-.15-.014-.24-.038-.09-.41-.986-.562-1.355-.15-.37-.304-.32-.41-.326-.102-.005-.224-.005-.346-.005s-.33.04-.49.195c-.16.155-.613.59-.613,1.44s.627,1.66.713,1.78c.085.12.97,1.48,2.34,2.05.34.14.58.22.77.28.32.09.62.08.86.05.28-.04.88-.36,1-1.004.12-.644.12-.97.08-1.014s-.07-.07-.15-.123zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18.15c-4.477 0-8.125-3.648-8.125-8.125S7.523 3.875 12 3.875 20.125 7.523 20.125 12 16.477 20.15 12 20.15z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-green-800 mb-4">{t.home.whatsapp.title}</h3>
                            <p className="text-lg text-green-700/80 mb-8 max-w-xl mx-auto">{t.home.whatsapp.subtitle}</p>
                            <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-white">
                                <a href="https://whatsapp.com/channel/0029Vb5gVK6A2pLFXRiHT23R" target="_blank" rel="noopener noreferrer">
                                    {t.home.whatsapp.button}
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-primary/90 text-primary-foreground">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
                        <div>
                            <h4 className="text-xl font-semibold mb-4">{t.footer.quickLinks.title}</h4>
                            <ul className="space-y-2">
                                <li><a href="#about" className="hover:underline opacity-80 hover:opacity-100">{t.footer.quickLinks.about}</a></li>
                                <li><Link href={`/${lang}/kidney-health`} className="hover:underline opacity-80 hover:opacity-100">{t.footer.quickLinks.kidneyHealth}</Link></li>
                                <li><a href="#faq" className="hover:underline opacity-80 hover:opacity-100">{t.footer.quickLinks.faqs}</a></li>
                                <li><a href="#contact" className="hover:underline opacity-80 hover:opacity-100">{t.footer.quickLinks.contact}</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-4">{t.footer.followUs.title}</h4>
                            <div className="flex justify-center md:justify-start space-x-4">
                                <a href="#" aria-label="Facebook" className="opacity-80 hover:opacity-100"><Facebook /></a>
                                <a href="#" aria-label="Twitter" className="opacity-80 hover:opacity-100"><Twitter /></a>
                                <a href="#" aria-label="Instagram" className="opacity-80 hover:opacity-100"><Instagram /></a>
                                <a href="#" aria-label="LinkedIn" className="opacity-80 hover:opacity-100"><Linkedin /></a>
                                <a href="https://whatsapp.com/channel/0029Vb5gVK6A2pLFXRiHT23R" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="opacity-80 hover:opacity-100"><WhatsAppIcon /></a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-4">{t.footer.contactInfo.title}</h4>
                            <ul className="space-y-2 opacity-80">
                                <li>{t.footer.contactInfo.address}</li>
                                <li>{t.footer.contactInfo.email}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center text-sm border-t border-primary-foreground/20 pt-6 mt-6">
                        <p>{t.footer.copyright}</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

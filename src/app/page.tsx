
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Users,
  BookOpen,
  ArrowRight,
  Droplet,
  Shield,
  Mail,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { AppHeader } from '@/components/AppHeader';

// New specialized components
import { Quiz } from '@/components/home/Quiz';
import { EgfrCalculator } from '@/components/home/EgfrCalculator';
import { PodcastSection } from '@/components/home/PodcastSection';
import { ResourceSection } from '@/components/home/ResourceSection';
import { InsightsCarousel } from '@/components/home/InsightsCarousel';
import { FAQSection } from '@/components/home/FAQSection';

// Data
import { toolkits } from '@/lib/data';

export default function NirogyamPage() {
    return (
        <div className="bg-background text-foreground flex-1 flex flex-col min-h-screen">
            <AppHeader />

            <main className="flex-grow">
                <section className="hero-pattern py-20 md:py-32 overflow-hidden">
                    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="text-center lg:text-left space-y-8">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-heading bg-clip-text text-transparent bg-gradient-to-br from-primary via-blue-700 to-indigo-900 leading-[1.1] tracking-tight animate-fade-in-up">
                                Empowering Your <br className="hidden md:block" /> Kidney Health Journey
                            </h2>
                            <p className="text-lg md:text-2xl text-foreground/60 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up-delay">
                                A sovereign, compassionate resource for understanding kidney health and discovering the path to vitality through clinical education.
                            </p>
                             <div className="flex flex-wrap justify-center lg:justify-start gap-5 animate-fade-in-up-delay pt-4">
                                <Button size="lg" className="h-14 px-8 rounded-full text-lg font-bold shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1" asChild>
                                    <a href="#assess-kidney">Assess Your Risk</a>
                                </Button>
                                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-lg font-bold backdrop-blur-md bg-white/30 border-primary/10 hover:bg-white/50 transition-all hover:-translate-y-1" asChild>
                                    <Link href="/kidney-health">Explore Repository</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative animate-float lg:block">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-indigo-500/10 blur-3xl opacity-50 rounded-full" />
                            <div className="relative glass-card p-2 rounded-[2.5rem] shadow-2xl overflow-hidden ring-1 ring-primary/5">
                                <Image src="/herosection_image.png" alt="Medical Illustration" width={800} height={600} className="rounded-[2rem] object-cover w-full h-auto" priority />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="iam-a-section" className="py-20 bg-card">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-primary mb-4">Your Health, Your Journey</h3>
                            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                                Whether you're newly diagnosed, managing a chronic condition, or supporting a loved one, we have resources to guide you.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <Card className="glass-card hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-primary/10 rounded-full mb-3 shadow-inner"><BookOpen className="h-10 w-10 text-primary" strokeWidth={1.5} /></div>
                                    <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 text-2xl">Patient Education</CardTitle>
                                    <CardDescription>Browse our full library of articles on kidney health, diet, and treatment.</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow" />
                                <CardFooter>
                                    <Button asChild className="w-full">
                                        <Link href="/kidney-health">Explore Topics</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className="glass-card hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-primary/10 rounded-full mb-3 shadow-inner"><Droplet className="h-10 w-10 text-primary" strokeWidth={1.5} /></div>
                                    <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 text-2xl">Dialysis Information</CardTitle>
                                    <CardDescription>Learn about treatment options like Hemodialysis and Peritoneal Dialysis.</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow" />
                                <CardFooter>
                                     <Button asChild className="w-full">
                                        <Link href="/kidney-health?q=dialysis">Learn About Dialysis</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className="glass-card hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-primary/10 rounded-full mb-3 shadow-inner"><Users className="h-10 w-10 text-primary" strokeWidth={1.5} /></div>
                                    <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 text-2xl">Transplant Guide</CardTitle>
                                    <CardDescription>Explore the process, benefits, and risks of kidney transplantation.</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow" />
                                <CardFooter>
                                     <Button asChild className="w-full">
                                        <Link href="/kidney-transplant">Explore Transplant</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className="glass-card hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-primary/10 rounded-full mb-3 shadow-inner"><Shield className="h-10 w-10 text-primary" strokeWidth={1.5} /></div>
                                    <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 text-2xl">Glomerulonephritis</CardTitle>
                                    <CardDescription>Learn about this group of diseases that injure the part of the kidney that filters blood.</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow" />
                                <CardFooter>
                                     <Button asChild className="w-full">
                                        <Link href="/glomerulonephritis">Learn More</Link>
                                    </Button>
                                </CardFooter>
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
                           {toolkits.map((toolkit, index) => (
                                <Card key={index} className="flex flex-col">
                                    <Image src={toolkit.image} alt={toolkit.title} width={600} height={400} className="rounded-t-lg" data-ai-hint={toolkit.aiHint} />
                                    <CardHeader>
                                        <CardTitle>{toolkit.title}</CardTitle>
                                        <CardDescription>{toolkit.description}</CardDescription>
                                    </CardHeader>
                                    <CardFooter className="mt-auto">
                                        <Button asChild className="w-full">
                                            <Link href={toolkit.href}>Launch Toolkit <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
                            <h3 className="text-3xl font-bold text-primary">Assess Your Kidney Health</h3>
                            <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">Take our quick assessment to understand your risk factors. Early detection can help prevent or slow the progression of kidney disease.</p>
                        </div>
                        <Quiz />
                    </div>
                </section>

                <section id="egfr-calculator-section" className="py-20 bg-background">
                     <div className="container mx-auto px-4">
                        <EgfrCalculator />
                    </div>
                </section>

                <section id="renal-nutrition" className="py-20 bg-card">
                    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-lg overflow-hidden shadow-xl">
                            <Image src="/foodbasics.png" alt="A colorful plate of healthy food" width={600} height={600} className="object-cover" data-ai-hint="healthy food plate" />
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
                
                <InsightsCarousel />

                <PodcastSection />
                
                <ResourceSection />
                
                <FAQSection />

                <section id="contact" className="py-20 bg-background">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-2xl mx-auto">
                            <Card className="shadow-xl border-primary/20">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 rounded-full h-20 w-20 flex items-center justify-center mb-4">
                                        <Mail className="h-10 w-10 text-primary" />
                                    </div>
                                    <CardTitle className="text-3xl font-bold text-primary">Share Your Story</CardTitle>
                                    <CardDescription className="text-lg">Have questions, need support, or want to tell your story? We're here to listen.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button size="lg" asChild>
                                        <a href="mailto:nirogyam93@gmail.com">Send a Message</a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section id="whatsapp-cta" className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50 border-y border-emerald-100/50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <div className="inline-flex p-4 bg-white rounded-[2rem] shadow-xl shadow-emerald-900/5 ring-1 ring-emerald-100 animate-float">
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-emerald-600">
                                    <path d="M17.472 14.382c-.297-.149-.88-.436-1.017-.486s-.282-.08-.41.08c-.128.16-.49.614-.602.737-.112.123-.224.137-.41.04-.187-.097-.796-.293-1.517-.925-.568-.487-.945-1.09-.945-1.09s-.04-.055.03-.105c.06-.05.136-.123.204-.195.07-.07.09-.123.136-.203.048-.08.024-.15-.014-.24-.038-.09-.41-.986-.562-1.355-.15-.37-.304-.32-.41-.326-.102-.005-.224-.005-.346-.005s-.33.04-.49.195c-.16.155-.613.59-.613,1.44s.627,1.66.713,1.78c.085.12.97,1.48,2.34,2.05.34.14.58.22.77.28.32.09.62.08.86.05.28-.04.88-.36,1-1.004.12-.644.12-.97.08-1.014s-.07-.07-.15-.123zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18.15c-4.477 0-8.125-3.648-8.125-8.125S7.523 3.875 12 3.875 20.125 7.523 20.125 12 16.477 20.15 12 20.15z" />
                                </svg>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black font-heading text-emerald-900 tracking-tight">Healthy Kidneys, Healthy Life</h3>
                            <p className="text-xl text-emerald-800/60 max-w-2xl mx-auto leading-relaxed">Join our WhatsApp sanctuary for daily wisdom, clinical updates, and a community that walks the path to vitality together.</p>
                            <Button size="lg" asChild className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-emerald-200 transition-all hover:-translate-y-1">
                                <a href="https://whatsapp.com/channel/0029Vb5gVK6A2pLFXRiHT23R" target="_blank" rel="noopener noreferrer">
                                    Join Our Community
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-slate-900 text-slate-300">
                <div className="container mx-auto px-4 py-20 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20 text-center md:text-left">
                        <div className="space-y-6">
                            <h4 className="text-2xl font-black font-heading text-white tracking-tight">Nirogyam</h4>
                            <p className="text-slate-400 leading-relaxed max-w-xs mx-auto md:mx-0">Empowering global kidney health through clinical education and community support.</p>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-lg font-bold font-heading text-white uppercase tracking-widest">Navigation</h4>
                            <ul className="space-y-4">
                                <li><a href="#about" className="hover:text-primary transition-colors">About Nirogyam</a></li>
                                <li><Link href="/kidney-health" className="hover:text-primary transition-colors">Kidney Health Repository</Link></li>
                                <li><a href="#faq" className="hover:text-primary transition-colors">Strategic FAQs</a></li>
                                <li><a href="#contact" className="hover:text-primary transition-colors">Direct Contact</a></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-lg font-bold font-heading text-white uppercase tracking-widest">Medical Center</h4>
                            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 inline-block text-left w-full max-w-sm">
                                <p className="text-white font-medium mb-1">Department of Nephrology</p>
                                <p className="text-slate-400">Pune, Maharashtra</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-center items-center gap-4 text-sm font-medium">
                        <p className="text-slate-500">© 2026 Nirogyam Digital Initiative.</p>
                        <span className="hidden md:block h-1 w-1 bg-slate-700 rounded-full" />
                        <p className="text-slate-500">All rights reserved by Department of Nephrology.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}


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

const EgfrCalculator = () => {
    const [creatinine, setCreatinine] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState<'male' | 'female' | ''>('');
    const [egfrResult, setEgfrResult] = useState<number | null>(null);

    const calculateEgfr = (e: React.FormEvent) => {
        e.preventDefault();
        const scr = parseFloat(creatinine);
        const patientAge = parseInt(age, 10);

        if (isNaN(scr) || isNaN(patientAge) || !sex) {
            alert('Please fill in all fields correctly.');
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
                    eGFR Calculator (CKD-EPI 2021)
                </CardTitle>
                <CardDescription>
                    Estimate your Glomerular Filtration Rate using the race-free 2021 CKD-EPI formula. This tool is for informational purposes only.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={calculateEgfr} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="creatinine">Serum Creatinine (mg/dL)</Label>
                        <Input
                            id="creatinine"
                            type="number"
                            step="0.01"
                            placeholder="e.g., 1.2"
                            value={creatinine}
                            onChange={(e) => setCreatinine(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input
                            id="age"
                            type="number"
                            placeholder="e.g., 55"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Sex</Label>
                        <RadioGroup onValueChange={(value) => setSex(value as 'male' | 'female')} value={sex} className="flex gap-4">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="female" id="female" />
                                <Label htmlFor="female">Female</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="male" id="male" />
                                <Label htmlFor="male">Male</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <Button type="submit" className="w-full">Calculate eGFR</Button>
                </form>
                {egfrResult !== null && (
                    <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg text-center">
                        <p className="text-lg text-foreground/80">Your estimated GFR is:</p>
                        <p className="text-4xl font-bold text-primary my-2">{egfrResult}</p>
                        <p className="text-sm text-muted-foreground">mL/min/1.73m²</p>
                        <p className="mt-4 text-xs text-foreground/70">
                            This result is an estimate. Consult a healthcare professional for a proper diagnosis and to understand what this value means for your health.
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


export default function NirogyamPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const ContactForm = () => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');

        const handleSendMessage = () => {
            const subject = encodeURIComponent(`Contact from ${name}`);
            const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            );
            window.location.href = `mailto:nirogyam93@gmail.com?subject=${subject}&body=${body}`;
        };

        return (
            <Card className="max-w-lg mx-auto shadow-xl border-primary/20 bg-card">
                <CardContent className="pt-6">
                    <div className="space-y-4">
                        <Input 
                            type="text" 
                            placeholder="Your Name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input 
                            type="email" 
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Textarea 
                            placeholder="Your Message" 
                            rows={5} 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button size="lg" className="w-full" onClick={handleSendMessage}>
                            Send Message
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );
    };

    const toolkits = [
        {
            "image": "/hemodialysis_image.png",
            "title": "Know Hemodialysis",
            "description": "An interactive guide to understanding hemodialysis.",
            "href": "/toolkits/know-hemodialysis",
            "aiHint": "medical equipment"
        },
        {
            "image": "/ckdassessment.png",
            "title": "CKD Assessment",
            "description": "Assess your risk and stages of Chronic Kidney Disease.",
            "href": "/toolkits/ckd-assessment",
            "aiHint": "medical checklist"
        },
        {
            "image": "/akiriskassessment.png",
            "title": "AKI Risk Assessment",
            "description": "Evaluate the risk factors for Acute Kidney Injury.",
            "href": "/toolkits/aki-risk-assessment",
            "aiHint": "risk assessment"
        },
        {
            "image": "/kidneycarechoice.png",
            "title": "Kidney Care Choices",
            "description": "Explore treatment options and make informed care decisions.",
            "href": "/toolkits/kidney-care-choices",
            "aiHint": "decision tree"
        },
        {
            "image": "/adpkdroadmap.png",
            "title": "ADPKD Road Map",
            "description": "A guide for navigating Autosomal Dominant Polycystic Kidney Disease.",
            "href": "/toolkits/adpkd-road-map",
            "aiHint": "medical roadmap"
        },
        {
            "image": "/kidneybiopsyconsent.png",
            "title": "Biopsy Consent",
            "description": "An interactive guide to understanding the biopsy consent process.",
            "href": "/toolkits/biopsy-consent",
            "aiHint": "medical consent"
        }
    ];

    const podcasts = [
        { "title": "CKD \"A Blind Spot\"", "description": "An introductory episode covering the basics of Chronic Kidney Disease.", "src": "/podcast_episode_1.mp4" },
        { "title": "CKD- Correct BP measurement", "description": "Expert insights on managing your diet for kidney health.", "src": "/podcast_episode_2.mp4" },
        { "title": "Sharing your feelings", "description": "Inspiring journeys from individuals living with kidney disease.", "src": "/podcast_episode_3.mp4" }
    ];

    const generalFaqs = [
        { "question": "How successful are kidney transplants?", "answer": "The success rate for a kidney transplant from a living donor is 90–95% after one year and the transplanted kidney lasts 15 to 20 years on average. For transplants from a deceased donor, the success rate is also high: 85–90% of these kidneys are working well after one year and will last on average from 10 to 15 years." },
        { "question": "What percentage of people on the waiting list for an organ transplant are waiting for a kidney?", "answer": "About 80% of those on the waiting list need a kidney." },
        { "question": "Can a person sell their organs for money?", "answer": "No. The key word is “donate”. Organ donation is a gift. There is no monetary compensation, and it is illegal to buy or sell organs." }
    ];
    
    const livingDonationFaqs = [
        { "question": "What organs can be donated through living donation?", "answer": [{ "text": "A kidney, or part of the liver, lung, small bowel or pancreas can be donated through living donation."}] },
        { "question": "Who can be a living donor?", "answer": [{ "text": "Anyone who is healthy and meets the required age of consent can be a potential living donor. They must be in good general health with no evidence of significant high blood pressure, diabetes, cancer, kidney disease, heart disease or hepatitis."}] },
        { "question": "What are the risks of donating a kidney?", "answer": [{ "text": "As with any major surgery, there are risks of physical complications, but these can usually be effectively managed. Short term risks include pneumonia, infection, pain and discomfort, allergic reaction to anesthesia, collapsed lung or blood clots. Rarely, death occurs. In the longer term, potential risks include:", "list": ["Slight increased risk of high blood pressure", "Slight increased incidence of kidney failure", "Possibility of injuring the remaining kidney", "Slight risk of developing a disease of the remaining kidney", "Some people also experience psychological difficulties, although most donors are satisfied with their decision to donate a kidney"] }] },
        { "question": "Are there any costs I'll have to pay?", "answer": [{ "text": "In most cases, you may have to pay any non-medical costs such as travel expenses, out-of-pocket costs, and any additional child-care costs. You may also have a possible loss of salary for time off work for recovery from the surgery, unless you have sick leave coverage from your employer’s company health plan. Some programs may offer financial assistance for these expenses, so speak to the social worker or Living Donor Coordinator at the transplant center to find out more."}] },
        { "question": "How much time will I need to take off work?", "answer": [{ "text": "Depending on the type of surgery you have (traditional open nephrectomy or keyhole nephrectomy) full recovery may take up to twelve weeks. You may be able to return to work within three to six weeks depending on the type of work you do. Before the surgery, you may also need some time off work for medical tests and appointments, counselling sessions and other aspects of the pre-donation evaluation process." }] },
        { "question": "How do I become a living donor?", "answer": [{ "text": "First, learn as much as you can about living donation, and find out your blood type. Then, contact the transplant center that is taking care of the potential recipient to arrange testing to confirm whether your blood type is compatible. From there, the transplant center staff will lead you through the process." }] },
        { "question": "Can I change my mind after I've decided to become a living donor?", "answer": [{ "text": "Yes, you can change your mind at any time during the process, and your decision will be respected by the health care team. They'll also help you communicate your decision to the potential recipient." }] },
        { "question": "I've been asked to donate one of my kidneys, but I just don't want to do it. What should I do?", "answer": [{ "text": "If after learning about living donation you choose not to become a living donor, speak to the social worker, counsellor or any member of the health care team at the transplant center. They will support your decision and help you to communicate this decision to the recipient, and family members, in a way that preserves harmony." }] }
    ];

    const deceasedDonationFaqs = [
        { "question": "What organs can be donated through deceased donation?", "answer": "The lungs, heart, liver, kidneys, pancreas and bowel can be donated. Tissues may include eye tissue, heart valves, bone, tendons, veins and ligaments. It is the health of the organs and tissues that is most important, not the age of the donor." },
        { "question": "If I have indicated my decision for organ donation, will everything be done to save my life?", "answer": "Yes. The first and foremost concern for doctors caring for critically ill patients is to do everything possible to save their lives. The possibility of donation is considered only when all lifesaving efforts have failed." },
        { "question": "How can I make sure my wishes to donate will be respected?", "answer": "Once you’ve registered your intention to donate your organs, it is crucial to speak to your family and loved ones to make sure they know your wishes." }
    ];

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
                            <Image src="/herosection_image.png" alt="Illustration of doctors and a patient discussing kidney health" width={600} height={400} className="rounded-lg shadow-xl" data-ai-hint="doctors patient kidney" />
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
                                    <div className="p-4 bg-primary/10 rounded-full mb-3"><HeartPulse className="h-10 w-10 text-primary"/></div>
                                    <CardTitle className="text-primary text-2xl">Chronic Kidney Disease</CardTitle>
                                    <CardDescription>Guidance and resources tailored for your health journey.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="text-foreground/80 text-left space-y-3">
                                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><Link href="/kidney-health" className="hover:underline">Explore Kidney Topics</Link></li>
                                    </ul>
                                </CardContent>
                            </Card>
                             <Card className="hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-center">
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-primary/10 rounded-full mb-3"><Droplet className="h-10 w-10 text-primary"/></div>
                                    <CardTitle className="text-primary text-2xl">Hemodialysis</CardTitle>
                                    <CardDescription>What is it? How can it help? Learn about the treatment and preparation.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="text-foreground/80 text-left space-y-3">
                                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><Link href="/hemodialysis" className="hover:underline">Learn About Hemodialysis</Link></li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-center">
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-primary/10 rounded-full mb-3"><Home className="h-10 w-10 text-primary"/></div>
                                    <CardTitle className="text-primary text-2xl">Peritoneal dialysis</CardTitle>
                                    <CardDescription>Learn about peritoneal dialysis, a treatment for kidney failure that you can do at home.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="text-foreground/80 text-left space-y-3">
                                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/><Link href="/peritoneal-dialysis" className="hover:underline">What is peritoneal dialysis?</Link></li>
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

                <section id="egfr-calculator" className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-primary">Calculate Your eGFR</h3>
                            <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">Use this tool to get an estimate of your kidney function. This calculator is intended for informational purposes and is not a substitute for professional medical advice.</p>
                        </div>
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
                
                {isClient && (
                <section id="kidney-conversations" className="py-20 bg-background">
                    <div className="container mx-auto px-4 text-center">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-primary">Kidney Conversations</h3>
                            <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">Tune into our podcasts for in-depth discussions with experts, patient stories, and the latest advancements in kidney care.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                             {podcasts.map((episode, index) => (
                                <Card key={index}>
                                    <CardHeader><CardTitle className="text-primary">{episode.title}</CardTitle></CardHeader>
                                    <CardContent>
                                        <p className="text-foreground/80 mb-4">{episode.description}</p>
                                        <video controls className="w-full">
                                            <source src={episode.src} type="video/mp4" />
                                            Your browser does not support the video element.
                                        </video>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="mt-12">
                            <Button size="lg" variant="outline">Explore More Podcasts</Button>
                        </div>
                    </div>
                </section>
                )}
                
                <section id="faq" className="py-20 bg-card">
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
                                            {faq.answer.map((p, i) => (
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

                <section id="about" className="py-20 bg-background">
                    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-bold text-primary mb-6">About Nirogyam</h3>
                            <p className="text-lg text-foreground/80 max-w-xl">Nirogyam is dedicated to providing clear, reliable, and accessible information on kidney health. We believe that informed patients and caregivers are empowered to make the best decisions for their health journey. Our content is curated by medical professionals and patient advocates to ensure accuracy and relevance.</p>
                        </div>
                        <div>
                        <Image src="/nirogyamlogo.png" alt="Nirogyam company logo" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="company logo" />
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-20 bg-card">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-3xl font-bold text-primary mb-4">Get In Touch</h3>
                        <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">Have questions, need support, or want to share your story? Reach out to us!</p>
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
                            <h3 className="text-3xl font-bold text-green-800 mb-4">Stay Connected on WhatsApp</h3>
                            <p className="text-lg text-green-700/80 mb-8 max-w-xl mx-auto">Join our WhatsApp channel for the latest updates, health tips, and community support directly on your phone.</p>
                            <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-white">
                                <a href="https://whatsapp.com/channel/0029Vb5gVK6A2pLFXRiHT23R" target="_blank" rel="noopener noreferrer">
                                    Follow Our Channel
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-primary/90 text-primary-foreground">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-center md:text-left">
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
                            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
                            <ul className="space-y-2 opacity-80">
                                <li>Dept of Nephrology Command Hospital, Pune.</li>
                                <li>Email: nirogyam93@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center text-sm border-t border-primary-foreground/20 pt-6 mt-6">
                        <p>© 2025 Nirogyam. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

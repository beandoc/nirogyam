
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, HeartPulse, FileText, GraduationCap, TestTube, Diamond, HeartHandshake, Bone, Droplet, Cloudy, Leaf, Filter, User } from 'lucide-react';

const TopicCard = ({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) => (
    <Card className="text-center p-4 hover:shadow-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 flex flex-col">
        <CardHeader className="items-center">
            <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                {icon}
            </div>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
            <p className="text-foreground/80 mb-4">{description}</p>
        </CardContent>
        <CardContent>
            <Button asChild variant="link">
                <Link href={href}>Learn More</Link>
            </Button>
        </CardContent>
    </Card>
);

const KidneyHealthPage = () => {
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
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Kidney Health Topics</h1>
                <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">Dive deep into our library of articles to understand every aspect of your kidney health.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TopicCard 
                    icon={<Filter className="h-8 w-8 text-primary" />}
                    title="How Kidneys Work"
                    description="Learn the fundamentals of how your kidneys filter waste and keep you healthy."
                    href="/how-kidneys-work"
                />
                <TopicCard 
                    icon={<HeartPulse className="h-8 w-8 text-primary" />}
                    title="CKD Explained"
                    description="Learn about Chronic Kidney Disease, its causes, symptoms, and progression."
                    href="/ckd-explained"
                />
                <TopicCard
                    icon={<FileText className="h-8 w-8 text-primary" />}
                    title="eGFR Explained"
                    description="Understand what your estimated Glomerular Filtration Rate (eGFR) means for your kidney health."
                    href="/egfr-explained"
                />
                <TopicCard
                    icon={<GraduationCap className="h-8 w-8 text-primary" />}
                    title="Stages of CKD"
                    description="Find out about the different stages of CKD and what they mean for your treatment plan."
                    href="/stages-of-ckd"
                />
                 <TopicCard
                    icon={<Droplet className="h-8 w-8 text-primary" />}
                    title="Hemodialysis"
                    description="Learn about the hemodialysis process for treating kidney failure."
                    href="/hemodialysis"
                />
                <TopicCard
                    icon={<TestTube className="h-8 w-8 text-primary" />}
                    title="Kidney Function Tests"
                    description="A guide to the various tests used to monitor your kidney health."
                    href="/kidney-function-tests"
                />
                <TopicCard
                    icon={<Diamond className="h-8 w-8 text-primary" />}
                    title="Kidney Stones"
                    description="Learn about the causes, symptoms, and treatments for kidney stones."
                    href="/kidney-stones"
                />
                <TopicCard
                    icon={<HeartHandshake className="h-8 w-8 text-primary" />}
                    title="Kidney Transplant"
                    description="Explore the process and benefits of receiving a kidney transplant."
                    href="/kidney-transplant"
                />
                <TopicCard
                    icon={<TestTube className="h-8 w-8 text-primary" />}
                    title="Creatinine Explained"
                    description="Understand what creatinine is and its role in kidney health."
                    href="/creatinine-explained"
                />
                <TopicCard
                    icon={<FileText className="h-8 w-8 text-primary" />}
                    title="Renal Nutrition"
                    description="Your guide to a kidney-friendly diet to help manage CKD."
                    href="/renal-nutrition"
                />
                <TopicCard
                    icon={<HeartPulse className="h-8 w-8 text-primary" />}
                    title="Good Nutrition"
                    description="General tips for a healthy diet and lifestyle for overall well-being."
                    href="/good-nutrition"
                />
                <TopicCard
                    icon={<Bone className="h-8 w-8 text-primary" />}
                    title="Phosphorus Explained"
                    description="Learn how to manage phosphorus levels for bone and heart health in CKD."
                    href="/phosphorus-explained"
                />
                <TopicCard
                    icon={<Droplet className="h-8 w-8 text-primary" />}
                    title="Potassium Explained"
                    description="A guide to managing potassium in your diet for kidney health."
                    href="/potassium-explained"
                />
                <TopicCard
                    icon={<Leaf className="h-8 w-8 text-primary" />}
                    title="Protein Explained"
                    description="Learn the right amount of protein to eat with and without dialysis."
                    href="/protein-explained"
                />
                <TopicCard
                    icon={<Cloudy className="h-8 w-8 text-primary" />}
                    title="Sodium Explained"
                    description="How to limit sodium and use herbs and spices for flavor."
                    href="/sodium-explained"
                />
                 <TopicCard 
                    icon={<User className="h-8 w-8 text-primary" />}
                    title="Living with a Single Kidney"
                    description="Information and guidance for individuals with one kidney."
                    href="/living-with-single-kidney"
                />
            </div>
        </main>
    </div>
  );
};

export default KidneyHealthPage;


import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, HeartPulse, FileText, GraduationCap, TestTube, Diamond, HeartHandshake, Bone, Droplet, Cloudy, Leaf, Filter, User, ArrowLeft } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

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
        <AppHeader />

        <main className="container mx-auto px-4 py-12 md:py-20">
            <Button asChild variant="outline" className="mb-8">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </Button>
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

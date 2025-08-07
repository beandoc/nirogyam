
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Microscope, Stethoscope, Pill, ShieldQuestion, Activity } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const SectionCard = ({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) => (
    <Link href={href} className="block">
        <Card className="h-full hover:shadow-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4">
                {icon}
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-foreground/80">{description}</p>
            </CardContent>
            <CardContent>
                <div className="text-primary font-semibold flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
            </CardContent>
        </Card>
    </Link>
);

const GlomerulonephritisPage = () => {
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
                    
                    <header className="mb-12">
                         <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">A Guide to Glomerulonephritis (GN)</h1>
                         <p className="text-lg text-foreground/80">Glomerulonephritis (GN) refers to a group of diseases that injure the part of the kidney that filters blood. When these filters (glomeruli) are damaged, your kidneys can't function properly. This guide breaks down this complex topic into key areas.</p>
                    </header>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <SectionCard 
                            icon={<Microscope className="h-8 w-8 text-primary" />} 
                            title="Introduction to Glomerulonephritis"
                            description="Understand what Glomerulonephritis is and the crucial role of the glomeruli."
                            href="/glomerulonephritis/introduction"
                        />
                        <SectionCard 
                            icon={<Activity className="h-8 w-8 text-primary" />} 
                            title="Clinical Presentation"
                            description="Learn how GN appears, including the signs of Nephrotic and Nephritic syndromes."
                            href="/glomerulonephritis/clinical-presentation"
                        />
                        <SectionCard 
                            icon={<ShieldQuestion className="h-8 w-8 text-primary" />} 
                            title="Understanding the Causes"
                            description="Explore the different biological pathways and immune system responses that cause GN."
                            href="/glomerulonephritis/causes"
                        />
                        <SectionCard 
                            icon={<Stethoscope className="h-8 w-8 text-primary" />} 
                            title="The Diagnostic Process"
                            description="Discover how doctors diagnose GN, from initial evaluation to the kidney biopsy."
                            href="/glomerulonephritis/diagnosis"
                        />
                        <SectionCard 
                            icon={<Pill className="h-8 w-8 text-primary" />} 
                            title="Management Approach"
                            description="Learn about the general approach to managing GN, including supportive care and treatment."
                            href="/glomerulonephritis/management"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default GlomerulonephritisPage;

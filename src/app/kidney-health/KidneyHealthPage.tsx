
'use client';
import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { SearchAndFilter } from '@/components/SearchAndFilter';

interface Topic {
    category: string;
    title: string;
    description: string;
    href: string;
}

const allTopics: Topic[] = [
    // Basics & General
    { category: "Basics & General", title: "How Kidneys Work", description: "Learn the fundamentals of how your kidneys filter waste, manage blood pressure, and keep you healthy.", href: "/how-kidneys-work" },
    { category: "Basics & General", title: "Living with a Single Kidney", description: "Information and guidance for individuals with one kidney, whether from birth, donation, or surgery.", href: "/living-with-single-kidney" },
    { category: "Basics & General", title: "Kidney Function Tests", description: "A guide to the various tests used to monitor your kidney health, including blood and urine analysis.", href: "/kidney-function-tests" },
    { category: "Basics & General", title: "Creatinine Explained", description: "Understand what creatinine is and its role as a key biomarker in kidney health assessment.", href: "/creatinine-explained" },
    { category: "Basics & General", title: "eGFR Explained", description: "Understand what your estimated Glomerular Filtration Rate (eGFR) means for your kidney function stage.", href: "/egfr-explained" },
    { category: "Basics & General", title: "Kidney Stones", description: "Learn about the causes, symptoms, and modern treatments for kidney stones and prevention strategies.", href: "/kidney-stones" },
    { category: "Basics & General", title: "Urinary Tract Infections (UTIs)", description: "A comprehensive, detailed guide to understanding, treating, and preventing UTIs.", href: "/urinary-tract-infection" },
    // Diet & Nutrition
    { category: "Diet & Nutrition", title: "Renal Nutrition Guide", description: "Your essential guide to a kidney-friendly diet to help manage and slow CKD progression.", href: "/renal-nutrition" },
    { category: "Diet & Nutrition", title: "Good Nutrition", description: "General tips for a healthy diet and lifestyle to support overall kidney and systemic well-being.", href: "/good-nutrition" },
    { category: "Diet & Nutrition", title: "Sodium Explained", description: "How to limit sodium and use herbs and spices for flavor while protecting blood pressure.", href: "/sodium-explained" },
    { category: "Diet & Nutrition", title: "Potassium Explained", description: "A guide to managing potassium in your diet for optimal cardiac and kidney health.", href: "/potassium-explained" },
    { category: "Diet & Nutrition", title: "Phosphorus Explained", description: "Learn how to manage phosphorus levels for bone and heart health in various stages of CKD.", href: "/phosphorus-explained" },
    { category: "Diet & Nutrition", title: "Protein Explained", description: "Learn the right amount of protein to eat for kidney protection, with or without dialysis.", href: "/protein-explained" },
    // CKD
    { category: "Chronic Kidney Disease (CKD)", title: "CKD Explained", description: "A simple guide to Chronic Kidney Disease, its causes, management, and the journey toward dialysis or transplant.", href: "/ckd-explained" },
    { category: "Chronic Kidney Disease (CKD)", title: "Stages of CKD", description: "Find out about the 5 stages of CKD and what they mean for your health, dialysis risk, and treatment plan.", href: "/stages-of-ckd" },
    { category: "Chronic Kidney Disease (CKD)", title: "Slowing Down CKD", description: "A modern guide to protecting your kidneys and delaying the need for dialysis or transplant through lifestyle and clinical care.", href: "/insights/slowing-down-ckd" },
    { category: "Chronic Kidney Disease (CKD)", title: "Biomarkers in CKD", description: "Deep dive into eGFR, Creatinine, and Cystatin-C: the essential markers for tracking your kidney health journey.", href: "/insights/biomarkers-explained" },
    // Dialysis
    { category: "Dialysis Treatments", title: "Hemodialysis Explained", description: "Learn about the hemodialysis process, including clinic visits and how it cleanses your blood.", href: "/hemodialysis" },
    { category: "Dialysis Treatments", title: "Peritoneal Dialysis Explained", description: "Learn about peritoneal dialysis, a flexible treatment option you can perform in the comfort of your home.", href: "/peritoneal-dialysis" },
    { category: "Dialysis Treatments", title: "AV Fistula Explained", description: "Learn about AV fistulas, the gold-standard access for hemodialysis, including benefits and daily care.", href: "/av-fistula" },
    // Transplant
    { category: "Kidney Transplant", title: "Kidney Transplant Guide", description: "Explore the life-changing process, evaluation, and long-term benefits of receiving a kidney transplant.", href: "/kidney-transplant" },
    { category: "Kidney Transplant", title: "Living Donation", description: "The path to becoming or finding a living donor: a profound gift that transforms lives.", href: "/living-donation" },
];

const TopicCard = ({ title, description, href }: { title: string, description: string, href: string }) => (
    <Card className="glass-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 flex flex-col group rounded-[2rem] border-none overflow-hidden">
        <CardHeader className="pt-8 px-8">
            <CardTitle className="text-2xl font-bold font-heading group-hover:text-primary transition-colors leading-tight">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow px-8">
            <p className="text-foreground/60 leading-relaxed line-clamp-3">{description}</p>
        </CardContent>
        <CardContent className="pb-8 px-8 pt-0">
            <Button asChild variant="ghost" className="p-0 hover:bg-transparent text-primary font-bold group-hover:translate-x-1 transition-transform">
                <Link href={href} className="flex items-center gap-2">
                    Learn More <BookOpen className="h-4 w-4" />
                </Link>
            </Button>
        </CardContent>
    </Card>
);

const KidneyHealthPage = () => {
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        const query = searchParams.get('q');
        if (query) {
            setSearchTerm(query);
        }
    }, [searchParams]);

    const categories = ['All', ...Array.from(new Set(allTopics.map(t => t.category)))];

    const filteredTopics = useMemo(() => {
        return allTopics.filter(topic => {
            const matchesCategory = selectedCategory === 'All' || topic.category === selectedCategory;
            const matchesSearch = searchTerm === '' || topic.title.toLowerCase().includes(searchTerm.toLowerCase()) || topic.description.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [searchTerm, selectedCategory]);

    const groupedTopics = useMemo(() => {
        const groups: { [key: string]: Topic[] } = {};
        filteredTopics.forEach(topic => {
            if (!groups[topic.category]) {
                groups[topic.category] = [];
            }
            groups[topic.category].push(topic);
        });
        return groups;
    }, [filteredTopics]);

    return (
        <div className="bg-background text-foreground flex-1 pt-24">
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
                    <div className="inline-flex p-4 bg-primary/5 rounded-3xl animate-float">
                         <BookOpen className="h-12 w-12 text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black font-heading bg-clip-text text-transparent bg-gradient-to-br from-primary via-blue-700 to-indigo-900 tracking-tight animate-fade-in-up">
                        Patient Education Library
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay">
                        Evidence-based information to guide your kidney health journey. Discover clinical insights, nutritional strategies, and advanced treatment paths.
                    </p>
                </div>
                
                <div className="max-w-5xl mx-auto mb-16 animate-fade-in-up-delay">
                    <SearchAndFilter
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        categories={categories}
                    />
                </div>

                {Object.keys(groupedTopics).length > 0 ? (
                    <div className="space-y-24">
                        {Object.entries(groupedTopics).map(([category, topics], idx) => (
                            <section key={category} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                                <div className="flex items-center gap-4 mb-10">
                                    <h2 className="text-2xl md:text-3xl font-black font-heading text-primary shrink-0">{category}</h2>
                                    <div className="h-px bg-gradient-to-r from-primary/20 to-transparent flex-grow" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {topics.map((topic, index) => (
                                        <TopicCard
                                            key={index}
                                            title={topic.title}
                                            description={topic.description}
                                            href={topic.href}
                                        />
                                    ))}
                                </div>
                            </section>
                        ))
                        }
                    </div>
                ) : (
                    <div className="text-center py-24 glass-card rounded-[3rem] border-dashed border-2 border-primary/10 max-w-2xl mx-auto animate-fade-in-up">
                        <div className="mb-6 inline-block p-6 bg-slate-50 rounded-full">
                            <BookOpen className="h-12 w-12 text-slate-300" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">No matching topics found</h3>
                        <p className="text-foreground/60 mb-8 max-w-md mx-auto">
                            Try broadening your search or switching to "All" categories to see how different topics connect.
                        </p>
                        <Button onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }} variant="outline" className="rounded-full px-8 h-12 font-bold">
                            Reset Filters
                        </Button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default KidneyHealthPage;

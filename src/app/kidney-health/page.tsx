
'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';
import { SearchAndFilter } from '@/components/SearchAndFilter';

interface Topic {
    category: string;
    title: string;
    description: string;
    href: string;
}

const allTopics: Topic[] = [
    // Basics & General
    { category: "Basics & General", title: "How Kidneys Work", description: "Learn the fundamentals of how your kidneys filter waste and keep you healthy.", href: "/how-kidneys-work" },
    { category: "Basics & General", title: "Living with a Single Kidney", description: "Information and guidance for individuals with one kidney.", href: "/living-with-single-kidney" },
    { category: "Basics & General", title: "Kidney Function Tests", description: "A guide to the various tests used to monitor your kidney health.", href: "/kidney-function-tests" },
    { category: "Basics & General", title: "Creatinine Explained", description: "Understand what creatinine is and its role in kidney health.", href: "/creatinine-explained" },
    { category: "Basics & General", title: "eGFR Explained", description: "Understand what your estimated Glomerular Filtration Rate (eGFR) means.", href: "/egfr-explained" },
    { category: "Basics & General", title: "Kidney Stones", description: "Learn about the causes, symptoms, and treatments for kidney stones.", href: "/kidney-stones" },
    { category: "Basics & General", title: "Urinary Tract Infections (UTIs)", description: "A comprehensive, detailed guide to understanding and preventing UTIs.", href: "/urinary-tract-infection" },
    // Diet & Nutrition
    { category: "Diet & Nutrition", title: "Renal Nutrition Guide", description: "Your guide to a kidney-friendly diet to help manage CKD.", href: "/renal-nutrition" },
    { category: "Diet & Nutrition", title: "Good Nutrition", description: "General tips for a healthy diet and lifestyle for overall well-being.", href: "/good-nutrition" },
    { category: "Diet & Nutrition", title: "Sodium Explained", description: "How to limit sodium and use herbs and spices for flavor.", href: "/sodium-explained" },
    { category: "Diet & Nutrition", title: "Potassium Explained", description: "A guide to managing potassium in your diet for kidney health.", href: "/potassium-explained" },
    { category: "Diet & Nutrition", title: "Phosphorus Explained", description: "Learn how to manage phosphorus levels for bone and heart health in CKD.", href: "/phosphorus-explained" },
    { category: "Diet & Nutrition", title: "Protein Explained", description: "Learn the right amount of protein to eat with and without dialysis.", href: "/protein-explained" },
    // CKD
    { category: "Chronic Kidney Disease (CKD)", title: "CKD Explained", description: "A simple guide to Chronic Kidney Disease, its causes, and how to manage it.", href: "/ckd-explained" },
    { category: "Chronic Kidney Disease (CKD)", title: "Stages of CKD", description: "Find out about the different stages of CKD and what they mean for you.", href: "/stages-of-ckd" },
    { category: "Chronic Kidney Disease (CKD)", title: "Slowing Down CKD", description: "A modern guide to protecting your kidneys and living a healthier life with CKD.", href: "/insights/slowing-down-ckd" },
    // Dialysis
    { category: "Dialysis Treatments", title: "Hemodialysis Explained", description: "Learn about the hemodialysis process for treating kidney failure.", href: "/hemodialysis" },
    { category: "Dialysis Treatments", title: "Peritoneal Dialysis Explained", description: "Learn about peritoneal dialysis, a treatment you can do at home.", href: "/peritoneal-dialysis" },
    // Transplant
    { category: "Kidney Transplant", title: "Kidney Transplant Guide", description: "Explore the process and benefits of receiving a kidney transplant.", href: "/kidney-transplant" },
];

const TopicCard = ({ title, description, href }: { title: string, description: string, href: string }) => (
    <Card className="hover:shadow-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
        <CardHeader>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
            <p className="text-foreground/80 mb-4">{description}</p>
        </CardContent>
        <CardContent>
            <Button asChild variant="link" className="p-0">
                <Link href={href}>Learn More</Link>
            </Button>
        </CardContent>
    </Card>
);

const KidneyHealthPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

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
                     <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Patient Education Library</h1>
                    <p className="text-lg text-foreground/80 mt-2 max-w-3xl mx-auto">
                        Your comprehensive resource for understanding kidney health. Search for a topic or browse by category to find the information you need.
                    </p>
                </div>
                
                <SearchAndFilter
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    categories={categories}
                />

                {Object.keys(groupedTopics).length > 0 ? (
                    Object.entries(groupedTopics).map(([category, topics]) => (
                        <section key={category} className="mb-16">
                            <h2 className="text-3xl font-bold text-primary mb-8 border-b-2 border-primary/20 pb-2">{category}</h2>
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
                ) : (
                    <div className="text-center py-16">
                        <p className="text-lg text-foreground/80">No topics found. Please try adjusting your search or filter.</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default KidneyHealthPage;

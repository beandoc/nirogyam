
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, HeartPulse, FileText, GraduationCap, TestTube, Diamond, HeartHandshake, Bone, Droplet, Cloudy, Leaf, Filter, User, ArrowLeft } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';
import { useParams } from 'next/navigation';
import en from '@/locales/en.json';
import hi from '@/locales/hi.json';

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
    const params = useParams();
    const locale = params.lang || 'en';
    const t = locale === 'hi' ? hi : en;

    const topics = [
        { 
            icon: <Filter className="h-8 w-8 text-primary" />,
            title: t.kidneyHealth.topics.howKidneysWork.title,
            description: t.kidneyHealth.topics.howKidneysWork.description,
            href: `/${locale}/how-kidneys-work`
        },
        { 
            icon: <HeartPulse className="h-8 w-8 text-primary" />,
            title: t.kidneyHealth.topics.ckdExplained.title,
            description: t.kidneyHealth.topics.ckdExplained.description,
            href: `/${locale}/ckd-explained`
        },
        {
            icon: <FileText className="h-8 w-8 text-primary" />,
            title: t.kidneyHealth.topics.egfrExplained.title,
            description: t.kidneyHealth.topics.egfrExplained.description,
            href: `/${locale}/egfr-explained`
        },
        {
            icon: <GraduationCap className="h-8 w-8 text-primary" />,
            title: t.kidneyHealth.topics.stagesOfCkd.title,
            description: t.kidneyHealth.topics.stagesOfCkd.description,
            href: `/${locale}/stages-of-ckd`
        },
        {
            icon: <Droplet className="h-8 w-8 text-primary" />,
            title: t.kidneyHealth.topics.hemodialysis.title,
            description: t.kidneyHealth.topics.hemodialysis.description,
            href: `/${locale}/hemodialysis`
        },
        {
            icon: <TestTube className="h-8 w-8 text-primary" />,
            title: t.kidneyHealth.topics.kidneyFunctionTests.title,
            description: t.kidneyHealth.topics.kidneyFunctionTests.description,
            href: `/${locale}/kidney-function-tests`
        },
        {
            icon: <Diamond className="h-8 w-8 text-primary" />,
            title: t.kidneyHealth.topics.kidneyStones.title,
            description: t.kidneyHealth.topics.kidneyStones.description,
            href: `/${locale}/kidney-stones`
        },
        {
            icon: <HeartHandshake className="h-8 w-8 text-primary" />,
            title: t.kidneyHealth.topics.kidneyTransplant.title,
            description: t.kidneyHealth.topics.kidneyTransplant.description,
            href: `/${locale}/kidney-transplant`
        },
        {
            icon: <TestTube className="h-8 w-8 text-primary" />,
            title: t.kidneyHealth.topics.creatinineExplained.title,
            description: t.kidneyHealth.topics.creatinineExplained.description,
            href: `/${locale}/creatinine-explained`
        },
        {
            icon: <FileText className="h-8 w-8 text-primary" />,
            title: t.kidneyHealth.topics.renalNutrition.title,
            description: t.kidneyHealth.topics.renalNutrition.description,
            href: `/${locale}/renal-nutrition`
        },
        {
            icon: <HeartPulse className="h-8 w-8 text-primary" />,
            title: t.kidneyHealth.topics.goodNutrition.title,
            description: t.kidneyHealth.topics.goodNutrition.description,
            href: `/${locale}/good-nutrition`
        },
        {
            icon: <Bone className="h-8 w-8 text-primary" />,
            title: t.kidneyHealth.topics.phosphorusExplained.title,
            description: t.kidneyHealth.topics.phosphorusExplained.description,
            href: `/${locale}/phosphorus-explained`
        },
        {
            icon: <Droplet className="h-8 w-8 text-primary" />,
            title: t.kidneyHealth.topics.potassiumExplained.title,
            description: t.kidneyHealth.topics.potassiumExplained.description,
            href: `/${locale}/potassium-explained`
        },
        {
            icon: <Leaf className="h-8 w-8 text-primary" />,
            title: t.kidneyHealth.topics.proteinExplained.title,
            description: t.kidneyHealth.topics.proteinExplained.description,
            href: `/${locale}/protein-explained`
        },
        {
            icon: <Cloudy className="h-8 w-8 text-primary" />,
            title: t.kidneyHealth.topics.sodiumExplained.title,
            description: t.kidneyHealth.topics.sodiumExplained.description,
            href: `/${locale}/sodium-explained`
        },
        { 
            icon: <User className="h-8 w-8 text-primary" />,
            title: t.kidneyHealth.topics.livingWithSingleKidney.title,
            description: t.kidneyHealth.topics.livingWithSingleKidney.description,
            href: `/${locale}/living-with-single-kidney`
        },
    ];

  return (
    <div className="bg-background text-foreground flex-1">
        <AppHeader />

        <main className="container mx-auto px-4 py-12 md:py-20">
            <Button asChild variant="outline" className="mb-8">
                <Link href={`/${locale}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t.buttons.backToHome}
                </Link>
            </Button>
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">{t.kidneyHealth.title}</h1>
                <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">{t.kidneyHealth.intro}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {topics.map((topic, index) => (
                    <TopicCard 
                        key={index}
                        icon={topic.icon}
                        title={topic.title}
                        description={topic.description}
                        href={topic.href}
                    />
                ))}
            </div>
        </main>
    </div>
  );
};

export default KidneyHealthPage;

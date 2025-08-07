
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const InfoCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <Card className="mb-8">
        <CardHeader>
            <CardTitle className="text-2xl text-primary">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="prose lg:prose-xl max-w-none text-foreground/90 space-y-4">
                {children}
            </div>
        </CardContent>
    </Card>
);

const WaterMythsBustedPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Myths Busted: How Much Water Do You Really Need?</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>We're always told to "drink more water" to keep our kidneys healthy. But how much is enough? Can you drink too much? And does your morning cup of chai count towards your daily total?</p>
                        <p>There are many myths floating around about hydration that can be confusing. Let's clear the air, bust some common myths, and get to the simple facts about protecting your kidneys with water.</p>
                    </div>

                    <InfoCard title="Why Water is Your Kidney's Best Friend">
                        <p>First, let's quickly understand why water is so vital. Your kidneys are your body's hard-working filter system. Water is the essential element that helps them:</p>
                        <ul className="list-disc pl-6 space-y-2">
                           <li><strong>Act as a Natural Cleaner:</strong> Water helps your kidneys flush out waste products and toxins from your blood.</li>
                           <li><strong>Fight Kidney Stones:</strong> When you don't drink enough, your urine becomes more concentrated, allowing minerals to clump together and form painful kidney stones. Staying hydrated keeps everything diluted and flowing smoothly.</li>
                           <li><strong>Prevent Infections:</strong> Drinking plenty of water helps flush out bacteria from your urinary tract, which reduces your risk of getting painful Urinary Tract Infections (UTIs).</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="Busting 5 Common Myths About Water and Kidneys">
                        <div>
                            <h3 className="text-xl font-semibold text-foreground">Myth 1: "Drinking too much water will strain or overwork my kidneys."</h3>
                            <p><strong>Fact:</strong> For a person with healthy kidneys, this is very unlikely. Your kidneys are brilliantly designed to handle varying amounts of fluid. The real danger for most people isn't drinking too much, but drinking too little. (Note: If you have been diagnosed with kidney disease, your doctor might give you specific instructions to limit your fluid intake. Always follow your doctor's advice.)</p>
                        </div>
                         <div>
                            <h3 className="text-xl font-semibold text-foreground mt-6">Myth 2: "Any drink will hydrate me. My daily tea and juice are enough."</h3>
                            <p><strong>Fact:</strong> While beverages like tea, coffee, and juice do contain water, plain water is always the best choice. Sugary drinks add unnecessary calories and can contribute to health problems like diabetes. Drinks with caffeine (like chai and coffee) can sometimes make you urinate more, causing you to lose water.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mt-6">Myth 3: "Water doesn't really help prevent kidney stones."</h3>
                            <p><strong>Fact:</strong> This is one of the biggest and most dangerous myths! Dehydration is a leading cause of kidney stones. Staying well-hydrated is the single most effective lifestyle change you can make to prevent them from forming.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mt-6">Myth 4: "I have a kidney issue, so I'll just drink lots of water to fix it."</h3>
                            <p><strong>Fact:</strong> Water is for prevention, not a cure. While staying hydrated is a key part of managing kidney health, water alone cannot reverse existing damage. It is just one important piece of a complete treatment plan that must be managed by your doctor.</p>
                        </div>
                         <div>
                            <h3 className="text-xl font-semibold text-foreground mt-6">Myth 5: "I only need to drink a lot of water when I'm exercising or when it's hot."</h3>
                            <p><strong>Fact:</strong> Everyone needs to stay hydrated, every single day. Even if you work in a cool, air-conditioned office, your body is constantly using water for countless essential functions. Don't wait until you feel thirsty—thirst is often the first sign that you're already on your way to being dehydrated.</p>
                        </div>
                    </InfoCard>
                    
                    <InfoCard title="Simple Tips to Drink More Water Every Day">
                       <p>Staying hydrated doesn't have to be a chore. Here are some easy tips:</p>
                        <ul className="list-disc pl-6 space-y-2">
                           <li><strong>Carry a Bottle:</strong> Keep a reusable water bottle (a simple steel or copper bottle is great!) with you at your desk or in your bag. It's a constant visual reminder.</li>
                           <li><strong>Set a Reminder:</strong> Use your phone to set an alarm that reminds you to take a few sips every hour.</li>
                           <li><strong>Add Some Flavour:</strong> If you find plain water boring, add a slice of lemon (nimbu), a few mint leaves (pudina), or pieces of cucumber to make it more refreshing.</li>
                           <li><strong>Check Your Pee!</strong> This is a simple and effective test. Your urine should be a light, pale yellow colour. If it's dark yellow, it's a clear sign you need to drink up.</li>
                           <li><strong>Eat Your Water:</strong> Include hydrating foods like watermelon, cucumber (kheera), and oranges in your daily diet.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="A Final Thought">
                        <p>Don't let common myths confuse you. The truth is simple: staying well-hydrated is one of the easiest and most powerful ways you can support your kidneys. By making water your go-to drink, you are making a smart and simple investment in your health for years to come.</p>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default WaterMythsBustedPage;

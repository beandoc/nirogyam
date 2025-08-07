
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

const HabitCard = ({ number, title, children }: { number: number, title: string, children: React.ReactNode }) => (
    <Card className="mb-6">
        <CardHeader>
            <CardTitle className="text-2xl text-primary">{number}. {title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="prose lg:prose-xl max-w-none text-foreground/90 space-y-4">
                {children}
            </div>
        </CardContent>
    </Card>
)

const AreYouHarmingYourKidneysPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Are You Unknowingly Harming Your Kidneys? 10 Habits to Change Today</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>Your kidneys are your body's master cleaners, working tirelessly 24/7 to filter waste, balance fluids, and keep your blood pressure in check. But what if some of your simple, everyday habits are making their job harder?</p>
                        <p>Most people don't realize that common routines can silently cause damage over time. Let's uncover 10 of these "silent kidney killers" and learn how to protect these precious organs.</p>
                    </div>

                    <HabitCard number={1} title="Ignoring Your Thirst">
                        <p>Water is the magic potion for your kidneys! It helps them flush out toxins and waste from your body. When you don't drink enough, this waste can build up, increasing your risk of painful kidney stones and urinary tract infections (UTIs).</p>
                        <p><strong>A Better Choice:</strong> Aim for 6-8 glasses of water daily, and maybe more if you've been sweating or are out in the hot Indian sun. Your urine should be a light, pale yellow—if it's dark, it's a clear signal to drink up!</p>
                    </HabitCard>

                    <HabitCard number={2} title="Loving Salty Foods a Bit Too Much">
                        <p>We Indians love our flavourful, spicy food, but too much salt (namak) is a major problem for our kidneys. A high-salt diet can lead to high blood pressure, which puts immense strain on these organs. Think about all the hidden salt in pickles (achar), papad, chips, and instant noodles.</p>
                        <p><strong>A Better Choice:</strong> Flavour your food with wonderful Indian spices like turmeric, coriander, and cumin instead of extra salt. Read the labels on packaged foods and choose low-sodium options.</p>
                    </HabitCard>

                    <HabitCard number={3} title="Having a Major Sweet Tooth">
                        <p>That delicious mithai or sugary cold drink might be tempting, but a diet high in sugar is a primary cause of obesity and type 2 diabetes—two of the biggest risk factors for kidney failure.</p>
                        <p><strong>A Better Choice:</strong> Swap sugary colas and packaged juices for water, fresh nimbu pani (with less sugar), or unsweetened herbal tea. When you crave something sweet, reach for fresh fruit.</p>
                    </HabitCard>
                    
                    <HabitCard number={4} title="The 'Wait and Hold' Habit">
                         <p>We've all done it—holding our urine because we're in the middle of something important. But making this a regular habit puts constant pressure on your bladder and can make it easier for bacteria to grow, leading to infections that can harm your kidneys.</p>
                        <p><strong>A Better Choice:</strong> Simple: when you feel the urge to go, go! Listen to your body's signals.</p>
                    </HabitCard>

                    <HabitCard number={5} title="Popping Too Many Painkillers">
                         <p>For a headache or muscle pain, it's easy to reach for a common painkiller. But frequent, long-term use of certain types of pain relievers (like NSAIDs) can be very harmful to your kidney tissues.</p>
                        <p><strong>A Better Choice:</strong> Use painkillers only when absolutely necessary and preferably after consulting a doctor. For minor aches, try a hot water bag or gentle stretches first.</p>
                    </HabitCard>

                    <HabitCard number={6} title="Living on Processed & Fast Food">
                        <p>Foods that come in packets, boxes, or from a fast-food chain are often loaded with salt, unhealthy fats, and phosphorus additives, all of which strain your kidneys.</p>
                        <p><strong>A Better Choice:</strong> Nothing beats fresh, home-cooked food. Focus on simple meals prepared with fresh vegetables, dals, and lean proteins.</p>
                    </HabitCard>
                    
                    <HabitCard number={7} title="Drinking Too Much Alcohol">
                        <p>Excessive alcohol consumption dehydrates your body. This dehydration makes it harder for your kidneys to do their job and can lead to long-term damage over time.</p>
                        <p><strong>A Better Choice:</strong> Drink in moderation. If you do have an alcoholic beverage, have a glass of water alongside it to stay hydrated.</p>
                    </HabitCard>

                    <HabitCard number={8} title="The Smoking Habit">
                         <p>Smoking harms nearly every organ in your body, and your kidneys are no exception. It damages blood vessels, reduces blood flow to the kidneys, and increases your risk of high blood pressure and even kidney cancer.</p>
                         <p><strong>A Better Choice:</strong> Quitting is the single best thing you can do for your health. Don't be afraid to seek help from support groups or a doctor if you need it.</p>
                    </HabitCard>

                    <HabitCard number={9} title="Living a 'Sit-Down' Lifestyle">
                        <p>A sedentary lifestyle (sitting for most of the day) is a direct path to obesity, diabetes, and high blood pressure—all major enemies of your kidneys.</p>
                        <p><strong>A Better Choice:</strong> Aim for at least 30 minutes of activity every day. A brisk walk, dancing, or yoga all count. Make it a rule to get up and stretch every hour if you have a desk job.</p>
                    </HabitCard>
                    
                    <HabitCard number={10} title="Not Getting Enough Sleep">
                         <p>Your body repairs itself while you sleep, and your kidneys are part of that repair schedule. A chronic lack of sleep is strongly linked to high blood pressure, which in turn harms your kidney function.</p>
                         <p><strong>A Better Choice:</strong> Aim for 7-8 hours of quality sleep each night. Try to maintain a regular sleep and wake schedule, even on weekends.</p>
                    </HabitCard>

                    <InfoCard title="A Final Thought">
                        <p>Your kidneys work silently to keep you healthy. It’s time we return the favour. By making a few simple tweaks to these everyday habits, you can protect these vital organs for a lifetime. Start today!</p>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default AreYouHarmingYourKidneysPage;


'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

const FoodGuidePage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">A Food Guide for a Healthy Urinary System</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>We all know that drinking plenty of water is essential for our health. But did you know that the food on your plate plays an equally important role in keeping your urinary system—your kidneys and bladder—happy and healthy?</p>
                        <p>What you eat can either help your body's natural filters work smoothly or cause them stress. Let's explore a simple guide to eating right for a healthy urinary system.</p>
                    </div>

                    <InfoCard title="The Best Foods for Your Kidneys and Bladder">
                        <p>Think of these foods as the "superheroes" for your urinary health.</p>
                        <h3 className="text-xl font-semibold text-foreground">1. Hydrating Heroes</h3>
                        <p>Foods with high water content act like an internal shower for your system, helping to flush out waste and toxins.</p>
                        <p><strong>Good Choices:</strong> Juicy watermelon, cucumbers (kheera), oranges, and strawberries.</p>
                        
                        <h3 className="text-xl font-semibold text-foreground mt-4">2. Fibre-Rich Friends</h3>
                        <p>Constipation can put uncomfortable pressure on your bladder. High-fibre foods help prevent this by keeping your digestive system running smoothly.</p>
                        <p><strong>Good Choices:</strong> Whole grains (like whole wheat roti and oats), beans (chana, rajma), lentils (dal), and most fruits and vegetables.</p>

                        <h3 className="text-xl font-semibold text-foreground mt-4">3. The Power of Cranberries</h3>
                        <p>These little red berries are famous for a reason! They contain special natural compounds that help prevent harmful bacteria from sticking to the walls of your urinary tract, which can lower your risk of painful Urinary Tract Infections (UTIs).</p>
                        <p><strong>Good Choices:</strong> Unsweetened cranberry juice or dried cranberries.</p>

                        <h3 className="text-xl font-semibold text-foreground mt-4">4. Green Goodness</h3>
                        <p>Leafy greens are packed with vitamins and antioxidants that support overall kidney health.</p>
                        <p><strong>Good Choices:</strong> Spinach (palak), mustard leaves (sarson), and fenugreek (methi).</p>
                        
                        <h3 className="text-xl font-semibold text-foreground mt-4">5. Healthy Fats (Omega-3s)</h3>
                        <p>These healthy fats are known for reducing inflammation throughout the body, including in your urinary system.</p>
                        <p><strong>Good Choices:</strong> Fatty fish (like salmon and mackerel) and flaxseeds (alsi).</p>
                    </InfoCard>

                    <InfoCard title="Foods to Limit for a Happier Bladder">
                        <p>You don't necessarily have to ban these foods forever, but being mindful of them can make a big difference, especially if you have a sensitive system.</p>
                         <h3 className="text-xl font-semibold text-foreground">1. Caffeine</h3>
                        <p>Your daily cup of chai or coffee is a beloved ritual, but too much caffeine can irritate the bladder, making you feel the urge to urinate more often. It can also be dehydrating, which isn't great for your kidneys.</p>
                        
                        <h3 className="text-xl font-semibold text-foreground mt-4">2. Excess Salt</h3>
                        <p>Too much salt from packaged snacks, pickles (achar), and fast food forces your kidneys to work overtime and can lead to high blood pressure, a major enemy of kidney health.</p>
                        
                        <h3 className="text-xl font-semibold text-foreground mt-4">3. Artificial Sweeteners</h3>
                        <p>Some people find that "sugar-free" sweeteners can irritate their bladder. If you notice discomfort after having diet sodas or foods with these additives, it might be best to limit them.</p>

                        <h3 className="text-xl font-semibold text-foreground mt-4">4. Very Acidic Foods</h3>
                        <p>For some people with sensitive bladders, highly acidic foods like tomatoes, citrus fruits (like lemons and oranges in large amounts), and fizzy cold drinks can cause irritation. Listen to your body—if something causes a problem, try a less acidic option like a banana or melon.</p>
                    </InfoCard>

                    <InfoCard title="A Final Word">
                        <p>You don't need a complicated or strict diet to take care of your urinary system. By focusing on fresh, whole, and hydrating foods while being mindful of common irritants like excess salt and caffeine, you can help your body's natural filters stay healthy for years to come.</p>
                    </InfoCard>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">Frequently Asked Questions (FAQs)</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>How much water is enough?</AccordionTrigger>
                                    <AccordionContent>
                                    Aim for about 8 to 10 glasses of water a day. A good way to check is by looking at your urine colour—it should be light yellow. If it's dark yellow, you probably need to drink more water.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Is too much protein bad for my kidneys?</AccordionTrigger>
                                    <AccordionContent>
                                    Yes, a diet that is extremely high in protein, especially from animal sources, can put extra strain on your kidneys over time. It's all about balance and moderation.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>How does alcohol affect my urinary health?</AccordionTrigger>
                                    <AccordionContent>
                                    Alcohol can irritate your bladder and also leads to dehydration. If you choose to drink, do so in moderation and make sure to drink extra water to compensate.
                                    </AccordionContent>
                                </AccordionItem>
                                 <AccordionItem value="item-4">
                                    <AccordionTrigger>Can eating less salt really help prevent kidney stones?</AccordionTrigger>
                                    <AccordionContent>
                                    Yes! A high-salt diet can increase the amount of calcium in your urine. This is a major factor in forming the most common type of kidney stones. So, cutting back on salt is a great preventive step.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default FoodGuidePage;

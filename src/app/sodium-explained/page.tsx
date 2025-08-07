
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Home, AlertTriangle, Soup, Sprout, Info, ShieldCheck, ArrowLeft, HeartPulse, Droplet } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AppHeader } from '@/components/AppHeader';

const InfoCard = ({ icon, title, children, cardClassName }: { icon: React.ReactNode, title: string, children: React.ReactNode, cardClassName?: string }) => (
    <Card className={cardClassName}>
        <CardHeader className="flex flex-row items-center gap-4">
            {icon}
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="text-foreground/80 space-y-4">{children}</div>
        </CardContent>
    </Card>
);

const FaqItem = ({ value, question, answer }: { value: string, question: string, answer: string }) => (
    <AccordionItem value={value}>
        <AccordionTrigger>{question}</AccordionTrigger>
        <AccordionContent>
            <p>{answer}</p>
        </AccordionContent>
    </AccordionItem>
);


const SodiumExplainedPage = () => {
    return (
        <div className="bg-background text-foreground flex-1">
            <AppHeader />
            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <Button asChild variant="outline" className="mb-8">
                        <Link href="/renal-nutrition">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Renal Nutrition
                        </Link>
                    </Button>
                    <section className="text-center mb-16">
                        <Soup className="h-16 w-16 text-primary mx-auto mb-4" />
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">A Guide to Managing Sodium</h1>
                        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                            Understanding and limiting sodium is crucial for managing blood pressure, protecting your heart, and maintaining fluid balance, especially with kidney disease.
                        </p>
                    </section>

                    <div className="space-y-8">
                        <InfoCard icon={<AlertTriangle className="h-10 w-10 text-destructive" />} title="Why Sodium Intake Matters" cardClassName="border-destructive/20">
                            <p>Sodium is a mineral your body needs in small amounts. However, when kidney function declines, excess sodium can build up, forcing the body to retain fluid. This leads to serious issues like:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>High Blood Pressure (Hypertension):</strong> Extra fluid increases blood volume, straining the heart and blood vessels.</li>
                                <li><strong>Edema:</strong> Swelling in the legs, ankles, and face.</li>
                                <li><strong>Shortness of Breath:</strong> Fluid can accumulate around the lungs.</li>
                            </ul>
                            <p className="font-semibold">A healthy diet should include no more than 2,300 mg of sodium per day. Your doctor may recommend an even lower limit based on your health.</p>
                        </InfoCard>

                         <InfoCard icon={<Info className="h-10 w-10 text-primary" />} title="The Problem of Hidden Sodium" cardClassName="border-primary/20">
                            <p>Even if you avoid the salt shaker, you might be consuming too much sodium. A large percentage of sodium intake comes from processed and packaged foods, where it's used to enhance flavor and extend shelf life.</p>
                            <h3 className="font-semibold">Surprising Sources of High Sodium:</h3>
                             <ul className="list-disc pl-5 space-y-1">
                                <li><strong>"Healthy" Frozen Meals:</strong> Low-calorie or plant-based options can still contain over 600-1000 mg of sodium per serving.</li>
                                <li><strong>Breads and Cereals:</strong> A single slice of bread can have 150-200 mg.</li>
                                <li><strong>Canned Soups and Vegetables:</strong> Even organic varieties can be high in sodium. Rinsing canned beans and vegetables can remove up to 40% of the added salt.</li>
                                <li><strong>Sauces and Dressings:</strong> Condiments like ketchup, soy sauce, and salad dressings are often packed with sodium.</li>
                                <li><strong>Plant-Based Meats:</strong> Many meat alternatives contain significant amounts of sodium for taste and texture.</li>
                            </ul>
                        </InfoCard>
                        
                        <Card>
                            <CardHeader>
                                <CardTitle>Reducing Sodium: Food Swaps</CardTitle>
                                <CardDescription>Making smart choices can significantly lower your sodium intake. Here are some common high-sodium foods and better alternatives.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="text-destructive">High-Sodium Foods to Limit</TableHead>
                                            <TableHead className="text-green-600">Low-Sodium Alternatives</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Table salt, seasoning salts (garlic, onion salt), meat tenderizer, soy sauce, steak sauce.</TableCell>
                                            <TableCell>Fresh garlic/onion, garlic/onion powder, black pepper, lemon juice, vinegar, salt-free seasoning blends.</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Salted snacks (chips, pretzels, nuts), pickles, olives, sauerkraut.</TableCell>
                                            <TableCell>Unsalted crackers, popcorn, pretzels, nuts; fresh vegetables like cucumbers.</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Cured meats (ham, bacon, salt pork), luncheon meats (hot dogs, cold cuts, sausage), spam.</TableCell>
                                            <TableCell>Fresh beef, veal, pork, poultry, fish, eggs. Look for low-salt deli meats if available.</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Most canned soups, vegetables, and tomato products; processed cheese; frozen TV dinners, packaged mixes (e.g., mac & cheese), and fast food.</TableCell>
                                            <TableCell>Homemade or low-sodium soups; fresh or frozen vegetables; no-salt-added canned goods; natural cheeses in moderation.</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                        
                        <InfoCard icon={<Info className="h-10 w-10 text-primary" />} title="Tips for Reading Food Labels">
                            <p>Reading labels is a key skill for managing sodium. Look at the milligrams (mg) of sodium per serving.</p>
                            <ul className="list-disc pl-5">
                                <li><strong>Serving Size:</strong> All nutrition values are based on this amount. If you eat more, you get more sodium.</li>
                                <li><strong>Check Ingredients:</strong> If salt is one of the first five ingredients, the food is probably high in sodium.</li>
                                <li><strong>Understanding Terms:</strong>
                                    <ul className="list-disc pl-6 mt-2">
                                        <li><strong>Sodium-Free:</strong> Less than 5mg per serving.</li>
                                        <li><strong>Low Sodium:</strong> 140mg or less per serving.</li>
                                        <li><strong>Reduced Sodium:</strong> At least 25% less sodium than the regular version.</li>
                                    </ul>
                                </li>
                            </ul>
                        </InfoCard>

                        <InfoCard icon={<Sprout className="h-10 w-10 text-green-600" />} title="Spice Up Your Cooking Without Salt" cardClassName="border-green-600/20">
                            <p>Giving up salt doesn’t mean giving up flavor. Experiment with herbs and spices to create new and exciting tastes.</p>
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mt-4">
                                <p><strong>Allspice:</strong> Great with beef, fish, beets, cabbage, and carrots.</p>
                                <p><strong>Basil:</strong> Pairs well with beef, pork, and most vegetables.</p>
                                <p><strong>Caraway:</strong> Use with beef, pork, green beans, and cauliflower.</p>
                                <p><strong>Curry:</strong> Excellent for beef, chicken, pork, and fish.</p>
                                <p><strong>Dill:</strong> Perfect for beef, chicken, green beans, and carrots.</p>
                                <p><strong>Ginger:</strong> Adds a kick to beef, chicken, and pork dishes.</p>
                                <p><strong>Rosemary:</strong> Complements chicken, pork, and cauliflower.</p>
                                <p><strong>Thyme:</strong> A classic for beef, chicken, fish, and green beans.</p>
                            </div>
                             <p className="mt-4 font-semibold">Try natural umami sources like mushrooms, tomato paste, or nutritional yeast to add a savory depth to your dishes.</p>
                        </InfoCard>
                        
                        <InfoCard icon={<ShieldCheck className="h-10 w-10 text-primary" />} title="A Word of Caution on Salt Substitutes">
                            <p>Be very careful with salt substitutes! Most use potassium chloride to mimic the taste of salt. If you've been told to limit potassium, these products can be dangerous. Always check with your doctor or dietitian before using any salt substitute.</p>
                        </InfoCard>
                        
                        <Card>
                            <CardHeader>
                                <CardTitle>Frequently Asked Questions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="single" collapsible className="w-full">
                                    <FaqItem value="q1" question="Are flavoured waters or electrolyte drinks high in sodium?" answer="Yes, some sports drinks contain added sodium to help with hydration, but they are not always necessary unless you're exercising intensely. Always read the label." />
                                    <FaqItem value="q2" question="Is pink Himalayan salt better than regular salt?" answer="While it may contain trace minerals, pink salt has the same amount of sodium as regular salt. It is not a low-sodium option and should be used in moderation." />
                                    <FaqItem value="q3" question="Do gluten-free or vegan packaged foods have less sodium?" answer="Not necessarily. Many gluten-free and plant-based items contain added sodium to enhance taste and prolong shelf life. Always check the sodium content on the label." />
                                    <FaqItem value="q4" question="Can my taste buds adjust to less salt?" answer="Yes, within 2 to 3 weeks of reducing sodium, your taste buds become more sensitive to natural flavours, making less salty food taste better over time." />
                                </Accordion>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default SodiumExplainedPage;

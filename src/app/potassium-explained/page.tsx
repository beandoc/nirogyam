
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Home, HeartPulse, ShieldCheck, AlertTriangle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card>
        <CardHeader className="flex flex-row items-center gap-4">
            {icon}
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
    </Card>
);

const PotassiumExplainedPage = () => {
    return (
        <div className="bg-background text-foreground">
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
                            <Link href="/"><Home className="mr-2 h-4 w-4" />Home</Link>
                        </Button>
                    </nav>
                </div>
            </header>
            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <section className="text-center mb-16">
                        <HeartPulse className="h-16 w-16 text-primary mx-auto mb-4" />
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Potassium and Your Diet</h1>
                        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                           Potassium is a crucial mineral for nerve and muscle function, especially your heart. In CKD, keeping potassium levels in a safe range is essential.
                        </p>
                    </section>
                    
                    <div className="space-y-8">
                        <InfoCard icon={<AlertTriangle className="h-10 w-10 text-destructive" />} title="Managing Potassium Levels">
                            <p className="text-foreground/80">
                                People with kidney disease are at risk for potassium levels that are too high (hyperkalemia) or too low (hypokalemia). Your doctor will advise you whether you need to limit or increase potassium in your diet based on your lab results. Almost all foods contain potassium, but portion size is key—a large amount of a low-potassium food can become a high-potassium meal.
                            </p>
                        </InfoCard>

                         <Card>
                            <CardHeader>
                                <CardTitle>High- and Low-Potassium Food Choices</CardTitle>
                                <CardDescription>A "high-potassium" food has over 200mg per serving. Work with your dietitian to create a balanced plan.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-1/3">Food Category</TableHead>
                                            <TableHead className="text-destructive">Higher in Potassium (Limit)</TableHead>
                                            <TableHead className="text-green-600">Lower in Potassium (Choose More Often)</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">Fruits</TableCell>
                                            <TableCell>Apricots, avocado, banana, cantaloupe, dried fruits, kiwi, mango, oranges, papaya, pomegranate, prunes.</TableCell>
                                            <TableCell>Apples, berries, cherries, cranberries, grapes, grapefruit, peaches, pears, pineapple, plums, watermelon.</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Vegetables</TableCell>
                                            <TableCell>Acorn & butternut squash, artichoke, beans (dried), beets, cooked broccoli, potatoes, cooked spinach, tomatoes.</TableCell>
                                            <TableCell>Asparagus, green beans, raw broccoli, cabbage, cauliflower, corn, cucumber, eggplant, lettuce, onions, peppers.</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Other Foods</TableCell>
                                            <TableCell>Beef, chicken, chocolate, milk, nuts, peanut butter, salmon, yogurt, salt substitutes.</TableCell>
                                            <TableCell>Bread (not whole grain), cake, coffee/tea (in moderation), noodles, pasta, rice.</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                        
                        <InfoCard icon={<ShieldCheck className="h-10 w-10 text-primary" />} title="Tips to Lower Potassium in Your Food">
                             <h3 className="font-semibold mb-2">Leaching Vegetables</h3>
                            <p className="text-foreground/80 mb-4">Leaching is a process that can pull some (but not all) potassium out of high-potassium vegetables, allowing you to eat them in moderation. Ask your dietitian if this is a good strategy for you.</p>
                            <ol className="list-decimal pl-5 space-y-1 text-foreground/80">
                                <li>Peel and slice the vegetable into 1/8-inch thick pieces.</li>
                                <li>Rinse with warm water.</li>
                                <li>Soak for at least 2 hours in warm, unsalted water (use 10 parts water to 1 part vegetable).</li>
                                <li>Rinse again.</li>
                                <li>Cook the vegetable in fresh, unsalted water (use 5 parts water to 1 part vegetable).</li>
                            </ol>
                            <h3 className="font-semibold mt-4 mb-2">Another Easy Tip</h3>
                            <p className="text-foreground/80">Avoid drinking or using the liquid from canned fruits and vegetables, as well as the juices from cooked meat, as potassium leaches into these liquids.</p>
                        </InfoCard>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default PotassiumExplainedPage;

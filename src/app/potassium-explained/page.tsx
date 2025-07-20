
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Home, HeartPulse, ShieldCheck, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AppHeader } from '@/components/AppHeader';

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

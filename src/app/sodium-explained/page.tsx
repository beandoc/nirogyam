
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Home, AlertTriangle, Soup, Sprout, Info, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AppHeader } from '@/components/AppHeader';

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card>
        <CardHeader className="flex flex-row items-center gap-4">
            {icon}
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="text-foreground/80 space-y-4">{children}</div>
        </CardContent>
    </Card>
);

const SodiumExplainedPage = () => {
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
                        <Soup className="h-16 w-16 text-primary mx-auto mb-4" />
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Sodium and Your CKD Diet</h1>
                        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                            Learn how to limit sodium in your diet to manage blood pressure and fluid balance. Flavoring food with herbs and spices instead of salt is a key strategy for kidney health.
                        </p>
                    </section>

                    <div className="space-y-8">
                        <InfoCard icon={<AlertTriangle className="h-10 w-10 text-destructive" />} title="Why Limiting Sodium Is Crucial">
                            <p>Healthy kidneys control the amount of sodium in your body. When kidney function declines, excess sodium and fluid can build up, leading to serious issues like swollen ankles (edema), high blood pressure, shortness of breath, and dangerous fluid around your heart and lungs. By using less sodium, you can help manage these problems.</p>
                            <p className="font-semibold">A healthy diet should include no more than 2,300 mg of sodium per day, but your doctor may recommend less.</p>
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
                                <li><strong>General Rule:</strong> If an item has more milligrams of sodium than calories per serving, it's likely too high.</li>
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

                        <InfoCard icon={<Sprout className="h-10 w-10 text-green-600" />} title="Spice Up Your Cooking Without Salt">
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
                        </InfoCard>
                        
                        <InfoCard icon={<ShieldCheck className="h-10 w-10 text-primary" />} title="A Word of Caution on Salt Substitutes">
                            <p>Be very careful with salt substitutes! Most use potassium chloride to mimic the taste of salt. If you've been told to limit potassium, these products can be dangerous. Always check with your doctor or dietitian before using any salt substitute.</p>
                        </InfoCard>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default SodiumExplainedPage;

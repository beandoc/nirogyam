
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Home, Bone, Droplet, Stethoscope, AlertTriangle, ShieldCheck, Soup } from 'lucide-react';
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

const PhosphorusExplainedPage = () => {
    return (
        <div className="bg-background text-foreground flex-1">
            <AppHeader />
            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <section className="text-center mb-16">
                        <Bone className="h-16 w-16 text-primary mx-auto mb-4" />
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Phosphorus and Your Diet</h1>
                        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                            Phosphorus is a mineral essential for building strong bones and keeping your body healthy. When you have CKD, managing phosphorus is key to protecting your bones and heart.
                        </p>
                    </section>

                    <div className="space-y-8">
                        <InfoCard icon={<AlertTriangle className="h-10 w-10 text-destructive" />} title="Why Phosphorus Matters in CKD">
                            <p className="text-foreground/80">
                                Healthy kidneys filter extra phosphorus from your blood. In CKD, this filtering ability is reduced, leading to high phosphorus levels. This imbalance can pull calcium from your bones, making them weak and brittle. It also causes dangerous calcium deposits in blood vessels, lungs, eyes, and the heart, increasing the risk of heart attack, stroke, or death. A normal phosphorus level is 2.5 to 4.5 mg/dL.
                            </p>
                        </InfoCard>

                        <InfoCard icon={<Stethoscope className="h-10 w-10 text-primary" />} title="How to Control Your Phosphorus Level">
                            <p className="text-foreground/80 mb-4">You can manage phosphorus through diet, dialysis, and medications. Dialysis removes some phosphorus, but limiting it between treatments is crucial.</p>
                            <h3 className="font-semibold mb-2">Organic vs. Inorganic Phosphorus</h3>
                            <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                                <li><strong>Organic Phosphorus:</strong> Naturally found in protein-rich foods like meats, poultry, fish, nuts, beans, and dairy. Phosphorus from animal sources is more easily absorbed than from plant sources.</li>
                                <li><strong>Inorganic Phosphorus (Additives):</strong> Added to processed foods like fast food, deli meats, and bottled drinks. This type is almost completely absorbed by the body. Avoid foods with "PHOS" in the ingredients list.</li>
                            </ul>
                        </InfoCard>

                        <Card>
                            <CardHeader>
                                <CardTitle>Choosing Low-Phosphorus Foods</CardTitle>
                                <CardDescription>Your dietitian can help you make smart swaps. Here are some examples:</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-1/3">Food Category</TableHead>
                                            <TableHead className="text-destructive">High Phosphorus (Limit or Avoid)</TableHead>
                                            <TableHead className="text-green-600">Lower Phosphorus (Enjoy)</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">Beverages</TableCell>
                                            <TableCell>Beer, dark colas, canned iced teas, drinks with milk or phosphate additives.</TableCell>
                                            <TableCell>Water, coffee, tea, clear sodas (ginger ale, lemon-lime), most fruit juices.</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Dairy</TableCell>
                                            <TableCell>Cheese, milk, ice cream, pudding, most yogurts.</TableCell>
                                            <TableCell>Rice milk, almond milk, cottage cheese, vegan cheese, sherbet, popsicles.</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Protein</TableCell>
                                            <TableCell>Organ meats (liver), sardines, deli meats, bacon, sausage, hot dogs.</TableCell>
                                            <TableCell>Chicken, turkey, fish, beef, veal, eggs, lamb, pork.</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Other</TableCell>
                                            <TableCell>Chocolate, caramel, pizza, most processed foods, oat bran.</TableCell>
                                            <TableCell>Fruits, vegetables, rice cakes, unsalted pretzels/popcorn, sugar cookies.</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>

                        <InfoCard icon={<ShieldCheck className="h-10 w-10 text-primary" />} title="Phosphate Binders">
                            <p className="text-foreground/80">
                                Your doctor may prescribe phosphate binders, which are medications you take with meals and snacks. These binders act like sponges, soaking up phosphorus from your food in your gut so it doesn't get absorbed into your blood. It's crucial to take them as directed to effectively control your phosphorus levels.
                            </p>
                        </InfoCard>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PhosphorusExplainedPage;

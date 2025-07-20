
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Home, Bone, Droplet, Stethoscope, AlertTriangle, ShieldCheck, Soup } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

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
        <div className="flex">
            <Sidebar>
                <AppSidebar />
            </Sidebar>
            <SidebarInset>
                <div className="bg-background text-foreground flex-1">
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
            </SidebarInset>
        </div>
    );
};

export default PhosphorusExplainedPage;

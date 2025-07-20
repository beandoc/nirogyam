
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Leaf, ShoppingCart, Pill, Dumbbell, HeartPulse, CheckCircle, Gauge, Hand, Ban, Droplet, Apple, TestTube2 } from 'lucide-react';

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card>
        <CardHeader className="flex flex-row items-center gap-4">
            {icon}
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="text-foreground/80 space-y-3">{children}</div>
        </CardContent>
    </Card>
);

const PreventionTipCard = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
    <Card className="text-center p-4">
        <CardHeader className="items-center">
            <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                {icon}
            </div>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
    </Card>
);

const GoodNutritionPage = () => {
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
                            <Link href="/"><Home className="mr-2 h-4 w-4" /> Home</Link>
                        </Button>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <section id="intro" className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Good Nutrition for Better Health</h1>
                        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                            Good nutrition is fundamental to your physical and mental well-being. A balanced diet provides the energy and nutrients your body needs to function at its best.
                        </p>
                    </section>
                    
                    <div className="space-y-8">
                        <InfoCard icon={<Leaf className="h-8 w-8 text-primary" />} title="What Are Nutrients?">
                            <p>Nutrients are essential components in food that your body uses to grow, repair tissues, and build new muscle. No single food provides all the nutrients you need. A healthy diet requires combining foods from various food groups to meet your body's daily requirements.</p>
                        </InfoCard>

                        <InfoCard icon={<HeartPulse className="h-8 w-8 text-primary" />} title="How to Eat a Healthy Diet">
                            <p>Following a balanced eating plan is the cornerstone of good health. Here are some simple guidelines:</p>
                             <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li><strong>Eat a Variety:</strong> Consume a wide range of foods from all food groups to ensure you get a broad spectrum of nutrients.</li>
                                <li><strong>Limit Unhealthy Fats and Sugar:</strong> Opt for foods that are low in saturated fats, trans fats, and added sugars.</li>
                                <li><strong>Reduce Salt Intake:</strong> Choose and prepare foods with low sodium content to support heart and kidney health.</li>
                                <li><strong>Read Food Labels:</strong> Understanding nutrition labels helps you make informed choices about what you eat.</li>
                            </ul>
                             <Button asChild variant="link" className="px-0 mt-4">
                                <a href="https://www.choosemyplate.gov/food-groups/" target="_blank" rel="noopener noreferrer">Explore Food Groups with MyPlate.gov</a>
                             </Button>
                        </InfoCard>

                        <InfoCard icon={<ShoppingCart className="h-8 w-8 text-primary" />} title="Smart Shopping: Understanding Food Labels">
                            <p>The Nutrition Facts label on packaged foods is a powerful tool. By law, it provides key information to help you make healthier choices. The label shows:</p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li><strong>Serving Size:</strong> The amount of food the nutrition information is based on.</li>
                                <li><strong>Calories and Fat:</strong> The total calories per serving and how many of those come from fat.</li>
                                <li><strong>Vitamins and Minerals:</strong> A list of important nutrients the food provides.</li>
                            </ul>
                        </InfoCard>

                        <InfoCard icon={<Pill className="h-8 w-8 text-primary" />} title="Vitamins, Minerals, and Supplements">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-lg text-foreground mb-2">Do I need a vitamin and mineral supplement?</h3>
                                    <p>A well-balanced diet typically provides all the vitamins and minerals your body needs. Supplements may be necessary if your diet lacks variety, but you should always consult your doctor before starting any new supplement.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-foreground mb-2">Are herbal supplements safe?</h3>
                                    <p>Not always. Herbal supplements are not regulated by the FDA, so their purity, safety, and effectiveness are not guaranteed. They can cause allergic reactions or interfere with prescribed medications. Always check with your doctor or dietitian before taking any herbal product.</p>
                                </div>
                            </div>
                        </InfoCard>

                        <InfoCard icon={<Dumbbell className="h-8 w-8 text-primary" />} title="The Importance of Physical Activity">
                            <p>When combined with a healthy diet, regular physical activity is a cornerstone of overall health. Aim for 150-300 minutes of moderate-intensity exercise per week, which can be broken into smaller, 10-minute sessions. Regular exercise helps:</p>
                             <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>Maintain a healthy weight and lose excess weight.</li>
                                <li>Prevent chronic diseases like type 2 diabetes, heart disease, high blood pressure, and CKD.</li>
                                <li>Prevent high cholesterol.</li>
                                <li>Build strength, endurance, and cope with stress.</li>
                            </ul>
                        </InfoCard>
                    </div>

                    <section id="prevention-tips" className="py-20 bg-background">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-primary">Guarding Your Health: Simple Tips for Happy Kidneys</h2>
                                <p className="text-lg text-foreground/80 mt-2 max-w-3xl mx-auto">
                                    Small, consistent habits can make a big difference in keeping your kidneys healthy. Here are some simple tips to keep your kidneys smiling.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <PreventionTipCard icon={<Gauge className="h-8 w-8 text-primary" />} title="Maintain Normal Blood Pressure" />
                                <PreventionTipCard icon={<Hand className="h-8 w-8 text-primary" />} title="Hand Hygiene" />
                                <PreventionTipCard icon={<Ban className="h-8 w-8 text-primary" />} title="Avoid Pain Killers" />
                                <PreventionTipCard icon={<Droplet className="h-8 w-8 text-primary" />} title="Check Blood Sugar" />
                                <PreventionTipCard icon={<Apple className="h-8 w-8 text-primary" />} title="Healthy Diet" />
                                <PreventionTipCard icon={<TestTube2 className="h-8 w-8 text-primary" />} title="Test for Protein in Urine" />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default GoodNutritionPage;


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

const HypertensionAndKidneyDiseasePage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Hypertension and Kidney Disease: A Dietary Guide</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>Hypertension (high blood pressure) and kidney diseases are closely linked. When blood pressure remains high for a long duration, it puts extra strain on the kidneys, gradually reducing their ability to filter waste and excess fluids. Over time, this can cause chronic kidney disease (CKD) and even kidney failure. Proper nutrition is crucial in managing both conditions, helping control blood pressure and slowing down kidney damage.</p>
                    </div>

                    <InfoCard title="Key Nutritional Strategies">
                        <h3 className="font-semibold text-xl text-foreground">Reduce Sodium Intake</h3>
                        <p>Excess sodium intake increases blood pressure and causes fluid retention. Limiting sodium helps reduce swelling, lower blood pressure, and decrease the workload on the kidneys.</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Opt for fresh, whole foods instead of canned or processed options.</li>
                            <li>Season your home-cooked meals with herbs and spices instead of salt.</li>
                            <li>Check food labels and choose options with low sodium or no added salt.</li>
                            <li>Reduce consumption of fast food and restaurant meals.</li>
                            <li>Avoid adding extra salt to cooked food, curd, or salads.</li>
                        </ul>

                        <h3 className="font-semibold text-xl text-foreground mt-6">Maintain Potassium Balance</h3>
                        <p>Potassium is necessary for heart and muscle function, but impaired kidneys can let it build up to dangerous levels, causing cardiac arrhythmias and muscle weakness.</p>
                        <p><strong>High-Potassium Foods to Limit:</strong> Bananas, oranges, avocados, potatoes, tomatoes, spinach, dairy products, nuts, citrus juices, coconut water, and lemon water.</p>
                        <p><strong>Better Low-Potassium Choices:</strong> Apples, berries, papaya, guava, pear, pineapple, cabbage, cauliflower, cucumbers, white rice, and refined grains.</p>

                        <h3 className="font-semibold text-xl text-foreground mt-6">Control Protein Intake</h3>
                        <p>Protein is necessary, but excess can strain the kidneys. Moderation is key.</p>
                        <p><strong>Best Protein Sources:</strong> Skinless poultry, fish, egg whites, and plant-based proteins like tofu and lentils (in moderation).</p>
                        <p><strong>Proteins to Avoid:</strong> Red meats, processed meats (bacon, sausages), and high-fat dairy products.</p>
                        
                        <h3 className="font-semibold text-xl text-foreground mt-6">Stay Hydrated, but Don’t Overdo It</h3>
                        <p>Proper hydration helps the kidneys filter waste, but fluid overload can be an issue in advanced kidney disease. Drink small amounts of water throughout the day and limit high-sodium foods to reduce thirst.</p>
                    </InfoCard>

                    <InfoCard title="Kidney-Friendly Diet Plans">
                        <h3 className="font-semibold text-xl text-foreground">DASH Diet (Dietary Approaches to Stop Hypertension)</h3>
                        <p>The DASH diet emphasizes fruits, vegetables, whole grains, and lean proteins. It helps lower blood pressure, but those with advanced CKD may need to limit potassium-rich foods within this plan.</p>
                        <h3 className="font-semibold text-xl text-foreground mt-4">Renal Diet</h3>
                        <p>A renal diet is personalized by a dietitian to control sodium, potassium, phosphorus, and protein intake based on your specific kidney function, making it an excellent choice for managing both CKD and high blood pressure.</p>
                    </InfoCard>

                    <InfoCard title="Lifestyle and Dietary Tips">
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Plan Your Meals Wisely:</strong> Opt for home-cooked meals to control salt and fat.</li>
                            <li><strong>Read Food Labels Carefully:</strong> Look for low-sodium, low-potassium, and low-phosphorus options and check for hidden salts.</li>
                            <li><strong>Practice Portion Control:</strong> Stick to smaller, frequent meals instead of large portions to reduce strain on the kidneys.</li>
                            <li><strong>Maintain a Healthy Weight:</strong> Engage in light exercise like walking or yoga, as recommended by your doctor.</li>
                            <li><strong>Manage Stress and Sleep Well:</strong> Practice relaxation techniques and aim for good sleep to keep blood pressure down.</li>
                        </ul>
                    </InfoCard>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">Frequently Asked Questions</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Can I eat dairy if I have high blood pressure and kidney disease?</AccordionTrigger>
                                    <AccordionContent>
                                    Dairy can be high in potassium and phosphorus. Opt for small amounts of low-phosphorus options like almond or rice milk instead.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Is coffee safe for people with hypertension and kidney disease?</AccordionTrigger>
                                    <AccordionContent>
                                    Coffee is generally safe in moderation. However, excessive caffeine can increase blood pressure, so limit intake to one or two cups daily.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Are artificial sweeteners safe for kidney patients?</AccordionTrigger>
                                    <AccordionContent>
                                    Most artificial sweeteners are safe in small amounts, but it's best to avoid excess processed foods containing them. Natural alternatives like stevia can be a better choice.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>How can I reduce cravings for salty snacks?</AccordionTrigger>
                                    <AccordionContent>
                                    Try using herbs, lemon juice, or vinegar for flavour. Snacking on unsalted nuts or air-popped popcorn can also help.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>Can I still eat out at restaurants?</AccordionTrigger>
                                    <AccordionContent>
                                    Yes, but choose grilled over fried foods, ask for no added salt, and request dressings or sauces on the side to control sodium intake.
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

export default HypertensionAndKidneyDiseasePage;

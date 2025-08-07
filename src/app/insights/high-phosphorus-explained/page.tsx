
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

const HighPhosphorusExplainedPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">The Hidden Danger in Your Blood: Understanding High Phosphorus in Kidney Disease</h1>

                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>If you have Chronic Kidney Disease (CKD), your doctor and dietitian will talk to you about managing many things in your diet, like salt and potassium. But there's another mineral they watch very closely: phosphorus.</p>
                        <p>When the level of phosphorus in your blood gets too high, it's called hyperphosphatemia (pronounced: high-per-fos-fa-TEE-mia). This is a common and serious problem for people with kidney disease, but with the right knowledge, it can be managed effectively.</p>
                        <p>Let's break down why this happens and what you can do about it.</p>
                    </div>

                    <InfoCard title="Why is High Phosphorus a Problem?">
                        <p>Phosphorus is a mineral that is essential for building strong bones and teeth. In a healthy body, it works in balance with calcium. But when you have CKD, this balance gets thrown off.</p>
                        <p><strong>How it Works:</strong> Healthy kidneys are experts at filtering out any extra phosphorus that your body doesn't need. When your kidneys are damaged, they can't do this job properly. As a result, phosphorus starts to build up in your blood.</p>
                        <p><strong>The Danger:</strong> This is where the problem starts.</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Weak Bones:</strong> High phosphorus levels in your blood can pull calcium out of your bones, making them weak and brittle over time.</li>
                            <li><strong>Heart and Blood Vessel Damage:</strong> Even more dangerously, this excess phosphorus and calcium can get deposited in your blood vessels, making them hard and stiff (like scale building up in a water pipe). This significantly increases your risk of heart attacks and other cardiovascular problems.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="What are the Symptoms? Is It Noticeable?">
                        <p>This is why high phosphorus is often called a "hidden danger." You usually won't "feel" any direct symptoms. That's why regular blood tests are so crucial.</p>
                        <p>However, as it affects your body's calcium levels, it can lead to indirect symptoms like:</p>
                        <ul className="list-disc pl-6">
                            <li>Muscle cramps or twitches</li>
                            <li>Numbness or a tingling feeling, especially around the mouth</li>
                            <li>Itchy skin</li>
                            <li>Bone pain</li>
                        </ul>
                        <p>High phosphorus can also make the general symptoms of kidney disease, like fatigue and poor appetite, feel worse.</p>
                    </InfoCard>

                    <InfoCard title="Your 3-Part Plan to Control Phosphorus">
                        <p>Managing high phosphorus requires a team effort between you, your doctor, and your dietitian. The approach typically involves three key strategies:</p>
                        <h3 className="font-semibold text-xl text-foreground mt-4">1. The Low-Phosphorus Diet</h3>
                        <p>This is your first and most important tool. You will need to learn which foods are high in phosphorus and either limit them or avoid them. A kidney dietitian is the best person to guide you on this.</p>
                        
                        <h3 className="font-semibold text-xl text-foreground mt-4">2. Phosphate Binders</h3>
                        <p>Your doctor will likely prescribe a medicine called a "phosphate binder." These are pills that you must take with your meals and snacks.</p>
                        <p><strong>How they work:</strong> They act like a sponge inside your stomach and intestines. They "bind" to the phosphorus in the food you've just eaten and prevent it from being absorbed into your blood. Instead, it passes out of your body in your stool.</p>
                        <p><strong>Remember:</strong> For these medicines to work, you must take them with your food!</p>

                        <h3 className="font-semibold text-xl text-foreground mt-4">3. Dialysis</h3>
                        <p>For patients on dialysis, the treatment itself helps to remove a significant amount of phosphorus from the blood. Your dialysis team will monitor your levels closely and may adjust your treatment to help manage it better.</p>
                    </InfoCard>

                    <InfoCard title="A Quick Guide to the Low-Phosphorus Diet">
                        <p>Here are some common foods that are high in phosphorus and often need to be limited.</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Dairy Products:</strong> Milk, cheese, paneer, dahi (curd), and ice cream.</li>
                            <li><strong>Processed & Packaged Foods:</strong> This is a huge category. Anything in a packet, tin, or box is suspect. Processed meats (like sausages), packaged snacks, and ready-to-eat meals often contain phosphorus additives that are very easily absorbed by the body.</li>
                            <li><strong>Dark Colas & Fizzy Drinks:</strong> These are a major source of hidden phosphorus and should be avoided.</li>
                            <li><strong>Nuts, Seeds, and Chocolate.</strong></li>
                            <li><strong>Whole Grains and Legumes:</strong> While healthy for others, things like whole wheat bread (atta), brown rice, and whole dals or beans (like chana and rajma) are high in phosphorus. Your dietitian will advise you on portion sizes and alternatives.</li>
                        </ul>
                        <p className="font-bold mt-4">Pro-Tip: Learn to read food labels. Avoid products with ingredients that have "PHOS" in their name (e.g., dicalcium phosphate).</p>
                    </InfoCard>

                    <InfoCard title="A Final Word">
                        <p>Managing high phosphorus is a critical part of living well with kidney disease. While it might seem like a lot to learn, it is absolutely manageable with the right approach. By following a kidney-friendly diet, taking your phosphate binders correctly with every meal, and working closely with your healthcare team, you can protect your bones and your heart for years to come. Don't be afraid to ask questions—taking control of this part of your health is a powerful step forward.</p>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default HighPhosphorusExplainedPage;


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

const ProteinDietAndKidneysPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Protein Powders, Paneer, and Your Kidneys: Is a High-Protein Diet Safe?</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>In today's fitness-conscious world, high-protein diets are more popular than ever. From whey protein shakes after a gym session to loading up on paneer, eggs, and chicken, many of us are trying to increase our protein intake for better health and muscle growth.</p>
                        <p>But with this trend comes a common, nagging fear: "Will all this extra protein damage my kidneys?"</p>
                        <p>Let's bust this popular myth and look at what the science really says.</p>
                    </div>

                    <InfoCard title="The Myth vs. The Fact">
                        <p>It's time to set the record straight.</p>
                        <p><strong>The Myth:</strong> Eating a lot of protein will strain and damage your kidneys over time.</p>
                        <p><strong>The Fact:</strong> For the vast majority of people who have healthy, normal-functioning kidneys, this is simply not true. Scientific studies have repeatedly failed to show a link between a high-protein diet and kidney damage in healthy individuals.</p>
                    </InfoCard>

                    <InfoCard title="How Your Body Handles Protein">
                        <p>Think of your kidneys as a strong and efficient cleaning crew. When you eat protein, your body breaks it down into essential building blocks (amino acids) that it uses to repair tissues, build muscle, and support your immune system.</p>
                        <p>Any extra waste products from this process are easily filtered out by your healthy kidneys and removed from your body through urine. For a healthy kidney, this is just a routine part of its daily job. It is not "overworked" by a normal high-protein diet.</p>
                    </InfoCard>
                    
                    <InfoCard title="The Critical Exception: When You Already Have a Kidney Problem">
                        <p>Here is where the confusion often comes from, and this is a very important point.</p>
                        <p>If you have a pre-existing kidney condition, like Chronic Kidney Disease (CKD), your kidneys' filtering ability is already weakened. In this specific situation, a high-protein diet can indeed be harmful because it forces the damaged filters to work harder than they can handle.</p>
                        <p>This is why doctors often recommend a protein-restricted diet for patients with kidney disease. This advice is for people with diagnosed kidney problems, not for the general healthy population.</p>
                    </InfoCard>

                    <InfoCard title="Smart Protein Consumption: 3 Golden Rules">
                        <p>If you have healthy kidneys and want to follow a high-protein diet, do it smartly.</p>
                        <ol className="list-decimal pl-6 space-y-3">
                            <li>
                                <strong>Keep Your Diet Balanced</strong>
                                <p>A high-protein diet shouldn't mean a no-carb or no-fat diet. Your body thrives on balance. Make sure your protein source is part of a wholesome meal that includes plenty of vegetables, whole grains, and healthy fats. Think of a balanced thali, not just a plate of chicken or a scoop of protein powder.</p>
                            </li>
                            <li>
                                <strong>Stay Well-Hydrated</strong>
                                <p>This is non-negotiable. When you consume more protein, your kidneys need more water to help flush out the waste byproducts. Make sure you are drinking plenty of water throughout the day. This supports your kidneys and helps them do their job efficiently.</p>
                            </li>
                            <li>
                                <strong>When in Doubt, Ask a Professional</strong>
                                <p>Before making any drastic changes to your diet, especially if you have other health concerns (like diabetes or high blood pressure) or a family history of kidney problems, it's always wise to consult a doctor or a registered dietitian. They can provide guidance that is personalized for your body and your health goals.</p>
                            </li>
                        </ol>
                    </InfoCard>

                    <InfoCard title="The Bottom Line">
                        <p>So, can you enjoy your high-protein diet without worrying about your kidneys? For most healthy people, the answer is a clear yes. The idea that it harms healthy kidneys is a myth. Protein is an essential nutrient for a strong body.</p>
                        <p>Just remember the keys to doing it right: maintain a balanced diet, drink plenty of water, and most importantly, understand that the rules are different if you have an existing kidney condition.</p>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default ProteinDietAndKidneysPage;

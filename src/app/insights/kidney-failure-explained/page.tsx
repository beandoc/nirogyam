
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

const KidneysExplainedPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Your Kidneys Explained: A Simple Guide to Health and Failure</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>Our kidneys are amazing organs. Think of them as your body's super-efficient cleaning system. Their main job is to filter waste and extra fluid out of your blood to make urine. But what happens when this system runs into trouble?</p>
                        <p>When kidneys can no longer do their job properly, harmful waste and fluids can build up in your body. This condition is called kidney failure, and it's a serious health concern. Many things can lead to it, like diabetes and high blood pressure. In India, it's estimated that a significant portion of the population lives with some form of kidney disease, making it crucial to understand the basics.</p>
                        <p>Let's break down what you need to know about kidney health in a simple way.</p>
                    </div>

                    <InfoCard title="Two Main Types of Kidney Trouble">
                        <p>Kidney trouble isn't a one-size-fits-all problem. It generally comes in two forms:</p>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground">Acute Kidney Injury (AKI)</h3>
                            <p>This is when your kidneys are suddenly damaged and stop working properly over a few hours or days. The good news is that it's often reversible if treated quickly. Common causes include:</p>
                            <ul className="list-disc pl-6">
                                <li><strong>Reduced blood flow:</strong> Severe dehydration or heart problems can prevent enough blood from reaching the kidneys.</li>
                                <li><strong>Direct damage:</strong> Infections, certain drugs, or toxins can directly harm the kidney tissue.</li>
                                <li><strong>Blockages:</strong> Things like kidney stones or an enlarged prostate can block urine from leaving the kidneys, causing a backup of pressure and damage.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground">Chronic Kidney Disease (CKD)</h3>
                            <p>This is a much slower process. Kidney function is lost gradually over months or even years. CKD is often caused by long-term conditions that put a strain on the kidneys. It's measured in five stages, with Stage 5 being the most severe, known as End-Stage Renal Disease (ESRD). The most common causes are:</p>
                            <ul className="list-disc pl-6">
                                <li><strong>Diabetes:</strong> High blood sugar can damage the tiny filtering units in the kidneys over time.</li>
                                <li><strong>High Blood Pressure (Hypertension):</strong> This puts extra pressure on the blood vessels in the kidneys, wearing them out.</li>
                                <li><strong>Genetic Conditions:</strong> Polycystic Kidney Disease (PKD), which causes cysts to grow on the kidneys, is one example.</li>
                                <li><strong>Inflammation:</strong> Certain diseases can cause the kidney's filters (the glomeruli) to become inflamed and scarred.</li>
                            </ul>
                            <p>When a person reaches End-Stage Renal Disease (ESRD), their kidneys are barely working, or not at all. At this point, they need regular dialysis or a kidney transplant to survive.</p>
                        </div>
                    </InfoCard>

                    <InfoCard title="Warning Signs: What to Look For">
                        <p>Kidney problems can be sneaky, and symptoms might not appear until the condition is advanced. Here are some common signs to watch for:</p>
                        <ul className="list-disc pl-6">
                            <li>Changes in urination: Peeing less than usual, or needing to pee more often, especially at night.</li>
                            <li>Swelling: Puffy eyes or swelling in your hands, feet, or ankles due to fluid buildup.</li>
                            <li>Feeling tired: A buildup of waste in your blood can leave you feeling constantly fatigued and weak.</li>
                            <li>Loss of appetite: You might lose interest in food, which can lead to weight loss.</li>
                            <li>Nausea and vomiting.</li>
                            <li>Blood in your urine or foamy-looking urine.</li>
                        </ul>
                        <p>If you notice these symptoms, it's important to see a doctor.</p>
                    </InfoCard>

                    <InfoCard title="What Causes Kidney Problems?">
                        <p>The two biggest causes of kidney failure are by far:</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Diabetes:</strong> The #1 cause.</li>
                            <li><strong>High Blood Pressure:</strong> The #2 cause.</li>
                        </ul>
                        <p>Other factors include:</p>
                        <ul className="list-disc pl-6">
                            <li>Autoimmune diseases like lupus.</li>
                            <li>Genetic diseases, such as polycystic kidney disease.</li>
                            <li>Issues in the urinary tract, like recurring kidney stones.</li>
                            <li>Smoking tobacco.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="How Do Doctors Find Out What's Wrong?">
                        <p>To diagnose kidney problems, your doctor will use a few key methods:</p>
                        <ul className="list-disc pl-6">
                            <li><strong>A Chat and a Check-up:</strong> They'll ask about your symptoms, family history, and any medications you take, followed by a physical exam to look for signs like swelling or high blood pressure.</li>
                            <li><strong>Blood Tests:</strong> These are very important. They check for waste products like creatinine and urea in your blood. A key result is the estimated Glomerular Filtration Rate (eGFR), which is a score that shows how well your kidneys are filtering.</li>
                            <li><strong>Urine Tests:</strong> Checking your pee for things that shouldn't be there, like protein or blood, can signal kidney damage.</li>
                            <li><strong>Imaging:</strong> An ultrasound, CT scan, or MRI can give your doctor a picture of your kidneys to check for blockages or other structural problems.</li>
                            <li><strong>Kidney Biopsy:</strong> In some cases, a doctor may need to take a tiny sample of your kidney tissue to examine under a microscope to find the exact cause of the problem.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="Getting Better: Treatment Options">
                        <p>Treatment depends on whether the kidney problem is acute (sudden) or chronic (long-term).</p>
                        <ul className="list-disc pl-6">
                            <li><strong>For Acute Kidney Injury (AKI):</strong> The main goal is to treat the underlying cause. This could mean giving IV fluids for dehydration, stopping a harmful medication, or removing a blockage. Sometimes, temporary dialysis is needed to clean the blood while the kidneys recover.</li>
                            <li><strong>For Chronic Kidney Disease (CKD):</strong> Since CKD is usually not reversible, the focus is on slowing it down and managing symptoms. This includes:
                                <ul className="list-disc pl-6">
                                    <li>Lifestyle Changes: A healthy diet low in salt, phosphorus, and potassium is key. Regular exercise and quitting smoking also help.</li>
                                    <li>Medications: To control blood pressure, manage anemia (low red blood cells), and balance minerals in your body.</li>
                                    <li>Dialysis: When kidney function gets very low, dialysis becomes necessary. This is a treatment that cleans your blood for you, either with a machine (hemodialysis) or using the lining of your abdomen (peritoneal dialysis).</li>
                                    <li>Kidney Transplant: For eligible patients, receiving a healthy kidney from a donor is the best long-term solution, offering a chance at a more normal life.</li>
                                </ul>
                            </li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="Can I Prevent Kidney Problems?">
                        <p>Yes! You can take steps to reduce your risk of developing kidney disease:</p>
                        <ul className="list-disc pl-6">
                            <li>Control Blood Pressure: Keep it in a healthy range with diet, exercise, and medication if needed.</li>
                            <li>Manage Blood Sugar: If you have diabetes, tight control of your blood sugar is the best way to protect your kidneys.</li>
                            <li>Eat a Healthy Diet: Focus on fruits, vegetables, and whole grains. Cut back on salt and processed foods.</li>
                            <li>Stay Hydrated: Drink enough water throughout the day.</li>
                            <li>Exercise Regularly: Aim for at least 30 minutes of activity on most days.</li>
                            <li>Be Careful with Medications: Avoid overusing over-the-counter pain relievers (NSAIDs), as they can harm kidneys over time.</li>
                            <li>Maintain a Healthy Weight.</li>
                        </ul>
                        <p>If you have risk factors like diabetes, high blood pressure, or a family history of kidney disease, talk to your doctor about getting regular screening tests. Early detection is the best way to keep your kidneys healthy for years to come.</p>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default KidneysExplainedPage;

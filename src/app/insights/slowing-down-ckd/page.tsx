
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

const SlowingDownCKDPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Hitting the Brakes on CKD: A Modern Guide to Slowing Down Kidney Disease</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>Chronic Kidney Disease (CKD) is a growing health concern in India, often linked to the rising rates of diabetes and high blood pressure. Being diagnosed with CKD can feel overwhelming, but it's important to know that you can take active steps to manage it.</p>
                        <p>The goal is clear: to "hit the brakes" and slow down the progression of the disease as much as possible. The good news is that today, we have more tools and knowledge than ever before to help you do just that. Let's explore the modern, holistic approach to protecting your kidneys and living a healthier life.</p>
                    </div>

                    <InfoCard title="It All Starts with You: The Power of Lifestyle">
                        <p>Your daily habits are the foundation of managing CKD. These changes can have a massive impact on slowing the disease and improving your quality of life.</p>
                        <h3 className="font-semibold text-xl mt-4">Eat for Your Kidneys:</h3>
                        <p>Your diet is one of your most powerful tools. This doesn't mean your food has to be boring! It often involves working with your doctor or a dietitian to find the right balance for you. Common advice includes:</p>
                        <ul className="list-disc pl-6">
                            <li>Limiting your salt intake to help control blood pressure.</li>
                            <li>Managing the amount of protein you eat.</li>
                            <li>Focusing on a diet rich in fresh fruits, vegetables, and whole grains.</li>
                        </ul>
                        <h3 className="font-semibold text-xl mt-4">Get Moving:</h3>
                        <p>You don't need to run a marathon. Aim for about 30 minutes of moderate activity, like a brisk walk, swimming, or cycling, on most days of the week. Regular exercise helps control your weight, blood pressure, and blood sugar.</p>
                        <h3 className="font-semibold text-xl mt-4">Let Go of Harmful Habits:</h3>
                        <p>Quitting smoking and limiting alcohol are non-negotiable steps. Both put extra strain on your kidneys and your entire body.</p>
                        <h3 className="font-semibold text-xl mt-4">Mind Your Mind:</h3>
                        <p>Stress affects your physical health. Practices like yoga, meditation, deep breathing, or even laughter therapy and prayer are now recognized as important parts of a complete health plan. They help manage stress, which in turn helps manage your health.</p>
                    </InfoCard>

                    <InfoCard title="New Hope: Modern Medicines Are a Game-Changer">
                        <p>For a long time, the main medical treatments for CKD focused on controlling blood pressure and blood sugar. These medications are still incredibly important.</p>
                        <p>However, the last few years have brought exciting breakthroughs. Several new classes of medications have been developed that do more than just manage symptoms. These newer drugs have been scientifically proven to provide direct protection to both the heart and the kidneys, significantly slowing down the progression of CKD in many patients.</p>
                        <p>This has been a huge source of hope for people living with kidney disease. If you have CKD, it's a great idea to talk to your doctor to see if one of these newer, protective medications could be right for you.</p>
                    </InfoCard>
                    
                    <InfoCard title="Smarter Healthcare for Your Kidneys">
                        <p>Technology is also changing how CKD is managed, making care more personal and proactive.</p>
                        <h3 className="font-semibold text-xl mt-4">Care That's Just for You (Precision Medicine):</h3>
                        <p>Instead of a one-size-fits-all treatment, doctors can now look at your individual health profile, lifestyle, and genetics to create a more tailored and effective treatment plan.</p>
                        <h3 className="font-semibold text-xl mt-4">Your Doctor, at a Distance (Telemedicine):</h3>
                        <p>With remote monitoring devices and video consultations, your healthcare team can keep a closer eye on your health from the comfort of your home. This helps catch any potential problems early.</p>
                        <h3 className="font-semibold text-xl mt-4">Predicting Risks with AI:</h3>
                        <p>Powerful computer programs can analyze health data to better predict who is at higher risk of their kidney disease getting worse. This allows doctors to be even more proactive with protective treatments.</p>
                    </InfoCard>
                    
                    <InfoCard title="A Hopeful Path Forward">
                        <p>Living with Chronic Kidney Disease is a journey, but it's one you don't have to walk alone, and there is more reason for hope now than ever before.</p>
                        <p>By combining powerful lifestyle changes with the latest advancements in medicine and technology, it is possible to effectively slow down the progression of CKD and live a fuller, healthier life. The key is a strong partnership between you and your healthcare team, working together to protect your precious kidneys.</p>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default SlowingDownCKDPage;

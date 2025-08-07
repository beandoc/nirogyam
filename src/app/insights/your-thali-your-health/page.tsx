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

const YourThaliYourHealthPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Your Thali, Your Health: How Food Fights Chronic Disease</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>In India, we're seeing more "lifestyle diseases" than ever before—conditions like type 2 diabetes, high blood pressure, and heart problems are becoming increasingly common. It can be worrying, but what if your greatest weapon against these illnesses is already in your kitchen?</p>
                        <p>The food on your plate, or in your thali, plays a massive role in your long-term health. Good nutrition is a powerful tool that can help both prevent and manage these chronic diseases. Let's explore how simple, smart food choices can help you live a healthier, stronger life.</p>
                    </div>

                    <InfoCard title="What Are We Talking About? A Quick Look at Chronic Diseases">
                        <p>First, what is a "chronic disease"? Unlike a cold or flu that goes away in a week, these are long-term health conditions that develop slowly and need ongoing management. The most common ones influenced by our lifestyle include:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Heart Disease & High Blood Pressure:</strong> Often linked to diets high in salt and unhealthy fats.</li>
                            <li><strong>Type 2 Diabetes:</strong> Strongly connected to our weight and the amount of sugar and refined carbohydrates we eat.</li>
                            <li><strong>Obesity:</strong> A condition of excess body fat that is a major risk factor for many other health problems.</li>
                            <li><strong>Certain Cancers:</strong> Research shows a link between diet and the risk of some cancers.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="The Golden Rule: Prevention is Always Better">
                        <p>You can significantly lower your risk of developing these conditions by building your diet around a few key principles.</p>
                        <h3 className="font-semibold text-xl text-foreground mt-4">1. Choose Healthy Fats, Ditch the Unhealthy Ones</h3>
                        <p>Not all fat is bad! Your body needs healthy fats.</p>
                        <p><strong>Embrace:</strong> Good fats found in nuts, seeds, avocado, and healthy cooking oils (like mustard, groundnut, or olive oil).</p>
                        <p><strong>Limit:</strong> Unhealthy fats found in deep-fried foods (pakoras, samosas), processed snacks (chips), and baked goods made with dalda. This helps keep your cholesterol and heart in good shape.</p>
                        
                        <h3 className="font-semibold text-xl text-foreground mt-4">2. Make Friends with Fibre</h3>
                        <p>Fibre is a superhero for your heart and your blood sugar. It keeps you full, helps lower cholesterol, and prevents sudden sugar spikes.</p>
                        <p><strong>Load up on:</strong> Whole grains (like whole wheat roti, brown rice, oats, dalia), lentils and legumes (dals, chana, rajma), and of course, all kinds of fruits and vegetables.</p>

                        <h3 className="font-semibold text-xl text-foreground mt-4">3. Watch the "White Poisons": Salt and Sugar</h3>
                        <p>This can be a challenge in our Indian diet, but it's crucial.</p>
                        <p><strong>Salt:</strong> Too much salt leads to high blood pressure. Be mindful of the salt in pickles (achar), papad, packaged sauces, and processed foods.</p>
                        <p><strong>Sugar:</strong> Sugary drinks, sweets (mithai), and biscuits can lead to weight gain and increase your risk of diabetes. Opt for natural sweetness from fruits instead.</p>

                        <h3 className="font-semibold text-xl text-foreground mt-4">4. Fill Your Plate with Colour!</h3>
                        <p>A colourful plate is a healthy plate. Fruits and vegetables are packed with vitamins, minerals, and antioxidants that protect your body's cells from damage. The more variety, the better!</p>
                    </InfoCard>
                    
                    <InfoCard title="Already Have a Condition? How Food Helps You Manage It">
                        <p>If you're already living with a chronic disease, the right diet is your best partner in managing it.</p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>For Heart Health:</strong> A heart-friendly diet low in salt and unhealthy fats is key. Controlling your portion sizes also helps manage your weight, reducing the strain on your heart.</li>
                            <li><strong>For Diabetes:</strong> It's all about balance. Manage your carbohydrate intake by choosing high-fibre options (jowar/bajra roti over naan). Combine your carbs with protein (like dal or paneer) and healthy fats to keep your blood sugar levels stable.</li>
                            <li><strong>For Weight Management:</strong> Focus on foods that are nutrient-rich and fill you up, not out. Think big salads, bowls of dal, and lean proteins. These provide nutrition without excess calories.</li>
                            <li><strong>During Cancer Treatment:</strong> Good nutrition is vital to maintain your strength and energy. If your appetite is low, try eating small, frequent meals. Focus on safe, well-cooked, and nourishing foods.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="Simple Tips to Get Started Today">
                        <p>Making changes can feel overwhelming, so start small.</p>
                        <ul className="list-disc pl-6 space-y-3">
                           <li><strong>Cook at Home More Often:</strong> This is the best way to control the amount of oil, salt, and sugar in your food.</li>
                           <li><strong>Plan Your Meals:</strong> A little planning for the week ahead can stop you from ordering unhealthy takeout on busy days.</li>
                           <li><strong>Read the Labels:</strong> When you buy packaged food, take a quick look at the label to check the salt and sugar content.</li>
                           <li><strong>Make Water Your Main Drink:</strong> Swap out sugary sodas and juices for water. It's the best way to stay hydrated without adding extra calories.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="A Final Thought">
                        <p>Your health is truly in your hands, and often, it starts right on your plate. You don't need to go on an extreme diet. By making small, consistent, and mindful changes to your daily meals, you can build a powerful defence against chronic diseases and manage your health for a long, happy life.</p>
                    </InfoCard>
                </div>
            </main>
        </div>
    );
};

export default YourThaliYourHealthPage;

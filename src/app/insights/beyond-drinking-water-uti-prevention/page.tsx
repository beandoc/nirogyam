
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

const BeyondDrinkingWaterPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Beyond Drinking Water: Simple Hygiene Habits to Prevent Painful UTIs</h1>
                    
                    <div className="prose lg:prose-xl max-w-none text-foreground/80 mb-12">
                        <p>Urinary Tract Infections (UTIs) are a frustratingly common health issue, especially for women. That painful burning sensation and the constant urge to pee can disrupt your entire day. While "drink more water" is excellent advice, it’s not the only way to protect yourself.</p>
                        <p>The good news is that you can significantly reduce your risk of getting a UTI by adopting a few simple, everyday intimate hygiene habits. Here is a practical guide to keeping your urinary system healthy and happy.</p>
                    </div>

                    <InfoCard title="Bathroom Basics: Your First Line of Defence">
                        <ol className="list-decimal pl-6 space-y-4">
                            <li>
                                <strong>The Golden Rule: Wipe from Front to Back</strong>
                                <p>This is the most important habit to learn. After using the toilet, always wipe from the front (urethra) towards the back (anal area). This simple action prevents bacteria from the rectal region from being transferred to your urethra, which is a primary cause of UTIs.</p>
                            </li>
                            <li>
                                <strong>Don't "Hold It" In</strong>
                                <p>When you feel the urge to urinate, go. Holding urine in your bladder for long periods gives any bacteria that might be present more time to multiply and cause an infection. Make it a habit to empty your bladder regularly throughout the day.</p>
                            </li>
                             <li>
                                <strong>Stay Hydrated, of Course!</strong>
                                <p>Drinking plenty of water (aim for 8 glasses a day) dilutes your urine and makes you urinate more frequently. This acts as a natural flushing system, washing out harmful bacteria from your urinary tract before they can cause trouble.</p>
                            </li>
                        </ol>
                    </InfoCard>
                    
                    <InfoCard title="Clothing and Lifestyle Choices">
                        <ol className="list-decimal pl-6 space-y-4" start={4}>
                            <li>
                                <strong>Let It Breathe: Choose the Right Fabrics</strong>
                                <p>Bacteria thrive in warm, moist environments. Tight-fitting clothing, especially underwear made from synthetic materials like nylon or polyester, can trap moisture. Make breathable cotton underwear your best friend and opt for looser clothing when possible to help keep the area dry and airy.</p>
                            </li>
                             <li>
                                <strong>Change Out of Wet Clothes Quickly</strong>
                                <p>Whether you've just finished a workout at the gym, taken a swim, or gotten caught in the monsoon rain, don't linger in wet clothes. A damp environment is a perfect breeding ground for bacteria. Always change into something dry as soon as you can.</p>
                            </li>
                        </ol>
                    </InfoCard>
                    
                    <InfoCard title="Personal and Sexual Health Habits">
                         <ol className="list-decimal pl-6 space-y-4" start={6}>
                            <li>
                                <strong>Keep it Simple and Unscented</strong>
                                <p>The genital area is sensitive. Feminine hygiene products like scented sprays, douches, powders, and even some scented soaps or wipes can contain harsh chemicals that disrupt the natural, healthy balance of bacteria. This can lead to irritation and increase your risk of infection. Stick to mild, unscented soap and water for cleaning.</p>
                            </li>
                             <li>
                                <strong>Practice Gentle Hygiene (Don't Overdo It)</strong>
                                <p>While keeping clean is important, over-washing or scrubbing aggressively can do more harm than good. The vagina has a self-cleaning mechanism and maintains a delicate balance of good bacteria that protect against infections. Gentle cleaning is all that’s needed.</p>
                            </li>
                             <li>
                                <strong>Be Smart About Sex</strong>
                                <p>Sexual activity can introduce bacteria into the urinary tract. A simple and effective preventive habit is to urinate both before and soon after sex. This helps to flush out any bacteria that may have entered the urethra.</p>
                            </li>
                        </ol>
                    </InfoCard>

                    <InfoCard title="The Role of Diet">
                         <ol className="list-decimal pl-6 space-y-4" start={9}>
                            <li>
                                <strong>Eat for a Healthy Bladder</strong>
                                <p>Certain foods can support your urinary health. Foods rich in Vitamin C (like oranges, strawberries, and bell peppers) can help make your urine more acidic, which is less friendly to bacteria. Some studies also suggest that cranberries contain compounds that may help prevent bacteria from sticking to the urinary tract walls.</p>
                            </li>
                             <li>
                                <strong>Befriend Probiotics</strong>
                                <p>Probiotics are "good bacteria" that support a healthy gut and urinary tract. Including probiotic-rich foods like yogurt (dahi), kefir, or other fermented foods in your diet can help maintain a healthy bacterial balance, making it harder for harmful bacteria to take over.</p>
                            </li>
                        </ol>
                    </InfoCard>

                    <InfoCard title="Conclusion">
                        <p>Protecting yourself from UTIs doesn't require a drastic life change. It's about being mindful and incorporating these small, powerful habits into your daily routine. By keeping your intimate area clean, dry, and balanced, you can significantly reduce your risk and take control of your urinary health.</p>
                        <p>Remember, if you do experience the symptoms of a UTI—like pain, burning, or a frequent urge to urinate—it's always best to consult a doctor for a proper diagnosis and treatment.</p>
                    </InfoCard>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">Frequently Asked Questions (FAQs)</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Can wearing tight jeans cause a UTI?</AccordionTrigger>
                                    <AccordionContent>
                                    Tight clothing itself doesn't cause a UTI, but it can trap heat and moisture, creating an environment where bacteria can grow more easily. This can increase your risk.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Can cranberry juice cure a UTI?</AccordionTrigger>
                                    <AccordionContent>
                                    No, cranberry juice cannot cure an existing UTI. For that, you need a doctor's diagnosis and likely antibiotics. However, some research suggests it may help prevent UTIs for some people by stopping bacteria from sticking to the bladder wall. Think of it as a potential helper, not a treatment.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Can I get a UTI from a swimming pool?</AccordionTrigger>
                                    <AccordionContent>
                                    It's very unlikely that you'll get a UTI from the pool water itself. The bigger risk is from sitting around in a wet swimsuit for a long time afterward, which creates a moist environment perfect for bacterial growth. Always change into dry clothes soon after swimming.
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

export default BeyondDrinkingWaterPage;

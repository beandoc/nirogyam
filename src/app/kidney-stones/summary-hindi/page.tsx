
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const KidneyStonesSummaryHindiPage = () => {

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="bg-background text-foreground flex-1" lang="hi">
            <AppHeader />
            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-2xl mx-auto">
                     <div className="mb-8 flex justify-between items-center print:hidden">
                         <Button asChild variant="outline">
                            <Link href="/kidney-stones">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                वापस जाएं
                            </Link>
                        </Button>
                        <Button onClick={handlePrint} variant="outline">पीडीएफ के रूप में सहेजें</Button>
                    </div>

                    <Card className="print:shadow-none print:border-none">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary text-center">गुर्दे की पथरी: त्वरित गाइड</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <section className="mb-6">
                                <h3 className="font-bold text-primary">यह क्या है?</h3>
                                <p>गुर्दे की पथरी आपके मूत्र में अतिरिक्त खनिजों और लवणों से बनी कठोर, कंकड़ जैसी वस्तुएं हैं। मूत्र पथ से गुजरते समय वे गंभीर दर्द पैदा कर सकती हैं।</p>
                            </section>
                            
                            <section className="mb-6 bg-destructive/10 p-4 rounded-lg">
                                <h3 className="font-bold flex items-center text-destructive"><AlertTriangle className="inline-block h-6 w-6 mr-2" />मुख्य लक्षण</h3>
                                <ul>
                                    <li>आपकी पीठ या बगल में अचानक, तेज दर्द।</li>
                                    <li>पेशाब करते समय दर्द।</li>
                                    <li>गुलाबी, लाल या भूरा मूत्र (रक्त)।</li>
                                    <li>मतली और उल्टी।</li>
                                    <li>बुखार या ठंड लगना।</li>
                                </ul>
                            </section>

                            <section className="mb-6">
                                <h3 className="font-bold text-primary">मुख्य कारण</h3>
                                <ul>
                                    <li>पर्याप्त पानी न पीना (निर्जलीकरण)।</li>
                                    <li>नमक, चीनी या पशु प्रोटीन में उच्च आहार।</li>
                                    <li>अधिक वजन होना।</li>
                                    <li>गुर्दे की पथरी का पारिवारिक इतिहास।</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="font-bold text-primary">शीर्ष रोकथाम टिप</h3>
                                <p><strong>हाइड्रेटेड रहें!</strong> गुर्दे की पथरी को रोकने के लिए भरपूर पानी पीना सबसे महत्वपूर्ण काम है जो आप कर सकते हैं। आपका मूत्र हल्का पीला या साफ होना चाहिए।</p>
                            </section>
                            
                            <p className="text-sm text-muted-foreground mt-8 text-center">यह एक सारांश है। उपचार पर पूरी जानकारी के लिए, कृपया पूरी गाइड पढ़ें या किसी स्वास्थ्य पेशेवर से बात करें।</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default KidneyStonesSummaryHindiPage;

    
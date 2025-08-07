
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const UtiSummaryHindiPage = () => {

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
                            <Link href="/urinary-tract-infection">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                वापस जाएं
                            </Link>
                        </Button>
                        <Button onClick={handlePrint} variant="outline">पीडीएफ के रूप में सहेजें</Button>
                    </div>

                    <Card className="print:shadow-none print:border-none">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary text-center">UTI त्वरित गाइड (हिन्दी)</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <section className="mb-6">
                                <h3 className="font-bold text-primary">यूटीआई क्या है?</h3>
                                <p>यूरिनरी ट्रैक्ट इन्फेक्शन (UTI) आपके मूत्र प्रणाली में होने वाला एक संक्रमण है, जो आमतौर पर बैक्टीरिया के कारण होता है। यह आपके मूत्राशय या, अधिक गंभीर मामलों में, आपकी किडनी को प्रभावित कर सकता है।</p>
                            </section>
                            
                            <section className="mb-6">
                                <h3 className="font-bold text-primary">आम लक्षण</h3>
                                <ul>
                                    <li>पेशाब करते समय दर्द या जलन होना</li>
                                    <li>बार-बार और तुरंत पेशाब करने की इच्छा होना</li>
                                    <li>धुंधला, गहरा या अजीब गंध वाला पेशाब आना</li>
                                    <li>पेट के निचले हिस्से में दर्द होना</li>
                                </ul>
                            </section>

                            <section className="mb-6 bg-destructive/10 p-4 rounded-lg">
                                <h3 className="font-bold flex items-center text-destructive"><AlertTriangle className="inline-block h-6 w-6 mr-2" />डॉक्टर को तुरंत कब दिखाएँ</h3>
                                <p>यदि आपको उपरोक्त लक्षणों के साथ इनमें से कोई भी लक्षण दिखाई दे, तो यह किडनी संक्रमण हो सकता है:</p>
                                <ul>
                                    <li>बुखार और ठंड लगना</li>
                                    <li>पीठ के निचले हिस्से या साइड में दर्द</li>
                                    <li>मतली या उल्टी</li>
                                </ul>
                            </section>

                            <section className="mb-6">
                                <h3 className="font-bold text-primary">बचाव के मुख्य उपाय</h3>
                                <ul>
                                    <li><strong>खूब पानी पिएं:</strong> यह बैक्टीरिया को बाहर निकालने में मदद करता है।</li>
                                    <li><strong>आगे से पीछे की ओर पोंछें:</strong> बैक्टीरिया को फैलने से रोकता है।</li>
                                    <li><strong>पेशाब न रोकें:</strong> जब भी ज़रूरत महसूस हो, पेशाब करें।</li>
                                    <li><strong>सेक्स के बाद पेशाब करें:</strong> बैक्टीरिया को बाहर निकालने में मदद करता है।</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="font-bold text-primary">इलाज</h3>
                                <p>UTI का इलाज डॉक्टर द्वारा बताई गई एंटीबायोटिक दवाओं से किया जाता है। यह बहुत महत्वपूर्ण है कि आप दवा का पूरा कोर्स खत्म करें, भले ही आप बेहतर महसूस करने लगें।</p>
                            </section>

                             <p className="text-sm text-muted-foreground mt-8 text-center">यह एक सारांश है। पूरी जानकारी के लिए, कृपया पूरी गाइड पढ़ें या किसी स्वास्थ्य पेशेवर से बात करें।</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default UtiSummaryHindiPage;

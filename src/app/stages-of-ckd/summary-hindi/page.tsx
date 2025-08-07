
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

function handlePrint() {
    if (typeof window !== 'undefined') {
        window.print();
    }
};

export default function StagesCkdSummaryHindiPage() {
    return (
        <div className="bg-background text-foreground flex-1" lang="hi">
            <AppHeader />
            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-2xl mx-auto">
                     <div className="mb-8 flex justify-between items-center print:hidden">
                         <Button asChild variant="outline">
                            <Link href="/stages-of-ckd">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                वापस जाएं
                            </Link>
                        </Button>
                        <Button onClick={handlePrint} variant="outline">पीडीएफ के रूप में सहेजें</Button>
                    </div>

                    <Card className="print:shadow-none print:border-none">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary text-center">सीकेडी के चरण: त्वरित गाइड (हिन्दी)</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <section className="mb-6">
                                <h3 className="font-bold text-primary">सीकेडी क्या है?</h3>
                                <p>क्रोनिक किडनी डिजीज (सीकेडी) का मतलब है कि आपकी किडनी क्षतिग्रस्त हो गई है और खून को उतनी अच्छी तरह से फ़िल्टर नहीं कर सकती जितनी उन्हें करनी चाहिए। यह एक ऐसी स्थिति है जो समय के साथ बढ़ती है।</p>
                            </section>
                            
                            <section className="mb-6">
                                <h3 className="font-bold text-primary">सीकेडी के चरण</h3>
                                <p>सीकेडी को आपके eGFR (अनुमानित ग्लोमेरुलर फिल्ट्रेशन रेट) के आधार पर 5 चरणों में वर्गीकृत किया गया है, जो आपके किडनी के कार्य का एक स्कोर है।</p>
                                <ul>
                                    <li><strong>स्टेज 1 (eGFR 90+):</strong> सामान्य कार्य, लेकिन किडनी क्षति के लक्षण मौजूद हैं।</li>
                                    <li><strong>स्टेज 2 (eGFR 60-89):</strong> किडनी के कार्य में हल्की कमी।</li>
                                    <li><strong>स्टेज 3 (eGFR 30-59):</strong> कार्य में मध्यम कमी। अक्सर इसी समय लक्षण दिखाई देते हैं।</li>
                                    <li><strong>स्टेज 4 (eGFR 15-29):</strong> कार्य में गंभीर कमी। डायलिसिस या प्रत्यारोपण की तैयारी शुरू हो सकती है।</li>
                                    <li><strong>स्टेज 5 (eGFR <15):</strong> किडनी फेलियर। जीने के लिए डायलिसिस या प्रत्यारोपण की आवश्यकता होती है।</li>
                                </ul>
                            </section>

                            <section className="mb-6 bg-destructive/10 p-4 rounded-lg">
                                <h3 className="font-bold flex items-center text-destructive"><AlertTriangle className="inline-block h-6 w-6 mr-2" />शीर्ष जोखिम कारक</h3>
                                <ul>
                                    <li>मधुमेह (Diabetes)</li>
                                    <li>उच्च रक्तचाप (High Blood Pressure)</li>
                                    <li>हृदय रोग</li>
                                    <li>किडनी रोग का पारिवारिक इतिहास</li>
                                </ul>
                            </section>

                            <p className="text-sm text-muted-foreground mt-8 text-center">यह एक सारांश है। अपने चरण को जानना आपको और आपके डॉक्टर को सबसे अच्छी उपचार योजना बनाने में मदद करता है। पूरी जानकारी के लिए, कृपया पूरी गाइड पढ़ें या किसी स्वास्थ्य पेशेवर से बात करें।</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

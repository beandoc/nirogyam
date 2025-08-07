
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const EgfrSummaryHindiPage = () => {

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
                            <Link href="/egfr-explained">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                वापस जाएं
                            </Link>
                        </Button>
                        <Button onClick={handlePrint} variant="outline">पीडीएफ के रूप में सहेजें</Button>
                    </div>

                    <Card className="print:shadow-none print:border-none">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary text-center">eGFR त्वरित गाइड (हिन्दी)</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <section className="mb-6">
                                <h3 className="font-bold text-primary">eGFR क्या है?</h3>
                                <p>आपका अनुमानित ग्लोमेरुलर फिल्ट्रेशन रेट (eGFR) एक स्कोर है जो दिखाता है कि आपकी किडनी आपके खून से अपशिष्ट को कितनी अच्छी तरह छान रही है। एक उच्च संख्या अच्छी है; एक कम संख्या किडनी की क्षति को इंगित करती है।</p>
                            </section>
                            
                            <section className="mb-6">
                                <h3 className="font-bold text-primary">इसे कैसे मापा जाता है?</h3>
                                <p>eGFR की गणना आपकी उम्र और लिंग के साथ क्रिएटिनिन के लिए एक साधारण रक्त परीक्षण का उपयोग करके की जाती है। यह एक अनुमान है क्योंकि नियमित जांच के लिए सीधी माप बहुत जटिल है।</p>
                            </section>

                            <section className="mb-6 bg-destructive/10 p-4 rounded-lg">
                                <h3 className="font-bold flex items-center text-destructive"><AlertTriangle className="inline-block h-6 w-6 mr-2" />कम eGFR के मुख्य जोखिम कारक</h3>
                                <p>कम eGFR और क्रोनिक किडनी डिजीज (CKD) के मुख्य कारण हैं:</p>
                                <ul>
                                    <li>मधुमेह (Diabetes)</li>
                                    <li>उच्च रक्तचाप (High Blood Pressure)</li>
                                    <li>हृदय रोग</li>
                                    <li>किडनी रोग का पारिवारिक इतिहास</li>
                                </ul>
                            </section>

                            <section className="mb-6">
                                <h3 className="font-bold text-primary">अपने eGFR नंबर को समझना</h3>
                                <ul>
                                    <li><strong>eGFR 90+:</strong> सामान्य किडनी कार्य (लेकिन अन्य लक्षण होने पर प्रारंभिक क्षति हो सकती है)।</li>
                                    <li><strong>eGFR 60-89:</strong> हल्की कम किडनी कार्य।</li>
                                    <li><strong>eGFR 30-59:</strong> मध्यम रूप से कम किडनी कार्य (CKD स्टेज 3)।</li>
                                    <li><strong>eGFR 15-29:</strong> गंभीर रूप से कम किडनी कार्य (CKD स्टेज 4)।</li>
                                    <li><strong>eGFR 15 से नीचे:</strong> किडनी फेलियर (CKD स्टेज 5), जिसके लिए डायलिसिस या प्रत्यारोपण की आवश्यकता होती है।</li>
                                </ul>
                            </section>
                            
                            <p className="text-sm text-muted-foreground mt-8 text-center">यह एक सारांश है। पूरी जानकारी के लिए, कृपया पूरी गाइड पढ़ें या किसी स्वास्थ्य पेशेवर से बात करें।</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default EgfrSummaryHindiPage;

    
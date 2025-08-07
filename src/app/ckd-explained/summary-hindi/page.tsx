
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const CkdSummaryHindiPage = () => {

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
                            <Link href="/ckd-explained">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                वापस जाएं
                            </Link>
                        </Button>
                        <Button onClick={handlePrint} variant="outline">पीडीएफ के रूप में सहेजें</Button>
                    </div>

                    <Card className="print:shadow-none print:border-none">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary text-center">सीकेडी त्वरित गाइड (हिन्दी)</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <section className="mb-6">
                                <h3 className="font-bold text-primary">सीकेडी क्या है?</h3>
                                <p>क्रोनिक किडनी डिजीज (सीकेडी) एक दीर्घकालिक स्थिति है जिसमें आपकी किडनी ठीक से काम नहीं कर पाती है। यह अक्सर शुरुआती चरणों में बिना किसी लक्षण के एक "मूक" बीमारी होती है।</p>
                            </section>
                            
                            <section className="mb-6">
                                <h3 className="font-bold text-primary">आपकी किडनी के मुख्य कार्य</h3>
                                <ul>
                                    <li>आपके खून से अपशिष्ट को फ़िल्टर करना</li>
                                    <li>रक्तचाप को नियंत्रित करना</li>
                                    <li>लाल रक्त कोशिकाओं को बनाने में मदद करना</li>
                                    <li>आपकी हड्डियों को मजबूत रखना</li>
                                </ul>
                            </section>

                            <section className="mb-6 bg-destructive/10 p-4 rounded-lg">
                                <h3 className="font-bold flex items-center text-destructive"><AlertTriangle className="inline-block h-6 w-6 mr-2" />मुख्य कारण</h3>
                                <p>सीकेडी के दो सबसे बड़े कारण हैं <strong>मधुमेह (डायबिटीज)</strong> और <strong>उच्च रक्तचाप (हाई ब्लड प्रेशर)</strong>।</p>
                            </section>

                            <section className="mb-6">
                                <h3 className="font-bold text-primary">सीकेडी को धीमा कैसे करें</h3>
                                <ul>
                                    <li><strong>रक्तचाप और ब्लड शुगर को नियंत्रित करें:</strong> इन नंबरों को प्रबंधित करने के लिए अपने डॉक्टर के साथ काम करें।</li>
                                    <li><strong>किडनी-अनुकूल आहार:</strong> नमक, और संभवतः प्रोटीन, पोटेशियम, और फास्फोरस को सीमित करें।</li>
                                    <li><strong>दवाएं लें:</strong> सभी दवाएं डॉक्टर के बताए अनुसार ही लें।</li>
                                    <li><strong>धूम्रपान से बचें:</strong> धूम्रपान किडनी की बीमारी को बदतर बना सकता है।</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="font-bold text-primary">उन्नत उपचार</h3>
                                <p>यदि किडनी का कार्य बहुत कम हो जाता है, तो उपचार में <strong>डायलिसिस</strong> (एक मशीन आपके रक्त को साफ करती है) या <strong>किडनी प्रत्यारोपण</strong> शामिल है।</p>
                            </section>

                             <p className="text-sm text-muted-foreground mt-8 text-center">यह एक सारांश है। पूरी जानकारी के लिए, कृपया पूरी गाइड पढ़ें या किसी स्वास्थ्य पेशेवर से बात करें।</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default CkdSummaryHindiPage;

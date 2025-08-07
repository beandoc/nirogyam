
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const HowKidneysWorkSummaryHindiPage = () => {

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
                            <Link href="/how-kidneys-work">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                वापस जाएं
                            </Link>
                        </Button>
                        <Button onClick={handlePrint} variant="outline">पीडीएफ के रूप में सहेजें</Button>
                    </div>

                    <Card className="print:shadow-none print:border-none">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary text-center">किडनी कैसे काम करती है: त्वरित गाइड</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <section className="mb-6">
                                <h3 className="font-bold text-primary">मुख्य कार्य: फ़िल्टर करना</h3>
                                <p>आपकी किडनी आपके शरीर की मुख्य सफाई प्रणाली है। उनकी प्राथमिक भूमिका हर मिनट लगभग आधा कप रक्त को फ़िल्टर करना है, जिससे अपशिष्ट उत्पादों और अतिरिक्त पानी को हटाकर मूत्र बनाया जाता है।</p>
                            </section>
                            
                            <section className="mb-6">
                                <h3 className="font-bold text-primary">तीन महत्वपूर्ण कार्य</h3>
                                <ul>
                                    <li><strong>अपशिष्ट हटाना:</strong> वे क्रिएटिनिन और यूरिया जैसे अपशिष्टों को फ़िल्टर करते हैं, और सोडियम, पोटेशियम और कैल्शियम जैसे महत्वपूर्ण खनिजों को संतुलित करते हैं।</li>
                                    <li><strong>पानी को नियंत्रित करना:</strong> वे अतिरिक्त पानी को हटाकर या ज़रूरत पड़ने पर उसे बनाए रखकर आपके शरीर में पानी की सही मात्रा बनाए रखते हैं।</li>
                                    <li><strong>हार्मोन का उत्पादन:</strong> वे आवश्यक हार्मोन बनाते हैं जो आपके रक्तचाप को नियंत्रित करने, लाल रक्त कोशिकाओं को बनाने (थकान को रोकने के लिए), और आपकी हड्डियों को मजबूत रखने में मदद करते हैं।</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="font-bold text-primary">किडनी के अंदर</h3>
                                <p>प्रत्येक किडनी में दस लाख से अधिक छोटी फ़िल्टरिंग इकाइयाँ होती हैं जिन्हें नेफ्रॉन कहा जाता है। ये नेफ्रॉन रक्त से अपशिष्ट को अलग करने का कठिन काम करते हैं, जो बाद में मूत्र बन जाता है।</p>
                            </section>

                            <p className="text-sm text-muted-foreground mt-8 text-center">यह एक सारांश है। पूरी जानकारी के लिए, कृपया पूरा लेख पढ़ें या किसी स्वास्थ्य पेशेवर से बात करें।</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default HowKidneysWorkSummaryHindiPage;

    
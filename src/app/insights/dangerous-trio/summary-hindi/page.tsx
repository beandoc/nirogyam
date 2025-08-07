
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const DangerousTrioSummaryHindiPage = () => {

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
                            <Link href="/insights/dangerous-trio">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                वापस जाएं
                            </Link>
                        </Button>
                        <Button onClick={handlePrint} variant="outline">पीडीएफ के रूप में सहेजें</Button>
                    </div>

                    <Card className="print:shadow-none print:border-none">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary text-center">त्वरित गाइड: खतरनाक तिकड़ी</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <section className="mb-6">
                                <h3 className="font-bold text-primary">समस्या</h3>
                                <p>डायबिटीज और हाई ब्लड प्रेशर (बीपी) किडनी की बीमारी के दो सबसे बड़े कारण हैं। साथ मिलकर, वे एक "खतरनाक तिकड़ी" बनाते हैं जो समय के साथ चुपचाप किडनी के फिल्टर को नुकसान पहुंचाते हैं, और अक्सर गंभीर क्षति होने तक कोई लक्षण नहीं दिखते।</p>
                            </section>
                            
                            <section className="mb-6">
                                <h3 className="font-bold text-primary">नुकसान कैसे होता है</h3>
                                <ul>
                                    <li><strong>डायबिटीज:</strong> हाई ब्लड शुगर खून को गाढ़ा बना देता है, जिससे आपकी किडनी के छोटे फिल्टर बंद हो जाते हैं।</li>
                                    <li><strong>हाई बीपी:</strong> उच्च दबाव इन नाजुक फिल्टरों को शारीरिक रूप से नुकसान पहुंचाता है और कमजोर करता है।</li>
                                </ul>
                            </section>

                            <section className="mb-6 bg-destructive/10 p-4 rounded-lg">
                                <h3 className="font-bold flex items-center text-destructive"><AlertTriangle className="inline-block h-6 w-6 mr-2" />मुख्य चेतावनी संकेत</h3>
                                <p>जैसे-जैसे किडनी की बीमारी बढ़ती है, आप देख सकते हैं:</p>
                                <ul>
                                    <li>पैरों, टखनों या चेहरे में सूजन (सूजन)।</li>
                                    <li>झागदार या बुलबुलेदार पेशाब।</li>
                                    <li>लगातार थकान और कमजोरी महसूस होना।</li>
                                    <li>बीपी जिसे नियंत्रित करना बहुत मुश्किल हो।</li>
                                </ul>
                            </section>

                            <section className="mb-6">
                                <h3 className="font-bold text-primary">आपकी 5-सूत्रीय सुरक्षा योजना</h3>
                                <ol>
                                    <li><strong>अपने नंबर नियंत्रित करें:</strong> आहार, व्यायाम और दवा से अपने ब्लड शुगर और रक्तचाप का प्रबंधन करें।</li>
                                    <li><strong>वार्षिक किडनी जांच कराएं:</strong> एक साधारण रक्त और मूत्र परीक्षण आवश्यक है।</li>
                                    <li><strong>किडनी-अनुकूल आहार लें:</strong> नमक, चीनी, रेड मीट और तले हुए खाद्य पदार्थों को कम करें।</li>
                                    <li><strong>सक्रिय रहें:</strong> अधिकांश दिनों में 30 मिनट की गतिविधि का लक्ष्य रखें, जैसे तेज चलना।</li>
                                    <li><strong>दवाओं के बारे में होशियार रहें:</strong> दर्द निवारक दवाओं का अधिक उपयोग करने से बचें और हमेशा अपने डॉक्टर से सलाह लें।</li>
                                </ol>
                            </section>

                            <p className="text-sm text-muted-foreground mt-8 text-center">यह एक सारांश है। पूरी जानकारी के लिए, कृपया पूरा लेख पढ़ें या किसी स्वास्थ्य पेशेवर से बात करें।</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default DangerousTrioSummaryHindiPage;

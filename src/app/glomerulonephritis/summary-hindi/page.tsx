
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const GlomerulonephritisSummaryHindiPage = () => {

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
                            <Link href="/glomerulonephritis">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                वापस जाएं
                            </Link>
                        </Button>
                        <Button onClick={handlePrint} variant="outline">पीडीएफ के रूप में सहेजें</Button>
                    </div>

                    <Card className="print:shadow-none print:border-none">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary text-center">ग्लोमेरुलोनेफ्राइटिस (जीएन) त्वरित गाइड</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <section className="mb-6">
                                <h3 className="font-bold text-primary">ग्लोमेरुलोनेफ्राइटिस क्या है?</h3>
                                <p>ग्लोमेरुलोनेफ्राइटिस (जीएन) उन बीमारियों का एक समूह है जो किडनी के फिल्टर (ग्लोमेरुली) में सूजन और क्षति का कारण बनती हैं। इस क्षति के कारण किडनी से प्रोटीन और रक्त मूत्र में लीक हो सकते हैं।</p>
                            </section>
                            
                            <section className="mb-6">
                                <h3 className="font-bold text-primary">इसके दो मुख्य प्रकार</h3>
                                <ul>
                                    <li><strong>नेफ्रोटिक सिंड्रोम:</strong> इसका मुख्य लक्षण मूत्र में बड़ी मात्रा में प्रोटीन का आना है, जिससे शरीर में सूजन (एडिमा) हो जाती है।</li>
                                    <li><strong>नेफ्राइटिक सिंड्रोम:</strong> इसका मुख्य लक्षण मूत्र में रक्त का आना है, जिसके साथ अक्सर उच्च रक्तचाप और किडनी की कार्यक्षमता में कमी होती है।</li>
                                </ul>
                            </section>

                            <section className="mb-6 bg-destructive/10 p-4 rounded-lg">
                                <h3 className="font-bold flex items-center text-destructive"><AlertTriangle className="inline-block h-6 w-6 mr-2" />यह गंभीर क्यों है?</h3>
                                <p>कुछ प्रकार के जीएन बहुत तेजी से बढ़ सकते हैं (रैपिडली प्रोग्रेसिव जीएन) और अगर तुरंत इलाज न किया जाए तो स्थायी किडनी विफलता का कारण बन सकते हैं। यह एक मेडिकल इमरजेंसी है।</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-primary">निदान और उपचार</h3>
                                <p>निदान के लिए अक्सर रक्त जांच, मूत्र जांच, और एक <strong>किडनी बायोप्सी</strong> की आवश्यकता होती है ताकि जीएन के सटीक प्रकार की पहचान की जा सके। उपचार कारण पर निर्भर करता है लेकिन इसमें अक्सर रक्तचाप को नियंत्रित करने और प्रतिरक्षा प्रणाली को दबाने के लिए दवाएं शामिल होती हैं।</p>
                            </section>
                            
                            <p className="text-sm text-muted-foreground mt-8 text-center">यह एक सारांश है। ग्लोमेरुलोनेफ्राइटिस एक जटिल स्थिति है जिसके लिए किडनी विशेषज्ञ (नेफ्रोलॉजिस्ट) से देखभाल की आवश्यकता होती है। पूरी जानकारी के लिए, कृपया पूरी गाइड पढ़ें।</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default GlomerulonephritisSummaryHindiPage;

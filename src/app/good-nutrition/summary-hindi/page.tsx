
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const GoodNutritionSummaryHindiPage = () => {

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
                            <Link href="/good-nutrition">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                वापस जाएं
                            </Link>
                        </Button>
                        <Button onClick={handlePrint} variant="outline">पीडीएफ के रूप में सहेजें</Button>
                    </div>

                    <Card className="print:shadow-none print:border-none">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary text-center">अच्छा पोषण: त्वरित गाइड</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <section className="mb-6">
                                <h3 className="font-bold text-primary">अच्छा पोषण क्यों मायने रखता है</h3>
                                <p>एक संतुलित आहार आपके शरीर को सही ढंग से काम करने, मांसपेशियों के निर्माण, ऊतकों की मरम्मत और मधुमेह, हृदय रोग और गुर्दे की बीमारी जैसी पुरानी बीमारियों को रोकने के लिए आवश्यक ऊर्जा और पोषक तत्व देता है।</p>
                            </section>
                            
                            <section className="mb-6">
                                <h3 className="font-bold text-primary">एक स्वस्थ आहार के चार स्तंभ</h3>
                                <ul>
                                    <li><strong>विविधता खाएं:</strong> सभी खाद्य समूहों से पोषक तत्व प्राप्त करें।</li>
                                    <li><strong>अस्वास्थ्यकर चीजों को सीमित करें:</strong> नमक, चीनी और अस्वास्थ्यकर वसा में कटौती करें।</li>
                                    <li><strong>लेबल पढ़ें:</strong> खरीदारी करते समय सूचित विकल्प चुनें।</li>
                                    <li><strong>सक्रिय रहें:</strong> सर्वोत्तम परिणामों के लिए नियमित शारीरिक गतिविधि के साथ एक स्वस्थ आहार मिलाएं।</li>
                                </ul>
                            </section>

                            <section className="mb-6 bg-destructive/10 p-4 rounded-lg">
                                <h3 className="font-bold flex items-center text-destructive"><AlertTriangle className="inline-block h-6 w-6 mr-2" />सप्लीमेंट्स से सावधान रहें</h3>
                                <p>अधिकांश लोगों को भोजन से सभी आवश्यक विटामिन मिल जाते हैं। किसी भी विटामिन या हर्बल सप्लीमेंट लेने से पहले हमेशा अपने डॉक्टर से बात करें, क्योंकि कुछ हानिकारक हो सकते हैं या आपकी दवाओं में हस्तक्षेप कर सकते हैं।</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-primary">किडनी स्वास्थ्य के लिए सरल उपाय</h3>
                                <ul>
                                    <li>रक्तचाप और रक्त शर्करा को नियंत्रित करें।</li>
                                    <li>दर्द निवारक दवाओं के अधिक उपयोग से बचें।</li>
                                    <li>नमक और प्रसंस्कृत खाद्य पदार्थों में कम आहार लें।</li>
                                    <li>यदि आप जोखिम में हैं तो नियमित रूप से अपने मूत्र में प्रोटीन की जांच करवाएं।</li>
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

export default GoodNutritionSummaryHindiPage;

    
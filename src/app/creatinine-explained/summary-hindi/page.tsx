
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const CreatinineSummaryHindiPage = () => {

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
                            <Link href="/creatinine-explained">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                वापस जाएं
                            </Link>
                        </Button>
                        <Button onClick={handlePrint} variant="outline">पीडीएफ के रूप में सहेजें</Button>
                    </div>

                    <Card className="print:shadow-none print:border-none">
                        <CardHeader>
                            <CardTitle className="text-3xl text-primary text-center">क्रिएटिनिन त्वरित गाइड (हिन्दी)</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-lg max-w-none">
                            <section className="mb-6">
                                <h3 className="font-bold text-primary">क्रिएटिनिन क्या है?</h3>
                                <p>क्रिएटिनिन आपकी मांसपेशियों से निकलने वाला एक अपशिष्ट उत्पाद है जिसे स्वस्थ किडनी आपके खून से बाहर निकाल देती है। आपके रक्त में क्रिएटिनिन का उच्च स्तर एक महत्वपूर्ण संकेत है कि आपकी किडनी ठीक से काम नहीं कर रही है।</p>
                            </section>
                            
                            <section className="mb-6">
                                <h3 className="font-bold text-primary">यह टेस्ट क्यों महत्वपूर्ण है?</h3>
                                <p>यह आपके किडनी के स्वास्थ्य की जांच के लिए एक साधारण रक्त परीक्षण है। यह अक्सर क्रोनिक किडनी डिजीज (CKD) का निदान करने का पहला कदम होता है, कभी-कभी आपके किसी भी लक्षण को महसूस करने से बहुत पहले।</p>
                            </section>

                            <section className="mb-6">
                                <h3 className="font-bold text-primary">परिणाम की व्याख्या</h3>
                                <p>एक "सामान्य" स्तर उम्र, लिंग और मांसपेशियों पर निर्भर करता है। आपका डॉक्टर आपके क्रिएटिनिन परिणाम का उपयोग आपके eGFR (अनुमानित ग्लोमेरुलर फिल्ट्रेशन रेट) की गणना के लिए करेगा, जो आपके किडनी के कार्य का मुख्य स्कोर है।</p>
                            </section>

                             <section className="mb-6 bg-destructive/10 p-4 rounded-lg">
                                <h3 className="font-bold flex items-center text-destructive"><AlertTriangle className="inline-block h-6 w-6 mr-2" />मुख्य बिंदु</h3>
                                <p>एक उच्च क्रिएटिनिन स्तर एक चेतावनी संकेत है। जब तक यह थोड़ा भी बढ़ जाता है, तब तक किडनी का एक महत्वपूर्ण हिस्सा काम करना बंद कर सकता है। शुरुआती पहचान महत्वपूर्ण है।</p>
                            </section>

                            <p className="text-sm text-muted-foreground mt-8 text-center">यह एक सारांश है। पूरी जानकारी के लिए, कृपया पूरा लेख पढ़ें या किसी स्वास्थ्य पेशेवर से बात करें।</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default CreatinineSummaryHindiPage;

    
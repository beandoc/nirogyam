
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Home, Leaf, AlertTriangle, ShieldCheck, Scale, Info, Users } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card>
        <CardHeader className="flex flex-row items-center gap-4">
            {icon}
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="text-foreground/80 space-y-4">{children}</div>
        </CardContent>
    </Card>
);

const ProteinExplainedPage = () => {
    return (
        <div className="bg-background text-foreground flex-1">
            <AppHeader />
            <main className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <section className="text-center mb-16">
                        <Leaf className="h-16 w-16 text-primary mx-auto mb-4" />
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Protein and Your CKD Diet</h1>
                        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                        Understanding how much protein to eat is vital for managing kidney disease. Your needs change depending on your stage of CKD and whether you are on dialysis.
                        </p>
                    </section>

                    <div className="space-y-8">
                        <InfoCard icon={<Info className="h-10 w-10 text-primary" />} title="Why Protein Matters">
                            <p>Everyone needs protein to build muscle, repair tissue, and fight infection. Protein comes from both animal sources (meat, poultry, fish, eggs, dairy) and plant sources (beans, nuts, lentils, grains). However, when your body uses protein, it creates waste products that your kidneys must filter. If you have kidney disease, this process can put extra strain on your kidneys.</p>
                            <p>Too much protein can cause waste to build up in your blood, leading to nausea, weakness, and loss of appetite. Too little can cause muscle loss and weakness. Finding the right balance is key.</p>
                        </InfoCard>

                        <div className="grid md:grid-cols-2 gap-8">
                            <InfoCard icon={<AlertTriangle className="h-10 w-10 text-destructive" />} title="CKD Without Dialysis: Limit Protein">
                                <p>If you have CKD but are not on dialysis, your doctor will likely recommend a lower-protein diet. This is because reducing the amount of protein waste can ease the burden on your kidneys and may even help slow the progression of kidney disease. Many studies suggest that focusing on plant-based proteins, which produce less acid waste, can be particularly beneficial.</p>
                            </InfoCard>
                            <InfoCard icon={<ShieldCheck className="h-10 w-10 text-green-600" />} title="On Dialysis: Increase Protein">
                                <p>Once you begin dialysis, your protein needs increase. The dialysis process itself removes protein from your blood, so you need to eat more to replace what is lost and maintain your strength and health. A low-protein diet is no longer necessary, and your dietitian will guide you on how to incorporate more high-quality protein into your meals.</p>
                            </InfoCard>
                        </div>
                        
                        <InfoCard icon={<Scale className="h-10 w-10 text-primary" />} title="Finding Your Right Amount">
                            <p>The exact amount of protein you need is personalized. It depends on your body size, stage of kidney disease, and overall health. It is never a good idea to guess. The best way to know your specific protein needs is to work with a kidney dietitian.</p>
                        </InfoCard>
                        
                        <InfoCard icon={<Users className="h-10 w-10 text-primary" />} title="Consult a Kidney Dietitian">
                            <p>A kidney dietitian is an expert in creating eating plans for people with CKD. They can analyze your lab results and lifestyle to determine the right amount and type of protein for you, even in the very early stages of the disease. Ask your doctor for a referral to ensure you're on the right track with your nutrition.</p>
                        </InfoCard>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProteinExplainedPage;

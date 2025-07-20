
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Home, Leaf, AlertTriangle, ShieldCheck, Scale, Info, Users } from 'lucide-react';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';

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
        <div className='flex'>
            <Sidebar>
                <AppSidebar />
            </Sidebar>
            <SidebarInset>
                <div className="bg-background text-foreground">
                    <header className="bg-card/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
                        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                            <Link href="/" className="flex items-center gap-2">
                                <svg className="h-10 w-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75V3.5C9.1 3.5 7.25 5.1 7.25 7.25C7.25 9.4 9.1 11 11.25 11V21.25C11.25 21.6642 11.5858 22 12 22C12.4142 22 12.75 21.6642 12.75 21.25V11C14.9 11 16.75 9.4 16.75 7.25C16.75 5.1 14.9 3.5 12.75 3.5V2.75Z" />
                                <path d="M7.25 14.5C7.25 14.0858 6.91421 13.75 6.5 13.75C6.08579 13.75 5.75 14.0858 5.75 14.5V15C4.37 15 3.25 16 3.25 17.25C3.25 18.5 4.37 19.5 5.75 19.5V20C5.75 20.4142 6.08579 20.75 6.5 20.75C6.91421 20.75 7.25 20.4142 7.25 20V19.5C8.63 19.5 9.75 18.5 9.75 17.25C9.75 16 8.63 15 7.25 15V14.5Z" />
                                <path d="M18.25 13.75C17.8358 13.75 17.5 14.0858 17.5 14.5V15C16.12 15 15 16 15 17.25C15 18.5 16.12 19.5 17.5 19.5V20C17.5 20.4142 17.8358 20.75 18.25 20.75C18.6642 20.75 19 20.4142 19 20V19.5C20.38 19.5 21.5 18.5 21.5 17.25C21.5 16 20.38 15 19 15V14.5C19 14.0858 18.6642 13.75 18.25 13.75Z" />
                                </svg>
                                <h1 className="text-2xl font-bold text-primary">Nirogyam</h1>
                            </Link>
                            <nav>
                                <Button variant="ghost" asChild>
                                    <Link href="/"><Home className="mr-2 h-4 w-4" />Home</Link>
                                </Button>
                            </nav>
                        </div>
                    </header>
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
            </SidebarInset>
        </div>
    );
};

export default ProteinExplainedPage;

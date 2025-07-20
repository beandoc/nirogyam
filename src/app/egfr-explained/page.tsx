
'use client';
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronsRight, Download, Droplets, Gauge, Scale, Cake, Dna, Home, ArrowLeft } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AppHeader } from '@/components/AppHeader';
import { useParams } from 'next/navigation';
import en from '@/locales/en.json';
import hi from '@/locales/hi.json';

const TableOfContents = ({ t }: { t: any }) => (
    <Card className="mb-12">
        <CardHeader>
            <CardTitle>{t.egfrExplained.toc.title}</CardTitle>
        </CardHeader>
        <CardContent>
            <ul className="space-y-2">
                <li><a href="#about-egfr" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />{t.egfrExplained.toc.about}</a></li>
                <li><a href="#types" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />{t.egfrExplained.toc.types}</a></li>
                <li><a href="#purpose" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />{t.egfrExplained.toc.purpose}</a></li>
                <li><a href="#results" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />{t.egfrExplained.toc.results}</a></li>
            </ul>
        </CardContent>
    </Card>
);

const EgfrExplainedPage = () => {
  const params = useParams();
  const locale = params.lang || 'en';
  const t = locale === 'hi' ? hi : en;

  return (
    <div className="bg-background text-foreground flex-1">
      <AppHeader />
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
            <Button asChild variant="outline" className="mb-8">
                <Link href={`/${locale}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t.buttons.backToHome}
                </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">{t.egfrExplained.title}</h1>
            <p className="text-lg text-foreground/80 mb-10">
            {t.egfrExplained.intro}
            </p>

            <TableOfContents t={t} />

            <article className="prose lg:prose-xl max-w-none text-foreground/90">
                <section id="about-egfr" className="mb-12 scroll-mt-20">
                    <h2 className="text-3xl font-bold text-primary mb-4">{t.egfrExplained.sections.about.title}</h2>
                    <p>{t.egfrExplained.sections.about.content}</p>
                </section>

                <section id="types" className="mb-12 scroll-mt-20">
                    <h2 className="text-3xl font-bold text-primary mb-4">{t.egfrExplained.sections.measuring.title}</h2>
                    <p>{t.egfrExplained.sections.measuring.p1}</p>
                    <p>{t.egfrExplained.sections.measuring.p2}</p>
                    <h3 className="text-2xl font-bold text-primary/90 mt-8 mb-4">{t.egfrExplained.sections.measuring.comparison.title}</h3>
                    <Card>
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px]"></TableHead>
                            <TableHead className="font-bold text-foreground">{t.egfrExplained.sections.measuring.comparison.egfr}</TableHead>
                            <TableHead className="font-bold text-foreground">{t.egfrExplained.sections.measuring.comparison.mgfr}</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        <TableRow>
                            <TableHead>{t.egfrExplained.sections.measuring.comparison.rows.how.header}</TableHead>
                            <TableCell>{t.egfrExplained.sections.measuring.comparison.rows.how.egfr}</TableCell>
                            <TableCell>{t.egfrExplained.sections.measuring.comparison.rows.how.mgfr}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableHead>{t.egfrExplained.sections.measuring.comparison.rows.availability.header}</TableHead>
                            <TableCell>{t.egfrExplained.sections.measuring.comparison.rows.availability.egfr}</TableCell>
                            <TableCell>{t.egfrExplained.sections.measuring.comparison.rows.availability.mgfr}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableHead>{t.egfrExplained.sections.measuring.comparison.rows.cost.header}</TableHead>
                            <TableCell>{t.egfrExplained.sections.measuring.comparison.rows.cost.egfr}</TableCell>
                            <TableCell>{t.egfrExplained.sections.measuring.comparison.rows.cost.mgfr}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableHead>{t.egfrExplained.sections.measuring.comparison.rows.time.header}</TableHead>
                            <TableCell>{t.egfrExplained.sections.measuring.comparison.rows.time.egfr}</TableCell>
                            <TableCell>{t.egfrExplained.sections.measuring.comparison.rows.time.mgfr}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableHead>{t.egfrExplained.sections.measuring.comparison.rows.accuracy.header}</TableHead>
                            <TableCell>{t.egfrExplained.sections.measuring.comparison.rows.accuracy.egfr}</TableCell>
                            <TableCell>{t.egfrExplained.sections.measuring.comparison.rows.accuracy.mgfr}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableHead>{t.egfrExplained.sections.measuring.comparison.rows.precision.header}</TableHead>
                            <TableCell>{t.egfrExplained.sections.measuring.comparison.rows.precision.egfr}</TableCell>
                            <TableCell>{t.egfrExplained.sections.measuring.comparison.rows.precision.mgfr}</TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                    </Card>
                    <p className="text-sm text-muted-foreground mt-4">{t.egfrExplained.sections.measuring.footnote}</p>
                </section>

                <section id="purpose" className="mb-12 scroll-mt-20">
                    <h2 className="text-3xl font-bold text-primary mb-4">{t.egfrExplained.sections.purpose.title}</h2>
                    <p>{t.egfrExplained.sections.purpose.p1}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 my-8">
                         {t.egfrExplained.sections.purpose.riskFactors.map((factor: any, index: number) => (
                            <div key={index} className="flex flex-col items-center text-center gap-2">
                                <div dangerouslySetInnerHTML={{ __html: factor.icon === 'Droplets' ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 text-primary"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.7-3.02C8.13 8.5 7 7.5 7 6c0-1.1.9-2 2-2s2 .9 2 2c0 1.83-2.35 3.52-3.46 4.33-.3.22-.54.5-.54.82v.15c0 .65.53 1.18 1.18 1.18.46 0 .88-.26 1.08-.63"/><path d="M14 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.7-3.02C15.13 8.5 14 7.5 14 6c0-1.1.9-2 2-2s2 .9 2 2c0 1.83-2.35 3.52-3.46 4.33-.3.22-.54.5-.54.82v.15c0 .65.53 1.18 1.18 1.18.46 0 .88-.26 1.08-.63"/></svg>' : factor.icon === 'Gauge' ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 text-primary"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>' : factor.icon === 'Scale' ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 text-primary"><path d="m16 16-4-4-4 4"/><path d="M12 20V10"/><path d="M6 20h12"/><path d="M4 12H2"/><path d="M10 4H8"/><path d="M16 4h-2"/><path d="M22 12h-2"/><path d="M7.16 7.16l-1.42-1.42"/><path d="M18.26 18.26l-1.42-1.42"/><path d="M18.26 7.16l-1.42 1.42"/><path d="M7.16 18.26l-1.42-1.42"/></svg>' : factor.icon === 'Cake' ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 text-primary"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v2"/><path d="M12 8v2"/><path d="M17 8v2"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 text-primary"><path d="M12.5 2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5Z"/><path d="M12.5 21a.5.5 0 0 1 .5.5v-3a.5.5 0 0 1-1 0v3a.5.5 0 0 1 .5-.5Z"/><path d="M22 12.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5Z"/><path d="M5 12.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5Z"/><path d="m18.5 18-.5.5a.5.5 0 0 1-.7 0l-1-1a.5.5 0 1 1 .7-.7l1 1a.5.5 0 0 1 0 .7Z"/><path d="m5.5 5-.5.5a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l1 1a.5.5 0 0 1 0 .7Z"/><path d="m18 5.5.5.5a.5.5 0 0 0 0-.7l-1-1a.5.5 0 0 0-.7.7l1 1Z"/><path d="m5 18.5.5.5a.5.5 0 0 0 .7 0l1-1a.5.5 0 1 0-.7-.7l-1 1a.5.5 0 0 0 0 .7Z"/><path d="M12.5 8a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Z"/><path d="M8 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z"/></svg>' }} />
                                <span>{factor.label}</span>
                            </div>
                        ))}
                    </div>
                    <p>{t.egfrExplained.sections.purpose.p2}</p>
                    <p className="mt-4">{t.egfrExplained.sections.purpose.p3}</p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        {t.egfrExplained.sections.purpose.symptoms.map((symptom: string, index: number) => (
                           <li key={index}>{symptom}</li>
                        ))}
                    </ul>
                </section>

                <section id="results" className="mb-12 scroll-mt-20">
                    <h2 className="text-3xl font-bold text-primary mb-4">{t.egfrExplained.sections.results.title}</h2>
                    <p>{t.egfrExplained.sections.results.content}</p>
                </section>
                
                <section id="resources" className="mb-12 scroll-mt-20">
                <h2 className="text-3xl font-bold text-primary mb-6">{t.egfrExplained.sections.resources.title}</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg">
                    <Download className="mr-2 h-5 w-5" />
                    {t.egfrExplained.sections.resources.button}
                    </Button>
                </div>
                </section>
            </article>
        </div>
      </main>
    </div>
  );
};

export default EgfrExplainedPage;

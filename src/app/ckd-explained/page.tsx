
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ChevronsRight, Home, ArrowLeft } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';
import { useParams } from 'next/navigation';
import en from '@/locales/en.json';
import hi from '@/locales/hi.json';

const TableOfContents = ({ t }: { t: any }) => (
    <Card className="mb-12">
        <CardHeader>
            <CardTitle>{t.ckdExplained.toc.title}</CardTitle>
        </CardHeader>
        <CardContent>
            <ul className="space-y-2">
                <li><a href="#about-ckd" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />{t.ckdExplained.toc.about}</a></li>
                <li><a href="#symptoms" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />{t.ckdExplained.toc.symptoms}</a></li>
                <li><a href="#causes" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />{t.ckdExplained.toc.causes}</a></li>
                <li><a href="#complications" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />{t.ckdExplained.toc.complications}</a></li>
                <li><a href="#diagnosis" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />{t.ckdExplained.toc.diagnosis}</a></li>
                <li><a href="#treatment" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />{t.ckdExplained.toc.treatment}</a></li>
                <li><a href="#appointment" className="flex items-center text-primary hover:underline"><ChevronsRight className="h-4 w-4 mr-2" />{t.ckdExplained.toc.appointment}</a></li>
            </ul>
        </CardContent>
    </Card>
);

const CkdExplainedPage = () => {
    const params = useParams();
    const locale = params.lang || 'en';
    const t = locale === 'hi' ? hi : en;

  return (
    <div className="bg-background text-foreground flex-1">
      <AppHeader />
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
            <Button asChild variant="outline" className="mb-8">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t.buttons.backToHome}
                </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">{t.ckdExplained.title}</h1>
            <p className="text-lg text-foreground/80 mb-10">
              {t.ckdExplained.intro}
            </p>

            <TableOfContents t={t} />

            <article className="prose lg:prose-xl max-w-none text-foreground/90">
                <section id="about-ckd" className="mb-12 scroll-mt-20">
                    <h2 className="text-3xl font-bold text-primary mb-4">{t.ckdExplained.sections.about.title}</h2>
                    <p>{t.ckdExplained.sections.about.p1}</p>
                    <ul className="list-disc pl-6 space-y-2">
                        {t.ckdExplained.sections.about.list.map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p>{t.ckdExplained.sections.about.p2}</p>
                </section>

                <section id="symptoms" className="mb-12 scroll-mt-20">
                    <h2 className="text-3xl font-bold text-primary mb-4">{t.ckdExplained.sections.symptoms.title}</h2>
                    <p>{t.ckdExplained.sections.symptoms.p1}</p>
                    <ul className="list-disc pl-6 space-y-2">
                        {t.ckdExplained.sections.symptoms.list1.map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p>{t.ckdExplained.sections.symptoms.p2}</p>
                    <ul className="list-disc pl-6 space-y-2">
                         {t.ckdExplained.sections.symptoms.list2.map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section id="causes" className="mb-12 scroll-mt-20">
                    <h2 className="text-3xl font-bold text-primary mb-4">{t.ckdExplained.sections.causes.title}</h2>
                    <p>{t.ckdExplained.sections.causes.content}</p>
                </section>

                <section id="complications" className="mb-12 scroll-mt-20">
                    <h2 className="text-3xl font-bold text-primary mb-4">{t.ckdExplained.sections.complications.title}</h2>
                    <p>{t.ckdExplained.sections.complications.content}</p>
                </section>

                <section id="diagnosis" className="mb-12 scroll-mt-20">
                    <h2 className="text-3xl font-bold text-primary mb-4">{t.ckdExplained.sections.diagnosis.title}</h2>
                    <p>{t.ckdExplained.sections.diagnosis.content}</p>
                </section>

                <section id="treatment" className="mb-12 scroll-mt-20">
                    <h2 className="text-3xl font-bold text-primary mb-4">{t.ckdExplained.sections.treatment.title}</h2>
                    <p>{t.ckdExplained.sections.treatment.content}</p>
                </section>

                <section id="appointment" className="mb-12 scroll-mt-20">
                    <h2 className="text-3xl font-bold text-primary mb-4">{t.ckdExplained.sections.appointment.title}</h2>
                    <p>{t.ckdExplained.sections.appointment.content}</p>
                </section>

                <section id="resources" className="mb-12 scroll-mt-20">
                  <h2 className="text-3xl font-bold text-primary mb-6">{t.ckdExplained.sections.resources.title}</h2>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg">
                      <Download className="mr-2 h-5 w-5" />
                      {t.ckdExplained.sections.resources.button}
                    </Button>
                  </div>
                </section>
            </article>
        </div>
      </main>
    </div>
  );
};

export default CkdExplainedPage;

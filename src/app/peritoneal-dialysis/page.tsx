
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const PeritonealDialysisPage = () => {
  return (
    <div className="bg-background text-foreground flex-1">
      <AppHeader />
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
            <Button asChild variant="outline" className="mb-8">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Peritoneal Dialysis</h1>
            <p className="text-lg text-foreground/80 mb-10">
              Information about Peritoneal Dialysis will be available here soon.
            </p>

            <Card>
                <CardHeader>
                    <CardTitle>Content Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>This page is under construction. Please check back later for detailed information about peritoneal dialysis, including how it works, its benefits, and what to expect from the treatment.</p>
                </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
};

export default PeritonealDialysisPage;

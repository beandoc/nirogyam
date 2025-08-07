
'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

const GlomerulonephritisPage = () => {
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
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <Shield className="h-10 w-10 text-primary" />
                                <CardTitle className="text-3xl">Glomerulonephritis</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-foreground/80">
                                This page is under construction. Content about Glomerulonephritis will be added here soon.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default GlomerulonephritisPage;


'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Download } from 'lucide-react';
import { resources } from '@/lib/data';

export const ResourceSection = () => {
    const [showAllResources, setShowAllResources] = useState(false);

    return (
        <section id="resources" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-primary">Resources</h3>
                    <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">Download helpful guides and fact sheets to support your kidney health journey.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.slice(0, showAllResources ? resources.length : 3).map((resource, index) => (
                        <Card key={index} className="flex flex-col text-center hover:shadow-lg transition-shadow">
                            <CardHeader className="flex-grow">
                                <div className="mb-4">
                                    <Image 
                                        src={resource.image}
                                        alt={`Preview of ${resource.title}`} 
                                        width={210} 
                                        height={297} 
                                        className="rounded-md shadow-md mx-auto aspect-[210/297] object-cover"
                                        data-ai-hint={resource.aiHint} 
                                    />
                                </div>
                                <CardTitle className="text-lg">{resource.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground">{resource.description}</p>
                            </CardContent>
                            <CardFooter className="justify-center pt-4">
                                <Button asChild>
                                    <a href={resource.href} download>
                                        <Download className="mr-2 h-4 w-4" />
                                        Download
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                 <div className="mt-12 text-center">
                    <Button size="lg" variant="outline" onClick={() => setShowAllResources(!showAllResources)}>
                        {showAllResources ? 'Show Less' : 'Show More Resources'}
                    </Button>
                </div>
            </div>
        </section>
    );
};

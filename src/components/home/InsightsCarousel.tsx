
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { keyInsights } from '@/lib/data';

export const InsightsCarousel = () => {
    return (
        <section id="key-insights" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-primary">Key Insights</h3>
                    <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">Explore our articles for in-depth information on kidney health, treatment, and living well with kidney disease.</p>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: keyInsights.length > 2,
                    }}
                    className="w-full max-w-6xl mx-auto"
                >
                    <CarouselContent>
                        {keyInsights.map((insight, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1 h-full">
                                    <Card className="flex flex-col h-full">
                                        <CardHeader>
                                            <Image src={insight.image} alt={insight.title} width={600} height={400} className="rounded-t-lg aspect-[3/2] object-cover" data-ai-hint={insight.aiHint} />
                                            <CardTitle className="mt-4">{insight.title}</CardTitle>
                                            <CardDescription>{insight.minutesToRead} min read</CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <p className="text-sm text-muted-foreground line-clamp-3">{insight.description}</p>
                                        </CardContent>
                                        <CardFooter>
                                            <Button asChild variant="secondary" className="w-full">
                                                <Link href={insight.href}>Read More</Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
};

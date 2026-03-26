
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { podcasts } from '@/lib/data';

export const PodcastSection = () => {
    const [isClient, setIsClient] = useState(false);
    const [showAllPodcasts, setShowAllPodcasts] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <section id="kidney-conversations" className="py-20 bg-card">
            <div className="container mx-auto px-4 text-center">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-primary">Kidney Conversations</h3>
                    <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">Tune into our podcasts for in-depth discussions with experts, patient stories, and the latest advancements in kidney care.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {podcasts.slice(0, showAllPodcasts ? podcasts.length : 3).map((episode, index) => (
                        <Card key={index}>
                            <CardHeader><CardTitle className="text-primary">{episode.title}</CardTitle></CardHeader>
                            <CardContent>
                                <p className="text-foreground/80 mb-4">{episode.description}</p>
                                <video controls className="w-full">
                                    <source src={episode.src} type="video/mp4" />
                                    Your browser does not support the video element.
                                </video>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="mt-12">
                    <Button size="lg" variant="outline" onClick={() => setShowAllPodcasts(!showAllPodcasts)}>
                        {showAllPodcasts ? 'Show Less' : 'Explore More Podcasts'}
                    </Button>
                </div>
            </div>
        </section>
    );
};

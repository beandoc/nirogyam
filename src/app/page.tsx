
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function NirogyamPage() {
  const toolkits = [
    {
      image: '/hemodialysis_image.png',
      title: 'Know Hemodialysis',
      description: 'An interactive guide to understanding hemodialysis.',
      href: '/toolkits/know-hemodialysis',
      aiHint: 'medical equipment',
    },
    {
      image: '/ckdassessment.png',
      title: 'CKD Assessment',
      description: 'Assess your risk and stages of Chronic Kidney Disease.',
      href: '/toolkits/ckd-assessment',
      aiHint: 'medical checklist',
    },
    {
      image: '/akiriskassessment.png',
      title: 'AKI Risk Assessment',
      description: 'Evaluate the risk factors for Acute Kidney Injury.',
      href: '/toolkits/aki-risk-assessment',
      aiHint: 'risk assessment',
    },
    {
      image: '/kidneycarechoice.png',
      title: 'Kidney Care Choices',
      description: 'Explore treatment options and make informed care decisions.',
      href: '/toolkits/kidney-care-choices',
      aiHint: 'decision tree',
    },
    {
      image: '/adpkdroadmap.png',
      title: 'ADPKD Road Map',
      description: 'A guide for navigating Autosomal Dominant Polycystic Kidney Disease.',
      href: '/toolkits/adpkd-road-map',
      aiHint: 'medical roadmap',
    },
    {
      image: '/kidneybiopsyconsent.png',
      title: 'Biopsy Consent',
      description: 'An interactive guide to a better understanding of the biopsy consent process.',
      href: '/toolkits/biopsy-consent',
      aiHint: 'medical consent',
    },
    {
      image: '/kidneyhealthdashboard.png',
      title: 'Kidney Health Dashboard',
      description: 'Track your kidney health metrics over time.',
      href: '/toolkits/kidney-health-dashboard',
      aiHint: 'medical dashboard',
    },
    {
      image: '/ckdroadmap.png',
      title: 'Your CKD Road Map',
      description: 'A personalized guide for your CKD journey.',
      href: '/toolkits/ckd-road-map',
      aiHint: 'doctors patient',
    },
  ];

  return (
    <div className="bg-background text-foreground flex-1 flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern py-20 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-4 tracking-tight">
              Empowering Your Kidney Health Journey
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl">
              A comprehensive, compassionate resource for understanding kidney health, managing kidney disease, and finding the support you need.
            </p>
            <Button size="lg" asChild>
              <a href="#assess-kidney">Assess Your Risk Now</a>
            </Button>
          </div>
          <div className="hidden md:block">
            <Image
              src="/herosection_image.png"
              alt="Illustration of doctors and a patient discussing kidney health"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              data-ai-hint="doctors patient kidney"
            />
          </div>
        </div>
      </section>

      {/* Digital Toolkits */}
      <section id="digital-toolkits" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary">Digital Toolkits</h3>
            <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">
              Interactive tools to help you assess risks and make informed decisions about your kidney health.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {toolkits.map((toolkit, index) => (
              <Card key={index} className="flex flex-col">
                <Image
                  src={toolkit.image}
                  alt={toolkit.title}
                  width={600}
                  height={400}
                  className="rounded-t-lg"
                  data-ai-hint={toolkit.aiHint}
                />
                <CardHeader>
                  <CardTitle>{toolkit.title}</CardTitle>
                  <CardDescription>{toolkit.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button asChild className="w-full">
                    <Link href={toolkit.href}>
                      Launch Toolkit <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Guide */}
      <section id="renal-nutrition" className="py-20 bg-card">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/foodbasics.png"
              alt="A colorful plate of healthy food"
              width={600}
              height={600}
              className="object-cover"
              data-ai-hint="healthy food plate"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Your Guide to Renal Nutrition</h3>
            <p className="text-lg text-foreground/80 mb-6">
              A well-balanced diet of nutritious, low-sodium foods rich in vitamins and minerals can slow or stop kidney disease progression.
            </p>
            <Button size="lg" asChild>
              <Link href="/renal-nutrition">
                Explore the Nutrition Guide <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-primary mb-6">About Nirogyam</h3>
            <p className="text-lg text-foreground/80 max-w-xl">
              Nirogyam is dedicated to providing clear, reliable, and accessible information on kidney health. We believe that informed patients and caregivers are empowered to make the best decisions for their health journey. Our content is curated by medical professionals and patient advocates to ensure accuracy and relevance.
            </p>
          </div>
          <div>
            <Image
              src="/nirogyamlogo.png"
              alt="Nirogyam company logo"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="company logo"
            />
          </div>
        </div>
      </section>
    </div>
);
}

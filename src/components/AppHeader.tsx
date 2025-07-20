
'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter, usePathname } from 'next/navigation';
import en from '@/locales/en.json';
import hi from '@/locales/hi.json';


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const kidneyHealthTopics = [
  {
    title: "How Kidneys Work",
    href: "/how-kidneys-work",
    description: "Learn the fundamentals of how your kidneys filter waste and keep you healthy.",
  },
  {
    title: "CKD Explained",
    href: "/ckd-explained",
    description: "Understand Chronic Kidney Disease, its causes, symptoms, and progression.",
  },
  {
    title: "Stages of CKD",
    href: "/stages-of-ckd",
    description: "Find out about the different stages of CKD and what they mean for you.",
  },
   {
    title: "Hemodialysis",
    href: "/hemodialysis",
    description: "Learn about the hemodialysis process for treating kidney failure.",
  },
  {
    title: "eGFR Explained",
    href: "/egfr-explained",
    description: "What your estimated Glomerular Filtration Rate means for your kidney health.",
  },
  {
    title: "Creatinine Explained",
    href: "/creatinine-explained",
    description: "Understand what creatinine is and its important role in kidney health.",
  },
  {
    title: "Kidney Function Tests",
    href: "/kidney-function-tests",
    description: "A guide to the various tests used to monitor your kidney health.",
  },
  {
    title: "Kidney Stones",
    href: "/kidney-stones",
    description: "Learn about the causes, symptoms, and treatments for kidney stones.",
  },
  {
    title: "Living with a Single Kidney",
    href: "/living-with-single-kidney",
    description: "Information and guidance for individuals with one kidney.",
  },
];

const dietAndNutritionTopics = [
    {
        title: "Renal Nutrition Guide",
        href: "/renal-nutrition",
        description: "Your main guide to a kidney-friendly diet to help manage CKD.",
    },
    {
        title: "Good Nutrition",
        href: "/good-nutrition",
        description: "General tips for a healthy diet and lifestyle for overall well-being.",
    },
    {
        title: "Sodium Explained",
        href: "/sodium-explained",
        description: "How to limit sodium and use herbs and spices for flavor.",
    },
    {
        title: "Potassium Explained",
        href: "/potassium-explained",
        description: "A guide to managing potassium in your diet for kidney health.",
    },
    {
        title: "Phosphorus Explained",
        href: "/phosphorus-explained",
        description: "Learn how to manage phosphorus levels for bone and heart health.",
    },
    {
        title: "Protein Explained",
        href: "/protein-explained",
        description: "Learn the right amount of protein to eat with and without dialysis.",
    },
];

const transplantTopics = [
    {
        title: "About Kidney Transplant",
        href: "/kidney-transplant#about",
        description: "Learn what a transplant is and when to consider it.",
    },
    {
        title: "Benefits and Risks",
        href: "/kidney-transplant#benefits",
        description: "Understand the pros and cons of transplant surgery.",
    },
    {
        title: "Types of Donors",
        href: "/kidney-transplant#types",
        description: "Explore the differences between living and deceased donors.",
    },
    {
        title: "The Surgery Process",
        href: "/kidney-transplant#surgery",
        description: "What to expect during and after the transplant operation.",
    },
    {
        title: "Eligibility",
        href: "/kidney-transplant#eligibility",
        description: "Find out who is a candidate for a kidney transplant.",
    },
    {
        title: "Getting Started",
        href: "/kidney-transplant#getting-started",
        description: "Your first steps toward evaluation at a transplant center.",
    },
];

const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = pathname.startsWith('/hi') ? 'hi' : 'en';

    const changeLanguage = (newLocale: string) => {
        if (newLocale === currentLocale) {
            return;
        }

        let newPath;
        if (newLocale === 'hi') {
            newPath = `/hi${pathname}`;
        } else {
            newPath = pathname.replace('/hi', '') || '/';
        }
        
        router.push(newPath);
    };

    return (
        <div className="flex items-center space-x-2 text-sm">
            <button 
                onClick={() => changeLanguage('en')} 
                className={cn("font-medium", { 'text-primary underline': currentLocale === 'en' })}
            >
                English
            </button>
            <span>|</span>
            <button 
                onClick={() => changeLanguage('hi')} 
                className={cn("font-medium", { 'text-primary underline': currentLocale === 'hi' })}
            >
                हिन्दी
            </button>
        </div>
    );
};

export const AppHeader = () => {
    const triggerStyles = "bg-primary text-primary-foreground hover:bg-primary/90 data-[state=open]:bg-primary/90"
    const router = useRouter();
    const pathname = usePathname();
    const locale = pathname.startsWith('/hi') ? 'hi' : 'en';
    const t = locale === 'hi' ? hi : en;

    return (
        <header className="bg-card/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/nephrodeptlogo.png" alt="Nirogyam Logo" width={40} height={40} className="rounded-full" />
                    <h1 className="text-2xl font-bold text-primary">{t.header.title}</h1>
                </Link>

                <nav className="hidden md:flex items-center">
                   <NavigationMenu>
                      <NavigationMenuList className="gap-4">
                        <NavigationMenuItem>
                           <NavigationMenuTrigger className={triggerStyles}>{t.header.kidneyHealth}</NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                              {kidneyHealthTopics.map((component) => (
                                <ListItem
                                  key={component.title}
                                  title={component.title}
                                  href={component.href}
                                >
                                  {component.description}
                                </ListItem>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                           <NavigationMenuTrigger className={triggerStyles}>{t.header.dietNutrition}</NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                              {dietAndNutritionTopics.map((component) => (
                                <ListItem
                                  key={component.title}
                                  title={component.title}
                                  href={component.href}
                                >
                                  {component.description}
                                </ListItem>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                           <NavigationMenuTrigger className={triggerStyles}>{t.header.kidneyTransplant}</NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                              {transplantTopics.map((component) => (
                                <ListItem
                                  key={component.title}
                                  title={component.title}
                                  href={component.href}
                                >
                                  {component.description}
                                </ListItem>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                </nav>
                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <LanguageSwitcher />
                    </div>
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <SheetHeader>
                                    <SheetTitle>Nirogyam</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col space-y-4 mt-8">
                                    <Button variant="link" asChild><Link href="/kidney-health">{t.header.kidneyHealth}</Link></Button>
                                    <Button variant="link" asChild><Link href="/renal-nutrition">{t.header.dietNutrition}</Link></Button>
                                    <Button variant="link" asChild><Link href="/kidney-transplant">{t.header.kidneyTransplant}</Link></Button>
                                    <Button variant="link" asChild><a href="/#assess-kidney">Risk Quiz</a></Button>
                                    <Button variant="link" asChild><a href="/#faq">FAQs</a></Button>
                                    <Button variant="link" asChild><a href="/#contact">Contact Us</a></Button>
                                    <div className="pt-4 border-t">
                                     <LanguageSwitcher />
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}



'use client'

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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

const navigationMenuTriggerStyle = "group inline-flex h-10 w-max items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/90 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";


export const AppHeader = () => {
    return (
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

                <nav className="hidden md:flex items-center gap-2">
                   <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                           <NavigationMenuTrigger className={navigationMenuTriggerStyle}>Kidney Health</NavigationMenuTrigger>
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
                           <NavigationMenuTrigger className={navigationMenuTriggerStyle}>Diet & Nutrition</NavigationMenuTrigger>
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
                           <NavigationMenuTrigger className={navigationMenuTriggerStyle}>Kidney Transplant</NavigationMenuTrigger>
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
                                <Button variant="link" asChild><Link href="/kidney-health">Kidney Health</Link></Button>
                                <Button variant="link" asChild><Link href="/renal-nutrition">Renal Nutrition</Link></Button>
                                <Button variant="link" asChild><Link href="/kidney-transplant">Kidney Transplant</Link></Button>
                                <Button variant="link" asChild><a href="/#assess-kidney">Risk Quiz</a></Button>
                                <Button variant="link" asChild><a href="/#faq">FAQs</a></Button>
                                <Button variant="link" asChild><a href="/#contact">Contact Us</a></Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

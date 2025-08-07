
'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import { Menu, Search } from 'lucide-react';
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

const resources = [
  {
    title: "Patient Education",
    href: "/kidney-health",
    description: "Browse our full library of articles on kidney health, diet, and treatment.",
  },
  {
    title: "eGFR Calculator",
    href: "/egfr-calculator",
    description: "Estimate your eGFR with our interactive calculator.",
  },
  {
    title: "Digital Toolkits",
    href: "/#digital-toolkits",
    description: "Interactive tools to assess risks and make informed decisions.",
  },
  {
    title: "Podcasts",
    href: "/#kidney-conversations",
    description: "Tune into discussions with experts and patients.",
  },
  {
    title: "Downloadable Resources",
    href: "/#resources",
    description: "Download helpful guides and fact sheets.",
  },
];

const aboutUs = [
    {
        title: "About Nirogyam",
        href: "/#about",
        description: "Learn about our mission to provide clear and reliable kidney health information.",
    },
    {
        title: "Contact Us",
        href: "/#contact",
        description: "Share your story, ask questions, or get in touch with our team.",
    },
     {
        title: "FAQs",
        href: "/#faq",
        description: "Find answers to common questions about kidney health and donation.",
    },
];

const HeaderSearch = () => {
    const router = useRouter();
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/kidney-health?q=${encodeURIComponent(query)}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
                type="text"
                placeholder="Search topics..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 text-base bg-background"
            />
        </form>
    );
};


export const AppHeader = () => {
    const triggerStyles = "bg-transparent text-foreground hover:bg-accent/50 data-[state=open]:bg-accent/50"
    
    return (
        <header className="bg-card/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center gap-4">
                <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                    <Image src="/nephrodeptlogo.png" alt="Nirogyam Logo" width={40} height={40} className="rounded-full" />
                    <h1 className="text-2xl font-bold text-primary">Nirogyam</h1>
                </Link>

                <nav className="hidden md:flex items-center gap-4 flex-grow">
                   <NavigationMenu>
                      <NavigationMenuList className="gap-2">
                        <NavigationMenuItem>
                           <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), triggerStyles)}>
                             <Link href="/kidney-health">Patient Education</Link>
                           </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                           <NavigationMenuTrigger className={triggerStyles}>Patient Resources</NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                              {resources.map((component) => (
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
                           <NavigationMenuTrigger className={triggerStyles}>About</NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] ">
                              {aboutUs.map((component) => (
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
                    <div className="flex-grow justify-end hidden lg:flex">
                        <HeaderSearch />
                    </div>
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
                                <div className="px-2">
                                  <HeaderSearch />
                                </div>
                                <Button variant="ghost" asChild className="justify-start"><Link href="/kidney-health">Patient Education</Link></Button>
                                <Button variant="ghost" asChild className="justify-start"><a href="/#digital-toolkits">Toolkits</a></Button>
                                <Button variant="ghost" asChild className="justify-start"><a href="/#faq">FAQs</a></Button>
                                <Button variant="ghost" asChild className="justify-start"><a href="#contact">Contact</a></Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

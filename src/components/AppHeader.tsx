
'use client'

import React, { useState, useEffect } from 'react';
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
import { LanguageToggle } from '@/components/LanguageToggle';

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
        <form onSubmit={handleSearch} className="relative w-full max-w-sm group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/40 group-focus-within:text-primary transition-colors" />
            <Input
                type="text"
                placeholder="Search medical resources..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-11 h-11 text-base bg-slate-100/50 border-none rounded-full ring-0 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:bg-white transition-all shadow-inner"
            />
        </form>
    );
};


export const AppHeader = () => {
    const triggerStyles = "bg-transparent text-foreground hover:bg-primary/10 data-[state=open]:bg-primary/10 transition-colors font-medium rounded-full px-5 h-11"
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-3",
            scrolled 
                ? "bg-white/80 backdrop-blur-2xl shadow-xl shadow-primary/5 border-b border-primary/10 py-2" 
                : "bg-transparent border-b border-transparent"
        )}>
            <div className="container mx-auto px-4 flex justify-between items-center gap-6 lg:gap-12">
                <Link href="/" className="flex items-center gap-2 md:gap-4 group transition-all shrink-0">
                    <div className="relative overflow-hidden rounded-full shadow-2xl ring-2 ring-primary/10 group-hover:ring-primary/40 transition-all duration-500">
                        <Image src="/nephrodeptlogo.png" alt="Nirogyam Logo" width={48} height={48} className="rounded-full transform group-hover:scale-110 transition-transform duration-700 w-10 h-10 md:w-12 md:h-12" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-xl md:text-3xl font-black font-heading tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-indigo-700 leading-tight">Nirogyam</h1>
                        <span className="text-[9px] md:text-[11px] h-3 uppercase tracking-[0.3em] font-black text-primary/60 leading-none">Kidney Health</span>
                    </div>
                </Link>

                <nav className="hidden xl:flex items-center gap-4 flex-grow">
                   <NavigationMenu>
                      <NavigationMenuList className="gap-2">
                        <NavigationMenuItem>
                           <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), triggerStyles)}>
                             <Link href="/kidney-health">Knowledge Center</Link>
                           </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                           <NavigationMenuTrigger className={triggerStyles}>Clinical Resources</NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[450px] gap-4 p-8 md:w-[600px] md:grid-cols-2 lg:w-[750px] glass-card rounded-[2rem] border-primary/5 shadow-2xl">
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
                           <NavigationMenuTrigger className={triggerStyles}>The Journey</NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-4 p-8 md:w-[500px] glass-card rounded-[2rem] border-primary/5 shadow-2xl">
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
                    <div className="flex-grow justify-end flex items-center gap-6">
                        <div className="hidden lg:flex items-center gap-6">
                            <HeaderSearch />
                            <LanguageToggle />
                        </div>
                    </div>
                </nav>

                <div className="xl:hidden flex items-center gap-3">
                    <div className="hidden sm:block">
                        <LanguageToggle />
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="hover:bg-primary/10 rounded-full transition-all active:scale-95">
                                <Menu className="h-7 w-7 text-primary" strokeWidth={2} />
                                <span className="sr-only">Open navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="glass-card border-none bg-white/95 backdrop-blur-2xl w-full sm:max-w-md p-0 overflow-hidden">
                            <div className="h-full flex flex-col p-8 md:p-12">
                                <SheetHeader className="mb-12 text-left">
                                    <div className="inline-flex mb-4">
                                         <Image src="/nephrodeptlogo.png" alt="Logo" width={40} height={40} className="rounded-full shadow-lg" />
                                    </div>
                                    <SheetTitle className="text-4xl font-black font-heading bg-clip-text text-transparent bg-gradient-to-br from-primary to-indigo-900 tracking-tighter">Navigate Health</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col space-y-4 flex-grow overflow-y-auto pr-4 -mr-4 scrollbar-hidden">
                                     <div className="mb-8">
                                        <p className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-4">Search Resources</p>
                                        <HeaderSearch />
                                    </div>
                                    <p className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-2">Discovery</p>
                                    <Button variant="ghost" asChild className="justify-start text-xl font-bold font-heading h-14 hover:bg-primary/5 hover:translate-x-2 transition-all duration-300 rounded-2xl px-6"><Link href="/kidney-health">Knowledge Repository</Link></Button>
                                    <Button variant="ghost" asChild className="justify-start text-xl font-bold font-heading h-14 hover:bg-primary/5 hover:translate-x-2 transition-all duration-300 rounded-2xl px-6"><a href="/#digital-toolkits">Interactive Toolkits</a></Button>
                                    <Button variant="ghost" asChild className="justify-start text-xl font-bold font-heading h-14 hover:bg-primary/5 hover:translate-x-2 transition-all duration-300 rounded-2xl px-6"><a href="/#faq">Patient FAQs</a></Button>
                                    <Button variant="ghost" asChild className="justify-start text-xl font-bold font-heading h-14 hover:bg-primary/5 hover:translate-x-2 transition-all duration-300 rounded-2xl px-6"><a href="/#contact">Connect with Us</a></Button>
                                    
                                    <div className="pt-8 sm:hidden">
                                        <p className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-4">Language Select</p>
                                        <LanguageToggle />
                                    </div>
                                </div>
                                <div className="pt-12 mt-auto">
                                    <p className="text-xs text-muted-foreground/60 italic leading-relaxed">Dedicated to the global kidney health community through education and empowerment.</p>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

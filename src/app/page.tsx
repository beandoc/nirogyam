'use client';

import { useState, useEffect, useMemo } from 'react';
import { generateHtmlFromPrompt } from '@/ai/flows/generate-html-from-prompt';
import { suggestSemanticImprovements } from '@/ai/flows/suggest-semantic-improvements';
import type { SuggestSemanticImprovementsOutput } from '@/ai/flows/suggest-semantic-improvements';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { useToast } from '@/hooks/use-toast';
import { Wand2, Sparkles, Loader2, Code, Eye, Info } from 'lucide-react';

const defaultHtml = `<header class="text-center p-6 bg-card rounded-lg shadow-md">
  <h1 class="text-4xl font-bold font-headline">Welcome to Markup Muse!</h1>
  <p class="text-muted-foreground mt-2">Your AI-powered HTML editor.</p>
</header>
<main class="mt-8 grid gap-8 md:grid-cols-2">
  <section class="bg-card p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold font-headline">Live Preview</h2>
    <p class="mt-2">Type your HTML in the editor on the left, and see it rendered here in real-time.</p>
    <img src="https://placehold.co/400x200" alt="placeholder image" class="mt-4 rounded-md" data-ai-hint="code technology" />
  </section>
  <section class="bg-card p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold font-headline">AI Features</h2>
    <p class="mt-2">Use the buttons in the header to generate code from a prompt or get semantic suggestions for your current markup.</p>
    <button class="mt-4 w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">Get Started</button>
  </section>
</main>
<footer class="text-center mt-8 p-6 text-muted-foreground">
  <p>&copy; 2024 Markup Muse</p>
</footer>
`;

export default function MarkupMusePage() {
  const [htmlCode, setHtmlCode] = useState(defaultHtml);
  const [liveHtml, setLiveHtml] = useState(htmlCode);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [suggestions, setSuggestions] = useState<SuggestSemanticImprovementsOutput | null>(null);
  const [isGenerateDialogOpen, setIsGenerateDialogOpen] = useState(false);
  const [isSuggestionsSheetOpen, setIsSuggestionsSheetOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handler = setTimeout(() => {
      setLiveHtml(htmlCode);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [htmlCode]);

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    try {
      const result = await generateHtmlFromPrompt({ prompt });
      setHtmlCode(result.htmlCode);
      setIsGenerateDialogOpen(false);
      setPrompt('');
      toast({
        title: 'Success!',
        description: 'HTML generated from your prompt.',
      });
    } catch (error) {
      console.error('Error generating HTML:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate HTML. Please try again.',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSuggest = async () => {
    setIsSuggesting(true);
    try {
      const result = await suggestSemanticImprovements({ htmlCode });
      setSuggestions(result);
    } catch (error) {
      console.error('Error getting suggestions:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to get suggestions. Please try again.',
      });
      setIsSuggestionsSheetOpen(false);
    } finally {
      setIsSuggesting(false);
    }
  };

  const handleApplySuggestions = () => {
    if (suggestions) {
      setHtmlCode(suggestions.improvedHtmlCode);
      setIsSuggestionsSheetOpen(false);
      toast({
        title: 'Success!',
        description: 'Semantic improvements have been applied.',
      });
    }
  };

  const iframeContent = useMemo(() => {
    return `
      <html>
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            body { 
              font-family: 'Inter', sans-serif;
              background-color: #F0F0F5;
              color: #09090b;
              padding: 1rem;
              transition: opacity 0.3s ease-in-out;
            }
          </style>
        </head>
        <body>${liveHtml}</body>
      </html>
    `;
  }, [liveHtml]);

  return (
    <div className="flex flex-col h-screen bg-background text-foreground overflow-hidden">
      <header className="flex items-center justify-between p-4 border-b shrink-0">
        <div className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M17 4.5L7 9.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
          <h1 className="text-xl font-bold font-headline">Markup Muse</h1>
        </div>
        <div className="flex items-center gap-2">
          <Dialog open={isGenerateDialogOpen} onOpenChange={setIsGenerateDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Wand2 className="mr-2 h-4 w-4" />
                Generate with AI
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Generate HTML with AI</DialogTitle>
                <DialogDescription>
                  Describe the HTML you want to create. Be as specific as possible.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Textarea
                  id="prompt"
                  placeholder="e.g., A responsive hero section with a title, subtitle, and a call-to-action button."
                  className="col-span-3 font-code"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={5}
                />
              </div>
              <DialogFooter>
                <Button onClick={handleGenerate} disabled={isGenerating || !prompt}>
                  {isGenerating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Generate
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Sheet open={isSuggestionsSheetOpen} onOpenChange={setIsSuggestionsSheetOpen}>
            <SheetTrigger asChild>
              <Button onClick={() => { setIsSuggestionsSheetOpen(true); handleSuggest(); }}>
                <Sparkles className="mr-2 h-4 w-4" />
                Analyze & Improve
              </Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-2xl w-full flex flex-col">
              <SheetHeader>
                <SheetTitle>AI-Powered Suggestions</SheetTitle>
                <SheetDescription>
                  Here are some suggestions to improve the semantics and accessibility of your HTML.
                </SheetDescription>
              </SheetHeader>
              <div className="flex-grow overflow-y-auto pr-4 -mr-6">
                {isSuggesting ? (
                  <div className="flex items-center justify-center h-full">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                  </div>
                ) : (
                  suggestions && (
                    <div className="grid gap-6 py-4">
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center gap-2"><Info className="h-4 w-4 text-accent-foreground" /> Suggested Improvements</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm bg-muted p-4 rounded-md">
                          {suggestions.suggestions.map((s, i) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center gap-2"><Code className="h-4 w-4 text-accent-foreground" /> Improved Code</h3>
                        <Textarea
                          readOnly
                          value={suggestions.improvedHtmlCode}
                          className="h-96 font-code bg-muted"
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">Cancel</Button>
                </SheetClose>
                <Button onClick={handleApplySuggestions} disabled={isSuggesting || !suggestions}>
                  Apply Changes
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-grow grid md:grid-cols-2 gap-px bg-border overflow-hidden">
        <div className="flex flex-col bg-background">
          <div className="flex items-center justify-between p-2 border-b">
            <h2 className="font-semibold text-sm flex items-center gap-2"><Code className="h-4 w-4"/> Editor</h2>
          </div>
          <div className="flex-grow relative">
            <Textarea
              value={htmlCode}
              onChange={(e) => setHtmlCode(e.target.value)}
              placeholder="Enter your HTML code here..."
              className="absolute inset-0 w-full h-full p-4 font-code text-sm rounded-none border-none resize-none focus-visible:ring-0"
              spellCheck="false"
            />
          </div>
        </div>
        <div className="flex flex-col bg-background">
          <div className="flex items-center justify-between p-2 border-b">
            <h2 className="font-semibold text-sm flex items-center gap-2"><Eye className="h-4 w-4"/> Preview</h2>
          </div>
          <div className="flex-grow bg-muted/20 relative">
            <iframe
              srcDoc={iframeContent}
              title="HTML Preview"
              sandbox="allow-scripts"
              className="w-full h-full border-0 transition-opacity duration-300"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

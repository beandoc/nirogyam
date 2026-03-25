
'use client'

import { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Script from 'next/script';
import { Globe } from 'lucide-react';

const LANGUAGE_KEY = 'googtrans';
const STORAGE_KEY = 'nirogyam-lang';

export const LanguageToggle = () => {
    const [lang, setLang] = useState('en');

    useEffect(() => {
        // Sync state from localStorage on mount
        const savedLang = localStorage.getItem(STORAGE_KEY) || 'en';
        setLang(savedLang);
        
        // Final sanity check: if the UI says 'en' but Google Translate sneaked in a cookie, remove it.
        if (savedLang === 'en') {
             document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
             document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname + ';';
        }
    }, []);

    const handleLanguageChange = (value: string) => {
        setLang(value);
        localStorage.setItem(STORAGE_KEY, value);
        
        // Assertively managed cookies
        document.cookie = `${LANGUAGE_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
        document.cookie = `${LANGUAGE_KEY}=; path=/; domain=${window.location.hostname}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
        
        if (value === 'en') {
             // To go back to English, we explicitly set it to /en/en AND then reload
             document.cookie = `${LANGUAGE_KEY}=/en/en; path=/; max-age=31536000`;
        } else {
             document.cookie = `${LANGUAGE_KEY}=/en/${value}; path=/; max-age=31536000`;
        }
        
        // Immediate reload to apply (standard for Google Translate element)
        window.location.reload();
    };

    return (
        <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary hidden sm:block" />
            <Select value={lang} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-[130px] h-9 text-sm bg-background border-primary/20 hover:border-primary/50 transition-colors">
                    <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="en">English (En)</SelectItem>
                    <SelectItem value="hi">हिंदी (Hindi)</SelectItem>
                    <SelectItem value="mr">मराठी (Marathi)</SelectItem>
                </SelectContent>
            </Select>

            {/* ONLY load Google Translate scripts if the language is NOT English */}
            {lang !== 'en' && (
                <>
                    <Script
                        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
                        strategy="lazyOnload"
                        key="gt-engine"
                    />
                    <Script id="google-translate-config" strategy="lazyOnload" key="gt-config">
                        {`
                        window.googleTranslateElementInit = function() {
                            new window.google.translate.TranslateElement({
                                pageLanguage: 'en',
                                includedLanguages: 'en,hi,mr',
                                autoDisplay: false
                            }, 'google_translate_element_placeholder');
                        }
                        `}
                    </Script>
                </>
            )}
            <div id="google_translate_element_placeholder" className="hidden"></div>
        </div>
    );
};

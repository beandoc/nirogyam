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

export const LanguageToggle = () => {
    const [lang, setLang] = useState('en');

    useEffect(() => {
        const match = document.cookie.match(new RegExp('(^| )' + LANGUAGE_KEY + '=([^;]+)'));
        if (match) {
            const val = match[2];
            const parts = val.split('/');
            if (parts.length === 3) {
                setLang(parts[2]);
            }
        }
    }, []);

    const handleLanguageChange = (value: string) => {
        setLang(value);
        // Precise cookie cleanup to prevent mixed-language states
        document.cookie = `${LANGUAGE_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
        
        if (value === 'en') {
             document.cookie = `${LANGUAGE_KEY}=/en/en; path=/; max-age=31536000`;
        } else {
             document.cookie = `${LANGUAGE_KEY}=/en/${value}; path=/; max-age=31536000`;
        }
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
            <Script
                src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
                strategy="lazyOnload"
            />
            <Script id="google-translate-config" strategy="lazyOnload">
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
            <div id="google_translate_element_placeholder" className="hidden"></div>
        </div>
    );
};

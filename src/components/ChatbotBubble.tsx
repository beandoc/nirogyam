'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Maximize2, Minimize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ChatbotBubble = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [showLabel, setShowLabel] = useState(false);

    const chatbotUrl = "https://kidney-ai.vercel.app/?username=opduser&mobile=0987654321&password=0987654321";

    // Show label after a short delay
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) setShowLabel(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, [isOpen]);

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end pointer-events-none">
            {/* Chatbot Window */}
            <div className={cn(
                "mb-4 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] origin-bottom-right pointer-events-auto",
                isMaximized 
                    ? "fixed inset-4 md:inset-10 w-auto h-auto mb-0" 
                    : "w-[350px] md:w-[420px] h-[550px] md:h-[650px]",
                isOpen 
                    ? "opacity-100 scale-100 translate-y-0" 
                    : "opacity-0 scale-90 translate-y-12 translate-x-12 pointer-events-none"
            )}>
                {/* Premium Header */}
                <div className="bg-gradient-to-r from-primary to-blue-600 p-4 text-white flex justify-between items-center shadow-lg">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-primary ring-1 ring-white/50" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg leading-tight">Kidney AI Assistant</h3>
                            <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-[10px] uppercase font-bold tracking-wider text-white/90">Online & Ready</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <button 
                            onClick={() => setIsMaximized(!isMaximized)}
                            className="hover:bg-white/20 p-2 rounded-full transition-all duration-200"
                            title={isMaximized ? "Minimize" : "Maximize"}
                        >
                            {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                        </button>
                        <button 
                            onClick={() => {
                                setIsOpen(false);
                                setIsMaximized(false);
                            }}
                            className="hover:bg-red-500/80 p-2 rounded-full transition-all duration-200"
                            title="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                
                {/* Chat Iframe Container */}
                <div className="flex-grow relative bg-slate-50">
                    <iframe 
                        src={chatbotUrl}
                        className="w-full h-full border-none"
                        title="Kidney AI Chatbot"
                        allow="clipboard-read; clipboard-write; microphone; camera; geolocation"
                        loading="lazy"
                    />
                    
                    {/* Seamless loading overlay if needed (optional) */}
                </div>
            </div>

            {/* Premium Toggle Button */}
            <div className="relative group pointer-events-auto">
                {/* Tooltip/Label */}
                {!isOpen && (
                   <div className={cn(
                       "absolute bottom-20 right-0 py-2 px-4 bg-white text-primary font-semibold text-sm rounded-xl shadow-xl transition-all duration-500 border border-primary/10 whitespace-nowrap",
                       showLabel ? "opacity-100 -translate-y-2" : "opacity-0 translate-y-0"
                   )}>
                       Ask Kidney AI
                       <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white rotate-45 border-b border-r border-primary/10" />
                   </div>
                )}

                <button
                    onClick={() => {
                        setIsOpen(!isOpen);
                        setShowLabel(false);
                    }}
                    className={cn(
                        "w-16 h-16 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 active:scale-95 relative overflow-hidden",
                        isOpen 
                            ? "bg-red-500 hover:bg-red-600 rotate-180" 
                            : "bg-primary hover:bg-primary/90"
                    )}
                >
                    {isOpen ? (
                        <X className="text-white w-8 h-8" />
                    ) : (
                        <div className="relative">
                            <MessageCircle className="text-white w-8 h-8" />
                            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                        </div>
                    )}
                    
                    {/* Animated Pulse Ring */}
                    {!isOpen && (
                        <span className="absolute inset-0 rounded-full border-4 border-white/30 animate-pulse opacity-20 scale-110" />
                    )}
                </button>
            </div>
        </div>
    );
};

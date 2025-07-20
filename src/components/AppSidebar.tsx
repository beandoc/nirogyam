import React from 'react';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { BookOpen, Utensils, HeartHandshake, Home, Shield, TestTube, ChevronsRight, HeartPulse, Diamond, GraduationCap, Leaf, Cloudy, Bone, Droplet } from 'lucide-react';

export const AppSidebar = () => {
    return (
        <SidebarContent className="p-4">
            <SidebarGroup>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="/" tooltip="Home">
                            <Home />
                            <span>Home</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>
            <SidebarGroup>
                <SidebarGroupLabel className="flex items-center gap-2">
                    <BookOpen />
                    <span>Kidney Health</span>
                </SidebarGroupLabel>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="/how-kidneys-work" tooltip="How Kidneys Work">
                           <ChevronsRight />
                            <span>How Kidneys Work</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="/ckd-explained" tooltip="CKD Explained">
                            <HeartPulse />
                            <span>CKD Explained</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="/stages-of-ckd" tooltip="Stages of CKD">
                            <GraduationCap />
                            <span>Stages of CKD</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="/kidney-stones" tooltip="Kidney Stones">
                            <Diamond />
                            <span>Kidney Stones</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup>
                <SidebarGroupLabel className="flex items-center gap-2">
                    <Utensils />
                    <span>Diet & Nutrition</span>
                </SidebarGroupLabel>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="/renal-nutrition" tooltip="Renal Nutrition Guide">
                            <ChevronsRight />
                            <span>Renal Nutrition Guide</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="/protein-explained" tooltip="Protein Explained">
                            <Leaf />
                            <span>Protein</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="/sodium-explained" tooltip="Sodium Explained">
                            <Cloudy />
                            <span>Sodium</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <SidebarMenuButton href="/potassium-explained" tooltip="Potassium Explained">
                            <Droplet />
                            <span>Potassium</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="/phosphorus-explained" tooltip="Phosphorus Explained">
                            <Bone />
                            <span>Phosphorus</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="/good-nutrition" tooltip="General Wellness">
                            <HeartPulse />
                            <span>General Wellness</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>
            
            <SidebarGroup>
                <SidebarGroupLabel className="flex items-center gap-2">
                    <TestTube />
                    <span>Tests & Results</span>
                </SidebarGroupLabel>
                 <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="/kidney-function-tests" tooltip="Kidney Function Tests">
                            <ChevronsRight />
                            <span>Kidney Function Tests</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <SidebarMenuButton href="/egfr-explained" tooltip="eGFR Explained">
                            <ChevronsRight />
                            <span>eGFR Explained</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="/creatinine-explained" tooltip="Creatinine Explained">
                            <ChevronsRight />
                            <span>Creatinine Explained</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup>
                <SidebarGroupLabel className="flex items-center gap-2">
                    <HeartHandshake />
                    <span>Treatment & Support</span>
                </SidebarGroupLabel>
                 <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="/kidney-transplant" tooltip="Kidney Transplant">
                           <ChevronsRight />
                           <span>Kidney Transplant</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>

        </SidebarContent>
    )
}

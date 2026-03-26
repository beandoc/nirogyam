
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calculator } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  creatinine: z.coerce.number().min(0.1, {
    message: 'Creatinine must be a positive number.',
  }),
  age: z.coerce.number().int().min(18, {
    message: 'Age must be 18 or older.',
  }),
  sex: z.enum(['male', 'female'], {
    required_error: 'You need to select a sex.',
  }),
});

export const EgfrCalculator = () => {
    const [egfrResult, setEgfrResult] = useState<number | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            creatinine: 1.0,
            age: 50,
        },
    });

    const calculateEgfr = (values: z.infer<typeof formSchema>) => {
        const { creatinine, age, sex } = values;
        
        const k = sex === 'female' ? 0.7 : 0.9;
        const alpha = sex === 'female' ? -0.241 : -0.302;
        const sexConstant = sex === 'female' ? 1.012 : 1;

        const egfr = 142 * Math.pow(Math.min(creatinine / k, 1), alpha) * Math.pow(Math.max(creatinine / k, 1), -1.200) * Math.pow(0.9938, age) * sexConstant;
        
        return Math.round(egfr);
    };

    function onSubmit(values: z.infer<typeof formSchema>) {
        const result = calculateEgfr(values);
        setEgfrResult(result);
    }

    const getResultInterpretation = (egfr: number | null) => {
        if (egfr === null) return null;
        if (egfr >= 90) return { text: "Normal kidney function (Stage 1 if other signs of kidney damage)", color: "text-green-600" };
        if (egfr >= 60) return { text: "Mildly decreased kidney function (Stage 2 if other signs of kidney damage)", color: "text-yellow-600" };
        if (egfr >= 45) return { text: "Mild to moderately decreased kidney function (Stage 3a)", color: "text-orange-600" };
        if (egfr >= 30) return { text: "Moderate to severely decreased kidney function (Stage 3b)", color: "text-orange-700" };
        if (egfr >= 15) return { text: "Severely decreased kidney function (Stage 4)", color: "text-red-600" };
        return { text: "Kidney failure (Stage 5)", color: "text-red-800" };
    };

    const interpretation = getResultInterpretation(egfrResult);

    return (
        <Card className="overflow-hidden md:grid md:grid-cols-2 items-center shadow-xl border-primary/20">
            <div className="p-8 md:p-12">
                <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                        <Calculator className="h-10 w-10 text-primary" />
                        <CardTitle className="text-3xl">eGFR Calculator</CardTitle>
                    </div>
                    <CardDescription className="text-lg">Estimate your Glomerular Filtration Rate (eGFR), a key measure of kidney function, with our interactive calculator.</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <FormField
                            control={form.control}
                            name="creatinine"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Serum Creatinine (mg/dL)</FormLabel>
                                <FormControl>
                                    <Input type="number" step="0.1" placeholder="e.g., 1.2" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="age"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Age (years)</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="e.g., 55" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        </div>
                        <FormField
                        control={form.control}
                        name="sex"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                            <FormLabel>Sex</FormLabel>
                            <FormControl>
                                <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex gap-4"
                                >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="male" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Male</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="female" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Female</FormLabel>
                                </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <div className="flex gap-4">
                            <Button type="submit">Calculate eGFR</Button>
                            <Button variant="link" asChild>
                                <Link href="/egfr-explained">What is eGFR?</Link>
                            </Button>
                        </div>
                    </form>
                    </Form>
                </CardContent>
            </div>
            <div className="bg-primary/5 p-8 h-full flex flex-col justify-center items-center text-center">
               {egfrResult !== null ? (
                    <div className="w-full">
                        <p className="text-lg text-foreground/80">Your Estimated GFR is:</p>
                        <p className="text-6xl font-extrabold text-primary my-2">{egfrResult}</p>
                        <p className="text-lg font-normal text-muted-foreground">mL/min/1.73m²</p>
                        {interpretation && (
                            <p className={`mt-4 text-lg font-semibold ${interpretation.color}`}>{interpretation.text}</p>
                        )}
                        <p className="mt-4 text-sm text-foreground/70">This result is an estimate based on the CKD-EPI 2021 equation. Please consult your doctor to understand your results fully.</p>
                        <Button variant="outline" onClick={() => setEgfrResult(null)} className="mt-6">Calculate Again</Button>
                    </div>
                ) : (
                    <div className="w-full">
                        <Image src="/egfrcalculator.png" alt="Illustration of a calculator and medical icons" width={400} height={300} className="rounded-lg mx-auto" data-ai-hint="calculator medical" />
                        <p className="mt-4 text-muted-foreground">Enter your lab values to get your estimated GFR result.</p>
                    </div>
                )}
            </div>
        </Card>
    );
};

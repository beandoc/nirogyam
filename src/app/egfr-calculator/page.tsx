
'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AppHeader } from '@/components/AppHeader';
import { ArrowLeft, Calculator } from 'lucide-react';

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

const EgfrCalculatorPage = () => {
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
    <div className="bg-background text-foreground flex-1">
      <AppHeader />
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
            <Button asChild variant="outline" className="mb-8">
                <Link href="/egfr-explained">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to eGFR Explained
                </Link>
            </Button>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Calculator className="h-10 w-10 text-primary" />
                  <div>
                    <CardTitle className="text-3xl">eGFR Calculator</CardTitle>
                    <CardDescription>Estimate your Glomerular Filtration Rate.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="creatinine"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Serum Creatinine (mg/dL)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="e.g., 1.2" {...field} />
                          </FormControl>
                          <FormDescription>
                            Enter your most recent serum creatinine value from your lab report.
                          </FormDescription>
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
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="male" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Male
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="female" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Female
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Calculate eGFR</Button>
                  </form>
                </Form>

                {egfrResult !== null && (
                  <Card className="mt-8 bg-primary/10">
                    <CardHeader>
                      <CardTitle>Your Result</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-4xl font-bold text-primary">{egfrResult} <span className="text-lg font-normal">mL/min/1.73m²</span></p>
                      {interpretation && (
                        <p className={`mt-2 text-lg font-semibold ${interpretation.color}`}>{interpretation.text}</p>
                      )}
                      <p className="mt-4 text-sm text-foreground/80">
                        This calculation uses the CKD-EPI 2021 equation. This result is an estimate. Please consult with your healthcare provider to understand your results fully.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
};

export default EgfrCalculatorPage;

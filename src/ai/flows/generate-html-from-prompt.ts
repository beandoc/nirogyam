'use server';
/**
 * @fileOverview An AI agent that generates HTML code from a text prompt.
 *
 * - generateHtmlFromPrompt - A function that generates HTML code based on a text prompt.
 * - GenerateHtmlFromPromptInput - The input type for the generateHtmlFromPrompt function.
 * - GenerateHtmlFromPromptOutput - The return type for the generateHtmlFromPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHtmlFromPromptInputSchema = z.object({
  prompt: z.string().describe('A text prompt describing the desired HTML code.'),
});
export type GenerateHtmlFromPromptInput = z.infer<typeof GenerateHtmlFromPromptInputSchema>;

const GenerateHtmlFromPromptOutputSchema = z.object({
  htmlCode: z.string().describe('The generated HTML code.'),
});
export type GenerateHtmlFromPromptOutput = z.infer<typeof GenerateHtmlFromPromptOutputSchema>;

export async function generateHtmlFromPrompt(input: GenerateHtmlFromPromptInput): Promise<GenerateHtmlFromPromptOutput> {
  return generateHtmlFromPromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHtmlFromPromptPrompt',
  input: {schema: GenerateHtmlFromPromptInputSchema},
  output: {schema: GenerateHtmlFromPromptOutputSchema},
  prompt: `You are an expert HTML code generator. Generate HTML code based on the following text prompt:\n\nPrompt: {{{prompt}}}\n\nHTML Code:`, 
});

const generateHtmlFromPromptFlow = ai.defineFlow(
  {
    name: 'generateHtmlFromPromptFlow',
    inputSchema: GenerateHtmlFromPromptInputSchema,
    outputSchema: GenerateHtmlFromPromptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

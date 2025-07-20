'use server';

/**
 * @fileOverview Analyzes HTML code and suggests improvements for semantic correctness and accessibility.
 *
 * - suggestSemanticImprovements - A function that handles the HTML analysis and suggestion process.
 * - SuggestSemanticImprovementsInput - The input type for the suggestSemanticImprovements function.
 * - SuggestSemanticImprovementsOutput - The return type for the suggestSemanticImprovements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSemanticImprovementsInputSchema = z.object({
  htmlCode: z
    .string()
    .describe('The HTML code to analyze for semantic improvements.'),
});
export type SuggestSemanticImprovementsInput = z.infer<
  typeof SuggestSemanticImprovementsInputSchema
>;

const SuggestSemanticImprovementsOutputSchema = z.object({
  improvedHtmlCode: z
    .string()
    .describe(
      'The HTML code with suggested semantic and accessibility improvements.'
    ),
  suggestions: z
    .array(z.string())
    .describe('A list of suggestions made to the HTML code.'),
});
export type SuggestSemanticImprovementsOutput = z.infer<
  typeof SuggestSemanticImprovementsOutputSchema
>;

export async function suggestSemanticImprovements(
  input: SuggestSemanticImprovementsInput
): Promise<SuggestSemanticImprovementsOutput> {
  return suggestSemanticImprovementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestSemanticImprovementsPrompt',
  input: {schema: SuggestSemanticImprovementsInputSchema},
  output: {schema: SuggestSemanticImprovementsOutputSchema},
  prompt: `You are an AI expert in web accessibility and semantic HTML.

  Analyze the following HTML code and suggest improvements for semantic correctness and accessibility, such as adding aria attributes, using appropriate HTML5 semantic elements, and improving overall structure.
  Return the improved HTML code and a list of suggestions made.

  HTML Code:
  \`\`\`html
  {{{htmlCode}}}
  \`\`\`

  Consider the following:
  *   Use semantic HTML5 elements (e.g., <article>, <nav>, <aside>, <header>, <footer>) where appropriate to improve structure and meaning.
  *   Add aria attributes to enhance accessibility for users with disabilities.
  *   Ensure proper use of headings (<h1> to <h6>) to create a logical document outline.
  *   Use appropriate roles for dynamic content and interactive elements.

  Output the improved HTML code and a list of the specific suggestions that you made.
`,
});

const suggestSemanticImprovementsFlow = ai.defineFlow(
  {
    name: 'suggestSemanticImprovementsFlow',
    inputSchema: SuggestSemanticImprovementsInputSchema,
    outputSchema: SuggestSemanticImprovementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

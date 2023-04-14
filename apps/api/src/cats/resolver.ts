import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Configuration, OpenAIApi } from 'openai';

import { Service } from './service';
import { LibraryType } from './dto/create-cat.dto';
import { LibraryInput } from './inputs/cats.input';
import { summariseTextPrompt } from '../utils/open-ai-prompts';

@Resolver()
export class LibraryResolver {
  constructor(private readonly library: Service) {}

  @Mutation(() => LibraryType)
  async createRecord(@Args('input') input: LibraryInput) {
    const opensearchshit = {
      summary: input.text,
      tags: ['heh', 'hohoho'],
    };

    return this.library.create(opensearchshit);
  }

  @Query(() => [LibraryType])
  async fetchLibrary() {
    return this.library.findAll();
  }

  @Query(() => LibraryType)
  async fetchSummary(@Args('input') input: LibraryInput) {
    const config = new Configuration({ apiKey: process.env.OPEN_AI_SECRET });
    const openai = new OpenAIApi(config);

    try {
      const response = await openai.createCompletion({
        prompt: summariseTextPrompt(input.text),
        model: 'text-davinci-003',
        temperature: 0.5,
        max_tokens: 200,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });

      const parsed = JSON.parse(response.data.choices[0].text);

      return parsed;
    } catch (error) {
      console.log('error getting summary', error);
      throw new Error(error);
    }
  }
}

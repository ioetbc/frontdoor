import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Configuration, OpenAIApi } from 'openai';

import { Service } from './service';
import { TCreateRecord } from './dto/create-cat.dto';
import { TRecord } from './dto/record.dto';
import { SummaryType } from './dto/summary.dto';
import { RecordInput } from './inputs/record.input';
import { TextInput } from './inputs/text.input';
import { summariseTextPrompt } from '../utils/open-ai-prompts';
import { SortInput } from './inputs/sort.input';

@Resolver()
export class LibraryResolver {
  constructor(private readonly library: Service) {}

  @Mutation(() => TCreateRecord)
  async createRecord(@Args('input') input: RecordInput) {
    return this.library.create({ ...input, createdAt: new Date() });
  }

  @Query(() => [TRecord])
  async fetchLibrary(@Args('input') input: SortInput) {
    return this.library.fetchLibrary(input.asc);
  }

  @Query(() => [TRecord])
  async fetchRecordsByTag(@Args('input') input: TextInput) {
    return this.library.fetchRecordByTag(input.text);
  }

  @Query(() => SummaryType)
  async fetchSummary(@Args('input') input: TextInput) {
    // TODO - move this to a models file
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

      // TODO - check to see if response is actuallt a valid JSON object
      const parsed = JSON.parse(response.data.choices[0].text);

      return parsed;
    } catch (error) {
      console.log('error getting summary', error);
      throw new Error(error);
    }
  }
}

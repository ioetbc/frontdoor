import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IRecord } from './interfaces/record.interface';
import { TCreateRecord } from './dto/create-record.dto';
import { TTag } from './dto/tag.dto';

@Injectable()
export class Service {
  constructor(
    @InjectModel('Library') private readonly libraryModel: Model<IRecord>,
  ) {}

  async create(createLibraryDto: TCreateRecord): Promise<IRecord> {
    console.log('createLibraryDto', createLibraryDto);
    const record = new this.libraryModel(createLibraryDto);
    return record.save();
  }

  async fetchRecordByTag(tag: string): Promise<IRecord[]> {
    return await this.libraryModel.find({ tags: tag }).exec();
  }

  async fetchTags(): Promise<TTag[]> {
    const uniqueTags = await this.libraryModel.aggregate([
      { $unwind: '$tags' },
      { $group: { _id: '$tags' } },
    ]);

    return uniqueTags.map((tag) => ({ tag: tag._id }));
  }

  async fetchLibrary(asc: boolean): Promise<IRecord[]> {
    try {
      const response = await this.libraryModel
        .find()
        .select('-__v')
        .sort({
          createdAt: asc ? -1 : 1,
        })
        .exec();
      return response;
    } catch (error) {
      console.log('error', error);
      throw new Error(error);
    }
  }
}

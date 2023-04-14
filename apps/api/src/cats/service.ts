import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Record } from './interfaces/cats.interface';
import { TCreateRecord } from './dto/create-cat.dto';

@Injectable()
export class Service {
  constructor(
    @InjectModel('Library') private readonly libraryModel: Model<Record>,
  ) {}

  async create(createLibraryDto: TCreateRecord): Promise<Record> {
    console.log('createLibraryDto', createLibraryDto);
    const record = new this.libraryModel(createLibraryDto);
    return record.save();
  }

  async fetchRecordByTag(tag: string): Promise<Record[]> {
    return await this.libraryModel.find({ tags: tag }).exec();
  }

  async fetchLibrary(asc: boolean): Promise<Record[]> {
    try {
      const response = await this.libraryModel
        .find()
        .select('-__v')
        .sort({
          createdAt: asc ? -1 : 1,
        })
        .exec();
      console.log('response', response);
      return response;
    } catch (error) {
      console.log('error', error);
      throw new Error(error);
    }
  }
}

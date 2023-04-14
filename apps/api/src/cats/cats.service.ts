import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Library } from './interfaces/cats.interface';
import { LibraryInput } from './inputs/cats.input';

@Injectable()
export class LibraryService {
  constructor(
    @InjectModel('Library') private readonly libraryModel: Model<Library>,
  ) {}

  async create(createLibraryDto: LibraryInput): Promise<Library> {
    const item = new this.libraryModel(createLibraryDto);
    console.log('item to create intnit', item);
    return await item.save();
  }

  async findAll(): Promise<Library[]> {
    return await this.libraryModel.find().exec();
  }
}

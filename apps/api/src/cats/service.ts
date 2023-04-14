import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Library } from './interfaces/cats.interface';
import { LibraryType } from './dto/create-cat.dto';

@Injectable()
export class Service {
  constructor(
    @InjectModel('Library') private readonly libraryModel: Model<Library>,
  ) {}

  async create(createLibraryDto: LibraryType): Promise<Library> {
    const item = new this.libraryModel(createLibraryDto);
    console.log('item to create intnit', item);
    return await item.save();
  }

  async findAll(): Promise<Library[]> {
    return await this.libraryModel.find().exec();
  }
}

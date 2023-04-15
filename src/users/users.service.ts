import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<CreateUserDto>,
  ) {}

  async create({ name, email, description }: CreateUserDto) {
    const newUser = new this.userModel({ name, email, description });
    const userCreated = await newUser.save();
    return userCreated;
  }

  async findAll() {
    const users = await this.userModel.find();

    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      description: user.description,
    }));
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new NotFoundException('Could not find user');
    }

    return {
      id: user._id,
      name: user.name,
      email: user.email,
      description: user.description,
    };
  }

  async remove(id: string) {
    await this.userModel.deleteOne({ _id: id }).exec();
  }
}

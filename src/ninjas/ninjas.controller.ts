import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjarDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  @Get()
  getNinjas(@Query('type') type: string) {
    return [{ type }];
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return { id };
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return { name: createNinjaDto.name };
  }

  @Put(':id')
  updateNinja(
    @Param('id') id: string,
    @Body() updateNinjaDto: UpdateNinjarDto,
  ) {
    return { id, name: updateNinjaDto.name };
  }

  @Delete(':id')
  removeNinja(@Param('id') id: string) {
    return { id };
  }
}

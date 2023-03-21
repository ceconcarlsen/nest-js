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
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjaService: NinjasService) {}

  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'sword') {
    return this.ninjaService.getNinjas(weapon);
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return this.ninjaService.getNinja(Number(id));
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.createNinja(createNinjaDto);
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

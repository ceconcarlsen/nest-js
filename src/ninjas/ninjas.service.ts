import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Injectable() //auto inject when a controller depends on it (cool)
export class NinjasService {
  private ninjas = [
    {
      id: 0,
      name: 'ninjaA',
      weapon: 'stars',
    },
    {
      id: 0,
      name: 'ninjaB',
      weapon: 'sword',
    },
  ];

  getNinjas(weapon: 'stars' | 'sword') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }

    return this.ninjas;
  }

  getNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);

    if (!ninja) {
      throw new Error('ninja not found');
    }

    return ninja;
  }

  createNinja(ninja: CreateNinjaDto) {
    const newNinja = {
      ...ninja,
      id: Date.now(),
    };
    this.ninjas.push(newNinja);

    return newNinja;
  }
}

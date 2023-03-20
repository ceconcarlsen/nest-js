import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjarDto } from './dto/update-ninja.dto';
export declare class NinjasController {
    getNinjas(type: string): {
        type: string;
    }[];
    getOneNinja(id: string): {
        id: string;
    };
    createNinja(createNinjaDto: CreateNinjaDto): {
        name: string;
    };
    updateNinja(id: string, updateNinjaDto: UpdateNinjarDto): {
        id: string;
        name: string;
    };
    removeNinja(id: string): {
        id: string;
    };
}

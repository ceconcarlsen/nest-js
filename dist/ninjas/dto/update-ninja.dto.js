"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNinjarDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ninja_dto_1 = require("./create-ninja.dto");
class UpdateNinjarDto extends (0, mapped_types_1.PartialType)(create_ninja_dto_1.CreateNinjaDto) {
}
exports.UpdateNinjarDto = UpdateNinjarDto;
//# sourceMappingURL=update-ninja.dto.js.map
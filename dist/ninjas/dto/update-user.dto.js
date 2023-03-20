"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ninja_dto_1 = require("./create-ninja.dto");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(create_ninja_dto_1.CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map
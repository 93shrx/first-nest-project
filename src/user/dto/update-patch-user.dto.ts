import { CreateUserDto } from "./create-user.dto";
import { PartialType } from "@nestjs/mapped-types"; // this dependency allow us to use partial type
// partialType allow us to create a dto that have all the properties of another dto but optional

export class UpdatePatchUserDto extends PartialType(CreateUserDto) {
    
}
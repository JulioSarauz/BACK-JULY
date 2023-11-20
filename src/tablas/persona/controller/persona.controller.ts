import { Body, Controller, InternalServerErrorException, Post } from '@nestjs/common';
import { personaService } from '../service/persona.service';
@Controller('persona')
export class personaController {
    constructor(private readonly _personaService: personaService){}

    @Post('crear')
    async crearLog(@Body() body:any){
        try{            
            return await this._personaService.create(body);
        }catch(error){
            throw new InternalServerErrorException("error");
        }
    }



}

import { Body, Controller, InternalServerErrorException, Post } from '@nestjs/common';
import { productoService } from '../service/producto.service';
@Controller('producto')
export class productoController {
    constructor(private readonly _productoService: productoService){}

    @Post('crear')
    async crearLog(@Body() body){
        try{            
            return await this._productoService.create(body);
        }catch(error){
            throw new InternalServerErrorException("error");
        }
    }

    @Post('obtener')
    async obtener(@Body() body){
        try{            
            return await this._productoService.findAll();
        }catch(error){
            throw new InternalServerErrorException("error");
        }
    }


    @Post('obtener-contar')
    async contar(@Body() body){
        try{            
            return await this._productoService.obtener();
        }catch(error){
            throw new InternalServerErrorException("error");
        }
    }


    @Post('buscar')
    async buscar(@Body() body){
        try{            
            return await this._productoService.buscar(body);
        }catch(error){
            throw new InternalServerErrorException("error");
        }
    }
    @Post('actualizar')
    async actualizar(@Body() body){
        try{            
            return await this._productoService.actualizar(body._id, body);
        }catch(error){
            throw new InternalServerErrorException("error");
        }
    }



}

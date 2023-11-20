import { Body, Controller, InternalServerErrorException, Post } from '@nestjs/common';
import { carritoService } from '../service/carrito.service';
@Controller('carrito')
export class carritoController {
    constructor(private readonly _carritoService: carritoService){}

    @Post('crear')
    async crearLog(@Body() body:any){
        try{            
            return await this._carritoService.create(body);
        }catch(error){
            throw new InternalServerErrorException("error");
        }
    }

    @Post('obtener')
    async obtener(@Body() body:any){
        try{            
            return await this._carritoService.findAll();
        }catch(error){
            throw new InternalServerErrorException("error");
        }
    }


    @Post('obtener-contar')
    async contar(@Body() body:any){
        try{            
            return await this._carritoService.obtener();
        }catch(error){
            throw new InternalServerErrorException("error");
        }
    }

    @Post('obtener-persona-contar')
    async contarPersona(@Body() body:any){
        try{            
            return await this._carritoService.buscarProducto(body);
        }catch(error){
            throw new InternalServerErrorException("error");
        }
    }

    @Post('obtener-producto-contar')
    async contarProducto(@Body() body:any){
        try{            
            return await this._carritoService.buscarPersona(body);
        }catch(error){
            throw new InternalServerErrorException("error");
        }
    }


    @Post('buscar')
    async buscar(@Body() body:any){
        try{            
            return await this._carritoService.buscar(body);
        }catch(error){
            throw new InternalServerErrorException("error");
        }
    }
    @Post('actualizar')
    async actualizar(@Body() body:any){
        try{            
            return await this._carritoService.actualizar(body._id, body);
        }catch(error){
            throw new InternalServerErrorException("error");
        }
    }



}

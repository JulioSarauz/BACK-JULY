import { carritoModule } from "src/tablas/carrito/carrito.module";
import { logModule } from "src/tablas/logs/log.module";
import { personaModule } from "src/tablas/persona/persona.module";
import { productoModule } from "src/tablas/producto/producto.module";

export const MODULOS = [
    logModule,
    personaModule,
    productoModule,
    carritoModule
]
// File System =fs
const fs = require('fs');
const colors=require('colors');

const crearArchivo = async(base,listar=false,hasta=10) => {

    try {



        let salida = '';
        let consola = '';


        for (let i = 1; i <= hasta; i++) {
    
            salida += `${base} ${'x'} ${i} = ${i*base}\n`;

            // para que al guardar los datos en visual studio code no me salga el codigo del color
            consola += `${base} ${'x'.yellow} ${i} = ${i*base}\n`;
            
        }
        
        if(listar){

            console.log('===================='.green);
            console.log(`    Tabla del:`.red, colors.blue(base) );
            console.log('===================='.green);
            console.log(consola);

        }
        
    
        // para escribir archivos
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${ base }.txt`;
        
    } catch (err) {
        throw err;
    }


}

module.exports = {
    crearArchivo: crearArchivo
}
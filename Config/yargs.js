const argv=require('yargs')


        // Aceptar los alias puestos en la consoloa por el usuario
        .option('b',{
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        
        .option('l', {
            alias:'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
            
        }) 

        .option('h', {
            alias:'hasta',
            type: 'number',
            default: 10,
            describe: 'Este es el numero hasta donde quieres la tabla'
            
        }) 

        // Mandar un error si la base ingresada por el usuario no es un numero
        .check((argv,options)=>{
            if(isNaN(argv.base)){
                throw 'La base tiene que ser un numero'
            }
            return true;
        })

        .check((argv,options)=>{
            if(isNaN(argv.hasta)){
                throw 'El valor asignado a hasta tiene que ser un numero'
            }
            return true;
        })



        .argv;

    module.exports = argv;

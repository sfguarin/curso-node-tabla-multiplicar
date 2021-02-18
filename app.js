const { crearArchivo } = require('./helpers/multiplicar');
const argv=require('./Config/yargs');
require('colors');

console.clear();


// console.log(process.argv);

// para ver el argv
// console.log(argv);



// Estas lineas se dejaron para ver el ejemplo de poner variables en consola pero que puede presentar muchos errores
// , para eso se usa yargs
// const [, , arg3='base=5']=process.argv;
// const [,base=5]=arg3.split('=');

// const base = 8;



crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
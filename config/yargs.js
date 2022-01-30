const { number } = require('yargs');

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type:'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de mutiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Hasta que número debe multiplicar la tabla'
                })
                .check( (argv, option) => {
                    if (isNaN(argv.b)) {
                        throw 'La base debe ser un número'
                    }
                    return true;
                })
                .argv;

module.exports = argv;
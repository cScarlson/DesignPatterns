
/**
 * MONAD Pattern from Douglas Crockford
 */
function run(arg){
    console.log(arg);
};

function MONAD(){
    return function unit(value){
        var monad = {};
        monad.bind = function(func){
            return func(value);
        };
        return monad;
    };
};

// Identity Monad
var identity = MONAD();
var monad = identity('Hello Monad World!');
monad.bind(alert);
monad.bind(run);

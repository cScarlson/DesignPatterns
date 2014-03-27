
/**
 * Creates a chainable namespace that can be called
 * Obviates need for a Protagonist
 */
var $omnifarious = (function(schema){

    var fn = function f(){
        console.log('ran f!!!');
        return f;
    };

    schema.prototype = {
        w: function(w){ console.log('w'); return this; },
        x: function(x){ console.log('x'); return this; },
        y: function(y){ console.log('y'); return this; }
    };
    fn.__proto__ = Object.getPrototypeOf(new schema());

    return fn;
})(function Schema(){ console.log('created new schema', this); });

console.log(
    $omnifarious()().w().x().y()()()
);

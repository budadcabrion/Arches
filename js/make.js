var make = function(fun)
{           
    var args = Array.prototype.slice.call(arguments);
    var a = args.slice(1);
    var obj = fun.apply(null,a);    
    var o = { fun:fun, obj: obj };
    make.elements.push(o);
    return obj;
}

make.elements = [];
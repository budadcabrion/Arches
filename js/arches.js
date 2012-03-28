/*var output = {};

output.stack = [];

var element = function(t, v)
{
    var e = {type: t, value:v};
    output.stack.push(e);
    return e;
}

  */

var num = function(n)
{
    var value = 0.0 + n;
    //var e = element(num, value);
    return value;
}

num.mid = function(n1, n2)
{
    return num((n1+n2)/2.0);
}



var vec = function(x,y)
{
    var value = {x:num(x), y:num(y)};    
    //var e = element(vec, value);
    return value; 
}

vec.mid = function(v1, v2) { return { x: num.mid(v1.x, v2.x), y: num.mid(v1.y, v2.y) } }

vec.mag = function(v) { return Math.sqrt(v.x*v.x + v.y*v.y); }

vec.scale = function(v, n) { return { x: v.x/n, y: v.y/n }; }

vec.normalize = function(v) { return vec.scale(v, 1/vec.mag(v)); }

vec.add = function(v1, v2) { return { x : v2.x + v1.x, y: v2.y + v1.y }; }

vec.sub = function(v1, v2) { return { x : v2.x - v1.x, y: v2.y - v1.y }; }
    
vec.dot = function(v1, v2) { return v1.x*v2.x + v1.y*v2.y; }

vec.onto = {};
    
vec.onto.line = function(p, l)
{
    var t = vec.dot(p, l.v);
    return vec.add(l.p, vec.scale(l.v, t) );   
}

                  /*

var line = function(p, v) { return {p: p, v: v} ; }

line.points = function (p1, p2) { return { p: p1, v: vec.normalize(vec.sub(p2, p1)) }; }



var segment = function(p1, p2) { return { l: line.point(p1, p2), p1: p1, p2: p2 };}
          */

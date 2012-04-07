
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

vec.scale = function(v, n) { return { x: v.x*n, y: v.y*n }; }

vec.normalize = function(v) { return vec.scale(v, 1/vec.mag(v)); }

vec.add = function(v1, v2) { return { x : v1.x + v2.x, y: v1.y + v2.y }; }

vec.sub = function(v1, v2) { return { x : v1.x - v2.x, y: v1.y - v2.y }; }
    
vec.dot = function(v1, v2) { return v1.x*v2.x + v1.y*v2.y; }

vec.cross = function(v1, v2) { return v1.x * v2.y - v1.y * v2.x; }

vec.onto = {};
    
vec.onto.line = function(p, l)
{
    var t = vec.dot( vec.sub(p, l.p), l.v);
    return vec.add(l.p, vec.scale(l.v, t) );   
}

vec.intersect = {};

vec.intersect.lines = function(l1, l2) 
{
    var c = vec.sub(l2.p, l1.p);
    var t = vec.cross(c, l2.v) / vec.cross(l1.v, l2.v);
    return vec.add(l1.p, vec.scale(l1.v, t));            
}

vec.perp = function(v) { return {x: v.y, y: -v.x}; }
//vec.perp.clockwise = function(v) { return {x: -v.y, y: v.x}; }
//vec.perp.counterclockwise = vec.perp;


var line = function(p, v) { return {p: p, v: vec.normalize(v) } ; }

line.points = function (p1, p2) { return { p: p1, v: vec.normalize(vec.sub(p2, p1)) }; }

line.pointat = function(l, t) { return { x : l.p.x + l.v.x * t, y: l.p.y + l.v.y * t }; }

line.perp = {};

line.perp.bisector = function(p1, p2)
{
    l = {p: vec.mid(p1, p2), v: vec.perp(vec.sub(p2, p1))};
    return l;
}

var segment = function(p1, p2) { return { l: line.point(p1, p2), p1: p1, p2: p2 };}


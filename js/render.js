var render = {};
 
render.init = function(html_id)
{
    render.canvas = document.getElementById(html_id);
    render.context = render.canvas.getContext("2d");
    
}

render.clear = function()
{
    var ctx = render.context;
    // Store the current transformation matrix
    //ctx.save();
    
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1.0, 0, 0, 1.0, 0, 0);
    ctx.clearRect(0, 0, render.canvas.width, render.canvas.height);
    
    // Restore the transform
    //ctx.restore();
}

render.script = function(script)
{
    render.clear();
    eval(script);
}

render.sketch = function()
{
    render.context.fillStyle = "#aaaaaa";
}

render.solid = function()
{
    render.context.fillStyle = "#444444";
}

render.pt = function(args)
{
    var context = render.context;
    
    for (var i in arguments)
    {
        var p = arguments[i];
        context.beginPath();
        context.rect(p.x - 1, p.y - 1, 3, 3);
        context.fill();
    }
}
/*
    shapes.js
    This is where your code goes

    Write the code to create rectangle and circle classes that extend the
    Shape class defined in shape.js. Then create a couple of other subclasses that
    render different sorts of shapes using the HTML <canvas> functions.
    http://www.w3schools.com/tags/ref_canvas.asp

    You can use either the classical or the prototypal style to create your subclasses

    After you've written the code for the sublcasses, call either registerPrototypalShape()
    or registerClassicalShape() to register your new shapes with the application. See the
    app.js file for info on these functions.
 */

function rectangle(l, t, w, h, styles_map) {
    var rect = createShape(l, t, w, h, styles_map);
    
    rect.renderShape = function(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.left, this.top, this.width * 6, this.height * 12);
    }
    return rect;
} // use prototypal not classical
registerPrototypalShape('Rectangle', rectangle);


function circle(l, t, w, h, styles_map) {
    var circle = createShape(l, t, w, h, styles_map);

    circle.renderShape = function(ctx) {
        ctx.beginPath();
        ctx.arc(this.left, this.top, this.width * 6, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.borderStyle = "blue"
        ctx.fill();
        ctx.stroke();
    }
    return circle;
}
registerPrototypalShape('Circle', circle);


function text(left, top, right, width, height, stylesMap) {
    var text = createShape(left, top, width, height, stylesMap);

    text.renderShape = function (ctx) {
        var canvas = document.getElementById("shapes-canvas");
        ctx.font="35px Georgia";
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0.25","black");
        gradient.addColorStop("0.50","blue");
        gradient.addColorStop("0.75","magenta");
        gradient.addColorStop("1.0","red");
        ctx.fillStyle = gradient;
        ctx.fillText("4.0 please :D", this.left, this.top);
    }
    return text;
}
registerPrototypalShape('Text', text);

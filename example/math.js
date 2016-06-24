requirejs(['../StandarAPI/math'], function(math){
  generateGraphicSinX(1, '#0000FF', math);
  generateGraphicSinX(3, '#FF0000', math);
  generateGraphicSinX(5, '#00FF00', math);
  generateGraphicSinX(6, '#FFFF00', math);
  generateGraphicSinX(0.6, '#FF00FF', math);
  generateGraphicSinX(0.2, '#00FFFF', math);
});


function generateGraphicSinX(num, color, math) {
  var id = "sinx"+num;

  var canvas = document.createElement('canvas');

  canvas.id = id;
  canvas.width = 500;
  canvas.height = 200;

  var ctx = canvas.getContext("2d");
  var coordinates = math.graphSinX(num);
  ctx.beginPath();

  ctx.strokeStyle = color;
  ctx.lineWidth = 1;

  ctx.moveTo(250, 0);
  ctx.lineTo(250, 200);

  ctx.moveTo(0, 100);
  ctx.lineTo(500, 100);

  ctx.moveTo((coordinates[0][0]*20)+250,(coordinates[0][1]*40)+100)

  for (var i=0; i<coordinates.length; i++) {
    ctx.lineTo((coordinates[i][0]*20)+250,(coordinates[i][1]*40)+100);
  }

  ctx.stroke();

  document.body.appendChild(canvas);
}



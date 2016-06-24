requirejs(['../StandarAPI/math'], function(math){

  var canvas = document.getElementById("sinx3");
  var ctx = canvas.getContext("2d");
  var coordinates = math.graphSinX(3);
  ctx.strokeStyle = "#FF0000";
  ctx.lineWidth = 2;

  for (var i=0; i<coordinates.length; i++) {
    ctx.lineTo((coordinates[i][0]*6)+150,(coordinates[i][1]*30)+100);
  }

  ctx.stroke();


  var canvas = document.getElementById("sinx1");
  var ctx = canvas.getContext("2d");
  var coordinates = math.graphSinX(1);
  ctx.strokeStyle = "#0000FF";
  ctx.lineWidth = 2;

  for (var i=0; i<coordinates.length; i++) {
    ctx.lineTo((coordinates[i][0]*6)+150,(coordinates[i][1]*30)+100);
  }

  ctx.stroke();

});




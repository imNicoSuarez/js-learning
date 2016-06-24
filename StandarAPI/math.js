XMAX = 10;
XMIN = -10;

/*
  Method graphSinX
*/
function graphSinX(nx) {
  var values = [];

  for (var i = XMIN; i < XMAX; i += 0.01) {
    var coordenates = [];
    coordenates.push(i)
    coordenates.push(Math.sin(nx*i));

    values.push(coordenates);
  }

  return values;
}


define(['exports'], function(exports) {
  exports.graphSinX = graphSinX;
});
console.log(dataSexism);

let dataS = dataSexism.map(function(x) {
  console.log(x);
  return {
    id: x.id,
    x: x.x,
    y: x.overall,
    color: '#cecece'
  }
});

console.log(dataS);

let dataG = dataGoogle.map(function(x) {
  return {
    id: x.id,
    x: x.x,
    y: x.and,
    color: '#eace3f'
  }
});

// adjust to have data sets add up to 'sexism' count
let dataSAdjustedG = JSON.parse(JSON.stringify(dataS));
console.log(dataSAdjustedG);
for (i=0; i<dataG.length;i++) {
  dataSAdjustedG[i].y = dataSAdjustedG[i].y - dataG[i].y;
}

let googleD = dataG.concat(dataSAdjustedG);

let areaChart = new d3plus.StackedArea()
  .select("#google-sexism")
  .data(googleD)
  .groupBy("id")
  .xConfig({title: "year"})
  .yConfig({title: "number of stories"})
  .shapeConfig({
    fill: function(d) { return d.color; }
  })
  .render(function() { $(".d3plus-Legend").remove(); });

let dataF = dataFB.map(function(x) {
  return {
    id: x.id,
    x: x.x,
    y: x.and,
    color: '#282f6b'
  }
});

// adjust to have data sets add up to 'sexism' count
let dataSAdjustedFB = JSON.parse(JSON.stringify(dataS));
console.log(dataSAdjustedFB);
for (i=0; i<dataF.length;i++) {
  dataSAdjustedFB[i].y = dataSAdjustedFB[i].y - dataF[i].y;
}
let fbD = dataF.concat(dataSAdjustedFB);

let FBChart = new d3plus.StackedArea()
  .select("#facebook-sexism")
  .data(fbD)
  .groupBy("id")
  .xConfig({title: "year"})
  .yConfig({title: "number of stories"})
  .shapeConfig({
    fill: function(d) { return d.color; }
  })
  .render(function() { $(".d3plus-Legend").remove(); });

let dataT = dataTechnology.map(function(x) {
  return {
    id: x.id,
    x: x.x,
    y: x.and,
    color: '#b22200'
    // 7436
  }
});

// adjust to have data sets add up to 'sexism' count
//let dataSAdjustedTech = dataS.slice(0);
let dataSAdjustedTech = JSON.parse(JSON.stringify(dataS));
for (i=0; i<dataT.length;i++) {
  dataSAdjustedTech[i].y = dataSAdjustedTech[i].y - dataT[i].y;
}
let techD = dataT.concat(dataSAdjustedTech);

let TechChart = new d3plus.StackedArea()
  .select("#tech-sexism")
  .data(techD)
  .groupBy("id")
  .xConfig({title: "year"})
  .yConfig({title: "number of stories"})
  .shapeConfig({
    fill: function(d) { return d.color; }
  })
  .render(function() { $(".d3plus-Legend").remove(); });

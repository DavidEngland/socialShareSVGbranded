var fs = require("fs");

var sicons = JSON.parse(fs.readFileSync('./_data/simple-icons.json', 'utf8')).icons;


// console.log(sicons);

var filename = "";

for (var i = 0; i < sicons.length; i++) {
  filename = sicons[i].title.split(' ').join('').split('.').join('').split('-').join('').split('!').join('').split('+').join('plus').split('’').join('').toLowerCase();


  console.log(".sc-"+filename+" {");
  console.log("\tbackground: svg-load('./simple-icons/icons/"+filename+".svg', fill: #"+sicons[i].hex.toLowerCase()+", stroke: #fff) no-repeat center center;");
  console.log("\tbackground-size: 20px 20px;");
  console.log("\theight: 20px;");
  console.log("\twidth: 20px;");
  console.log("}\n");
}

//fs.writeFile('./_data/icons.json', JSON.stringify(filenames, null, 2) , 'utf-8');

//Refactor for ECMAScript 5.1


// let keywords = reportInput.split(',');
// let reporting = reportInput;
var reporting = "blue green blue yellow";
var keywords = ["blue", "green", "yellow"];
var match ='';

function textSearch() {
  var matchObj = {};
  keywords.forEach(word => {
    let pattern = new RegExp(word, 'ig');
    while ((match = pattern.exec(reporting))) {
      if (!matchObj[match[0]]) {
        matchObj[match[0]] = {};
        matchObj[match[0]].match = match[0];
        matchObj[match[0]].indexes = new Set();
        matchObj[match[0]].indexes.add(match.index);
        matchObj[match[0]].hitLength = match[0].length;
        matchObj[match[0]].count = matchObj[match[0]].indexes.size;
      } else {
        matchObj[match[0]].indexes.add(match.index);
        matchObj[match[0]].count = matchObj[match[0]].indexes.size;
      }
    }
  });

  // return matchObj;

//Output Keywords
  let res = keywords[0] + ' = ' + matchObj[keywords[0]].count;
  console.log('count', res);
  document.getElementById("results").innerHTML = res;
}





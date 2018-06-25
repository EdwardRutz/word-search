//Refactor for ECMAScript 5.1
console.log('main.js loaded');

let keywordsIn = document.getElementById("keywordsIn").value;
let keywords = keywordsIn.split(',');
let reporting = document.getElementById("reportingIn").value;
  console.log('reporting', reporting);
var match ='';

console.log('keywords', keywords);
console.log('reporting', reporting);

function mainEvent() {
  textSearch();
}

function textSearch() {
  console.log('Running textSearch...');

  var matchObj = {};
  keywords.forEach(word => {
    let pattern = new RegExp(word, 'ig');
    console.log('pattern', pattern);

    while ((match = pattern.exec(reporting))) {
        console.log('!matchObj[match[0]] term match returns false...', !matchObj[match[0]]);

      //If matchObj[match[0]] is false
      if (!matchObj[match[0]]) {
        matchObj[match[0]] = {};
        matchObj[match[0]].match = match[0];
        matchObj[match[0]].indexes = new Set();
        matchObj[match[0]].indexes.add(match.index);
        matchObj[match[0]].hitLength = match[0].length;
        matchObj[match[0]].count = matchObj[match[0]].indexes.size;
        console.log('matchObj[match[0]].count', matchObj[match[0]].count);
        console.log('matchObj[match[0]]', matchObj[match[0]]);

      } else {
        matchObj[match[0]].indexes.add(match.index);
        matchObj[match[0]].count = matchObj[match[0]].indexes.size;
        console.log('add term location to set...', matchObj[match[0]].indexes.add(match.index));
        console.log('add term count to set...', matchObj[match[0]].count);
      }
    }
  });

  // return matchObj;

  //Output Keywords
  var res='';
  var i;
  for (i = 0; i < keywords.length; i++) {
     res += keywords[i] + ' = ' + matchObj[keywords[i]].count + '<br>';
    }
  document.getElementById("results").innerHTML = res;
}

function resetForm() {
  document.getElementById("keywordsIn").value = "";
  document.getElementById("reportingIn").value = "";
  // document.getElementById("results").value = "";
  // document.getElementById('keywordsIn').reset();
  // document.getElementById('reportingIn').reset();
  // element.value = '';
  // isSubmitted = false;
}

function numberSearch() {

}
//Refactor for ECMAScript 5.1
console.log('main.js loaded');

let keywordsIn = document.getElementById("keywordsIn").value;
let keywords = keywordsIn.split(',');
let reporting = document.getElementById("reportingIn").value;
  console.log('reporting', reporting);
var match ='';

function mainEvent() {
  textSearch();
}

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

function numberSearch {
  
}
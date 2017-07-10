
window.onload = function() {
  document.getElementsByClassName('.btnStart').onclick = function(){
    alert('hi');
    
  }
}

function mathOp (a, b, op) {
  var res;

  if(op == "+"){
    res = a + b;
  } else if (op == "-"){
    res = a - b;
  } else if (op == "*"){
    res = a * b;
  } else if (op == "/"){
    if (b === 0) {
      res = false;
    } else {
      res = a / b;
    }
  } else {
    res = false;
  }

  return res;
}

function randomInt(min,max) {
  var length = max - min +1;
  var rand = Math.floor(Math.random()*length)+min;
  return rand;
}
function training() {
  var x, y, code, op, res, answer, good = 0; error = 0, errors = [];
  var variants = ["+", "-", "*", "/"];

  for (var i=0; i<10; i++) {
    x = randomInt(3,15);
    y = randomInt(3,15);
    code = randomInt(0,3);
    op = variants[code];
    res= mathOp(x, y, op);


      do {
        answerStr = parseInt(prompt(x + ' ' + op + ' ' +  y + ' =?'));
        answer = answerStr;
      }
      while (answerStr === "" || isNaN(answer));

    /*
    or ==>

    while(answer === "" || isNaN(answer)) {
      answer = parseInt(prompt(x + ' ' + op + ' ' +  y + ' =?'));
    }
    */

    if (res.toFixed(2) == answer.toFixed(2)) {
      good++;

      /*console.log("yes ,correct");*/

    } else {
      error++;
      errors.push('Your answer ' + answer + ' is not correct;' + ' correct answer is: ' + x + ' ' + op + ' ' +  y + ' = ' + res.toFixed(2));

     /* console.log("no, correct answer is: " + x + ' ' + op + ' ' +  y + ' = ' + res.toFixed(2));*/
    }
  }
//  document.getElementsByClassName('.good').innerHTML = good;
//  document.getElementsByClassName('.bad').innerHTML = error;

//  var divErrors = document.getElementsByClassName('.errors');
//  divErrors.innerHTML = '';
  console.log("correct answers: " + good);
  console.log("errors: " + error);

  for(i=0; i<errors.length; i++) {
    // divErrors.innerHTML += ('<p>' + errors[i] + '</p>');
    errors.push[i];
    console.log(errors[i]);
  }
}

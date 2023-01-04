const button = document.getElementsByClassName("btn");
let str = " ";

function calculate(val) {
  let display = document.getElementById("display");
  switch (val) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 0:
      str = str + val;
      console.log(str);
      display.innerHTML = str;
      break;

    case 100:
      let ans = eval(str);
      display.innerHTML = ans;
      console.log(ans);
      str = " ";
      break;

    case 50:
      str = str + "+";
      display.innerHTML = str;
      break;

    case 60:
      str = str + "-";
      display.innerHTML = str;
      break;

    case 70:
      str = str + "*";
      display.innerHTML = str;
      break;

    case 80:
      str = str + "/";
      display.innerHTML = str;
      break;

    case 200:
      str = str.slice(0, str.length - 1);
      display.innerHtml = str;
      display.innerHtml = str;
      console.log("er");
      break;

    case 300:
      str = " ";
      display.innerHTML = str;
      break;
  }
}

//let display = document.getElementById("display");

// let buttons = Array.from(document.getElementsByClassName('button'));

// buttons.map( button => {
//     button.addEventListener('click', (e) => {
//         switch(e.target.innerText){
//             case 'C':
//                 display.innerText = '';
//                 break;
//             case '=':
//                 try{
//                     display.innerText = eval(display.innerText);
//                 } catch {
//                     display.innerText = "Error"
//                 }
//                 break;
//             case '←':
//                 if (display.innerText){
//                    display.innerText = display.innerText.slice(0, -1);
//                 }
//                 break;
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     });
// });

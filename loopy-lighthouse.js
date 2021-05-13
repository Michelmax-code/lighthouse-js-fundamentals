let i = 100;
let x = "Loopy";
let y = "Lighthouse";
let z = "LoopyLighthouse";

for (let i = 100; i <= 200; i++){
  if (i % 3 === 0 && i % 4 === 0){
    console.log(z);
  } else if (i % 4 === 0){
    console.log(y);
  } else if (i % 3 === 0){
    console.log(x);
  } else {
    console.log(i);
  }
} 


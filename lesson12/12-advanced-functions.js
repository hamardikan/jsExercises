function greeting(){
   console.log("Hello!")
}

greeting();

const num = 2;

const function1 = function greeting (){
   console.log("Hello2!");
};

console.log(function1);
function1();

const object1 = {
   num: 2,
   fun: function greeting(){
      console.log("Hello3!");
   }
};

object1.fun();


function display(param){
   console.log(param)
}

display(2);

function run(param){
   param();
}
run(function () {
   console.log("hello4")

   setTimeout(function (){
      console.log("timeout");
   }, 5000)
});

// setInterval(function(){
//    console.log("interval");
// }, 3000);

const arrowFunction = () => {
   console.log("Hello!")
};

arrowFunction();

const oneParam = param => {
   console.log(param + 1);
}

oneParam(2);

const oneLine = () => 2 + 3;
console.log(oneLine());

const object2 = {
   method: () => {

   },
   method() {

   }
}

console.log(
   [1, -3, 5].filter((value, index) => 
{
   return value >= 0;
})
);
console.log(
[ 1, 2, 3].map((value, index) => {
   return 2 * value;
})
);

//oneline
console.log(
   [1,2,3].map(value => value * 2)
);
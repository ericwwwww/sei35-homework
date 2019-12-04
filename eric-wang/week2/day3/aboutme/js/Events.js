// console.log("events");
// //Define the function
// //functuon live inside variables, in JS!
// //They are 'first-class'
// const addTwo = function (num){
//
//   console.log('Inside addTwo()')
//   const result = num + 2;
//
//   return result;
// };
// //run the function
//
// const returnValue = addTwo(6);
//
// console.log( returnValue );

const sayHello = function (){
  console.log("hello world");
};

// sayHello();
//Run another function for us, run Nicely
//This function takes ANOTHER FUNCTIION as its argument!<exploding0brain.gif>
const runNicely = function (functionToRunNicely){
  console.log('Hello, Iam about to run your function for you! I hope that is to your liking, sir/madam!')

  // console.log("function is ," functionToRunNicely);

  functionToRunNicely(); //Run the fucntion that was passed in

  console.log('I hope that went well for you! It was a real pleasesure for me and have  nice day.')

};

//runNicely(sayHello);

runNicely(function(){
  console.log('screw you, runNicely')
});

const h1 = document.querySelector('h1');
console.log( h1 );
h1.addEventListener('mouseenter', function( e ){
  console.log('The h1 was mouseenter')
  console.log( e.screenX, e.screenY )
});

const ul = document.addEventListener('click',function( e ){
  console.log( e.target );
  console.log( e.screenX, e.screenY )；
});

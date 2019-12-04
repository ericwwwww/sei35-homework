console.log("hello dom")

const body = document.querySelector('body');
console.log( body );
body.style.fontFamily = "Comic Sans MS"

const nickName= document.querySelector('#nickname');
nickName.innerHTML = 'Eric';

const favorites = document.querySelector('#favorites');
favorites.innerHTML = 'Reading';

const hometown = document.querySelector('#hometown');
hometown.innerHTML = 'China';

const listItems = document.querySelectorAll('li');

for (var i = 0; i < listItems.length; i++) {
  listItems[i].className = 'listItem'
}

const bill = document.createElement ('img');

bill.src = 'http://www.fillmurray.com/500/500';

document.body.prepend(bill);


// var books = [
//   {
//     title: 'The Design of EveryDay Things',
//     author: 'Don Norman',
//     alreadyRead: false
//   },
//   {
//     title: 'The Most Human Human',
//     author: 'Brian Christian',
//     alreadyRead: true
//   }
// ];

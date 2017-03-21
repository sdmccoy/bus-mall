'use strict';

var productsArray = [];
var imgPathArray = [];
// var currentImgDisplay = []; i have this as a local
var previousImgDisplay = [];
var img1 = document.getElementById('image1');
var img2 = document.getElementById('image2');
var img3 = document.getElementById('image3');
var totalClicks = 0;
//start the constructor function to create objects
function Products(name, filePath, ID, countShown, countClicked){
  this.name = name;
  this.filePath = filePath;
  this.ID = ID;
  this.countShown = 0;
  this.countClicked = 0;
  productsArray.push(this);
  imgPathArray.push(filePath);

};

var bag = new Products('bag', 'img/bag.jpg', 'prod1');
var banana = new Products('banana', 'img/banana.jpg', 'prod2');
var bathroom = new Products('bathroom', 'img/bathroom.jpg', 'prod3');
var boots = new Products('boots', 'img/boots.jpg', 'prod4');
var breakfast = new Products('breakfast', 'img/breakfast.jpg', 'prod5');
var bubblegum = new Products('bubblegum', 'img/bubblegum.jpg', 'prod6');
var chair = new Products('chair', 'img/chair.jpg', 'prod7');
var cthulhu = new Products('cthulhu', 'img/cthulhu.jpg', 'prod8');
var dogDuck = new Products('dog-duck', 'img/dog-duck.jpg', 'prod9');
var dragon = new Products('dragon', 'img/dragon.jpg', 'prod10');
var pen = new Products('pen', 'img/pen.jpg', 'prod11');
var petSweep = new Products('pet-sweep', 'img/pet-sweep.jpg', 'prod12');
var scissors = new Products('scissors', 'img/scissors.jpg', 'prod13');
var shark = new Products('shark', 'img/shark.jpg', 'prod14');
var sweep = new Products('sweep', 'img/sweep.png', 'prod15');
var tauntaun = new Products('tauntaun', 'img/tauntaun.jpg', 'prod16');
var unicorn = new Products('unicorn', 'img/unicorn.jpg', 'prod17');
var usb = new Products('usb', 'img/usb.gif', 'prod18');
var waterCan = new Products('water-can', 'img/water-can.jpg', 'prod19');
var wineGlass = new Products('wine-glass', 'img/wine-glass.jpg', 'prod20');

//start the random image generation function
//This needs an else statement so if it does match it will run again.
// function randomImage() {
//   while (currentImgDisplay < 3) {
//     var randomFilePath = imgPathArray[Math.floor(Math.random() * imgPathArray.length)];
//     var randomImg1 = document.getElementById('image1');
//     // console.log(randomImg1);
//     randomImg1.setAttribute('src', randomFilePath);
//     currentImgDisplay.push(randomFilePath);
//     var randomFilePath2 = imgPathArray[Math.floor(Math.random() * imgPathArray.length)];
//     if (currentImgDisplay[0] != randomFilePath2) {
//       var randomImg2 = document.getElementById('image2');
//       // console.log(randomImg2);
//       randomImg2.setAttribute('src', randomFilePath2);
//       currentImgDisplay.push(randomFilePath2);
//       var randomFilePath3 = imgPathArray[Math.floor(Math.random() * imgPathArray.length)];
//       if (randomFilePath3 != currentImgDisplay[0] && randomFilePath3 != currentImgDisplay[1]) {
//         var randomImg3 = document.getElementById('image3');
//         // console.log(randomImg3);
//         randomImg3.setAttribute('src', randomFilePath3);
//         currentImgDisplay.push(randomFilePath3);
//       }
//     }
//   }
// };
// randomImage();
function randomNumGen() {
  return Math.floor(Math.random() * imgPathArray.length);
};

// Trying to condense and scale the above function.

function randomImgGen() {
  var currentImgDisplay = [];
  while (currentImgDisplay < 3){
    var randomNum = randomNumGen();
    if (!currentImgDisplay.includes(randomNum) == !previousImgDisplay.includes(randomNum)) {
      currentImgDisplay.push(randomNum);
    }
  }
  var prod1 = productsArray[currentImgDisplay[0]];//assigns the random number to the object index
  var prod2 = productsArray[currentImgDisplay[1]];
  var prod3 = productsArray[currentImgDisplay[2]];
  img1.src = prod1.filePath;//takes the object and picks the filePath
  img2.src = prod2.filePath;
  img3.src = prod3.filePath;
  img1.alt = productsArray[0];
  img2.alt = productsArray[1];
  img3.alt = productsArray[2];
  previousImgDisplay = currentImgDisplay;
  prod1 = countShown++;
  prod2 = countShown++;
  prod3 = countShown++;
};
randomImgGen();
totalClicks++; //adding clicks to total everytime this runs
productsArray[this.alt].clickCount++;

function handleClick (){
  randomImgGen();
  countClicked++;
  var productsArrayIdx = productsArray[this.alt];
  if (totalClicks < 25) {
    img1.removeEventListener('click');
    img2.removeEventListener('click');
    img3.removeEventListener('click');
    resultsList();
  }
}
img1.addEventListener('click', handleClick);
img2.addEventListener('click', handleClick);
img3.addEventListener('click', handleClick);

//Showing the user a list of the results
function resultsList (){
  var results = document.getElementById('results');
  var ul = document.createElement('ul');
  results.appendChild(ul);
  for (var i = 0; i < productsArray.length; i++) {
    var li = document.createElement('li');
    var msg = 'You selected ' + productsArray[i].name + ' ' + productsArray[i].countClicked + ' times.';
    li.innerText = msg;
    ul.appendChild(ul);
  }
};

'use strict';

var productsArray = [];
var imgPathArray = [];
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

function randomImage1() {
  for (var i = 0; i < imgPathArray.length; i++) {
    var randomFilePath = imgPathArray[Math.floor(Math.random() * imgPathArray.length)];
    var randomImg1 = document.getElementById('image1');
    console.log(randomImg1);
    randomImg1.setAttribute('src', randomFilePath);
  }

}
randomImage1();

function randomImage2() {
  for (var i = 0; i < imgPathArray.length; i++) {
    var randomFilePath = imgPathArray[Math.floor(Math.random() * imgPathArray.length)];
    var randomImg2 = document.getElementById('image2');
    console.log(randomImg2);
    randomImg2.setAttribute('src', randomFilePath);
  }

}
randomImage2();

function randomImage3() {
  for (var i = 0; i < imgPathArray.length; i++) {
    var randomFilePath = imgPathArray[Math.floor(Math.random() * imgPathArray.length)];
    var randomImg3 = document.getElementById('image3');
    console.log(randomImg3);
    randomImg3.setAttribute('src', randomFilePath);
  }

}
randomImage3();

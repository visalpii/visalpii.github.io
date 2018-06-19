const cards = document.querySelectorAll('.card');
const parentOfCards = document.querySelector('.card-row');
const cardOne = document.querySelector('#project1-card');
const cardTwo = document.querySelector('#project2-card');
const cardThree= document.querySelector('#project3-card');;
const cardFour= document.querySelector('#project4-card');
const cardOneImage = document.querySelector('#project1-card img');
const cardTwoImage = document.querySelector('#project2-card img');
const cardThreeImage = document.querySelector('#project3-card img');
const cardFourImage = document.querySelector('#project4-card img');


// --- EVENT HANDLERS ---

cardOne.addEventListener('mouseover', function(){
	cardOneImage.style.filter = 'grayscale(0%)';
});

cardOne.addEventListener('mouseout', function(){
	cardOneImage.style.filter = 'grayscale(100%)';
});

cardTwo.addEventListener('mouseover', function(){
	cardTwoImage.style.filter = 'grayscale(0%)';
});

cardTwo.addEventListener('mouseout', function(){
	cardTwoImage.style.filter = 'grayscale(100%)';
});

cardThree.addEventListener('mouseover', function(){
	cardThreeImage.style.filter = 'grayscale(0%)';
});

cardThree.addEventListener('mouseout', function(){
	cardThreeImage.style.filter = 'grayscale(100%)';
});

// --- /EVENT HANDLERS ---
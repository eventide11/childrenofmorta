let clicked = document.querySelectorAll('main div.clicked');
let description = document.querySelectorAll('main div.description');
let close = document.querySelectorAll('main div p.close');
let wallpaper = document.querySelector('main div.wallpaper');
let gma = document.querySelector('main div.gma');
let gma2 = document.querySelector('main div.gma2');
let uncle = document.querySelector('main div.uncle');
let uncle2 = document.querySelector('main div.uncle2');
let dad = document.querySelector('main div.dad');
let dad2 = document.querySelector('main div.dad2');
let mom = document.querySelector('main div.mom');
let mom2 = document.querySelector('main div.mom2');
let sonYoungest = document.querySelector('main div.sonYoungest');
let sonYoungest2 = document.querySelector('main div.sonYoungest2');
let daughterOldest = document.querySelector('main div.daughterOldest');
let daughterOldest2 = document.querySelector('main div.daughterOldest2');
let daughterYoungest = document.querySelector('main div.daughterYoungest');
let daughterYoungest2 = document.querySelector('main div.daughterYoungest2');


function clicky() {
	for (let i = 0; i < clicked.length; i++) {
		clicked[i].addEventListener('click', function() {
			if (clicked[i].classList.contains('gma')) {
				gma2.classList.remove('invisible');
				uncle2.classList.add('invisible');
				dad2.classList.add('invisible');
				mom2.classList.add('invisible');
				sonYoungest2.classList.add('invisible');
				daughterOldest2.classList.add('invisible');
				daughterYoungest2.classList.add('invisible');
			}
			else if (clicked[i].classList.contains('uncle')) {
				gma2.classList.add('invisible');
				uncle2.classList.remove('invisible');
				dad2.classList.add('invisible');
				mom2.classList.add('invisible');
				sonYoungest2.classList.add('invisible');
				daughterOldest2.classList.add('invisible');
				daughterYoungest2.classList.add('invisible');
			}
			else if (clicked[i].classList.contains('dad')) {
				gma2.classList.add('invisible');
				uncle2.classList.add('invisible');
				dad2.classList.remove('invisible');
				mom2.classList.add('invisible');
				sonYoungest2.classList.add('invisible');
				daughterOldest2.classList.add('invisible');
				daughterYoungest2.classList.add('invisible');
			}
			else if (clicked[i].classList.contains('mom')) {
				gma2.classList.add('invisible');
				uncle2.classList.add('invisible');
				dad2.classList.add('invisible');
				mom2.classList.remove('invisible');
				sonYoungest2.classList.add('invisible');
				daughterOldest2.classList.add('invisible');
				daughterYoungest2.classList.add('invisible');
			}
			else if (clicked[i].classList.contains('sonYoungest')) {
				gma2.classList.add('invisible');
				uncle2.classList.add('invisible');
				dad2.classList.add('invisible');
				mom2.classList.add('invisible');
				sonYoungest2.classList.remove('invisible');
				daughterOldest2.classList.add('invisible');
				daughterYoungest2.classList.add('invisible');
			}
			else if (clicked[i].classList.contains('daughterOldest')) {
				gma2.classList.add('invisible');
				uncle2.classList.add('invisible');
				dad2.classList.add('invisible');
				mom2.classList.add('invisible');
				sonYoungest2.classList.add('invisible');
				daughterOldest2.classList.remove('invisible');
				daughterYoungest2.classList.add('invisible');
			}
			else if (clicked[i].classList.contains('daughterYoungest')) {
				gma2.classList.add('invisible');
				uncle2.classList.add('invisible');
				dad2.classList.add('invisible');
				mom2.classList.add('invisible');
				sonYoungest2.classList.add('invisible');
				daughterOldest2.classList.add('invisible');
				daughterYoungest2.classList.remove('invisible');
			}
		});
	}
}


function exit() {
	for (let i = 0; i < close.length; i++) {
		close[i].addEventListener('click', function() {
			description[i].classList.add('invisible');
		});
	}
}


function playAudio() {
	for (let i = 0; i < clicked.length; i++) {
		clicked[i].addEventListener('click', function() {
			// alert (this.getAttribute('class'))
			switch (this.getAttribute('class')) {
				case 'gma clicked':
					let scorpion = new Audio('scorpion.mp3');
					scorpion.play();
					break;
				case 'uncle clicked':
					let matrix = new Audio('matrix.mp3');
					matrix.play();
					break;
				case 'dad clicked':
					let negan = new Audio('negan.mp3');
					negan.play();
					break;
				case 'mom clicked':
					let joker = new Audio('joker_whySoSerious.mp3');
					joker.play();
					break;
				case 'sonYoungest clicked':
					let lightsaber = new Audio('lightsaber.mp3');
					lightsaber.play();
					break;
				case 'daughterOldest clicked':
					let jill = new Audio('jill_jillSandwich.mp3');
					jill.play();
					break;
				case 'daughterYoungest clicked':
					let bond = new Audio('007.mp3');
					bond.play();
					break;
				default:
					console.log('Belle Delphine is my waifu!');
			}
		});
	}
}


clicky();
exit();
playAudio();
window.onload = function () {

	function writeTextLogo() {
		const signatureInnerText = document.querySelector('.signature__innerText');
		const divLink = document.querySelector('.link');
		const signatureBorder = document.querySelector('.signature__border')
		let textWriten = false;
		let borderSignature = false;
		divLink.addEventListener('mouseover', () => {
			if (!textWriten) {
				textWriten = true
				innerTextToDivSignature()
				return textWriten
			}

		})
		const textForDivLink = `< front-end developer />`;

		const textArr = [];
		for (let i = 0; i < textForDivLink.length; i++) {
			textArr.push(textForDivLink[i])
		}
		function innerTextToDivSignature() {
			signatureBorderActive()
			let letter = 0;
			let writeText = setInterval(() => {
				signatureInnerText.innerHTML += textArr[letter]
				letter++
				if (letter > textArr.length - 1) {
					clearInterval(writeText)
				}
			}, 100)
		}

		function signatureBorderActive() {
			const divSignature = document.querySelector('.signature')
			divSignature.style.textShadow = '0px 0px 2px #dc3545'
			borderSignature = true;
			let borderActive = setInterval(() => {
				signatureBorder.classList.toggle('transparent')
			}, 500)

		}
	};

	function setTime() {
		const hour = new Date().getHours();
		const minutes = new Date().getMinutes();
		let seconds = new Date().getSeconds();
		// ----------------------------------------------------------------
		const spanHour = document.querySelector('.hours');
		const spanDot = document.querySelector('.dot');
		const spanMinutes = document.querySelector('.minutes');
		const oclockMoon = document.querySelector('.fa-cloud-moon');
		const oclockSun = document.querySelector('.fa-cloud-sun');

		spanHour.innerHTML = hour;
		// if(minutes<10){
		// 	spanMinutes.innerHTML = `0${minutes }`;
		// }
		// else{
		// 	spanMinutes.innerHTML = minutes;
		// }
		minutes < 10 ? spanMinutes.innerHTML = `0${minutes }` : spanMinutes.innerHTML = minutes;
		console.log(seconds)

		let dotTimer = setInterval(() => {
			spanDot.classList.toggle('transparent')
		}, 700)

		if(hour>7){
			oclockMoon.style.display = 'none';
			oclockSun.style.display = 'block';

		}
		else if(hour>19){ 
			oclockMoon.style.display = 'block';
			oclockSun.style.display = 'none';
		}

		let time = setInterval(() => {
			++seconds
			if(seconds>=60){
				seconds = 0;
				minutes < 10 ? spanMinutes.innerHTML = `0${minutes+1 }` : spanMinutes.innerHTML = minutes+1;
			}
		},1000)
		
	}
	function writeDate(){
		const date = document.querySelector('.date')
		const objMonth = {
			0:'January',
			1:'February', 
			2:'March', 
			3:'April', 
			4:'May',
			5:'June',
			6:'July',
			7:'August',
			8:'September',
			9:'October',
			10:'November',
			11:'December'
		}
		const objDays = {
			1:'Monday',
			2:'Tuesday ',
			3:'Wednesday ', 
			4:'Thursday ',
			5:'Friday ',
			6:'Saturday',
			7:'Sunday'
		};
		const year = new Date().getFullYear()
		const monthNumber = new Date().getMonth();
		const dayNumber = new Date().getDay();
		const dateNow = new Date().getDate()
		const monthNow = objMonth[monthNumber]
		const dayNow = objDays[dayNumber]
		date.innerHTML = monthNow + ' ' + dayNow + ' ' + dateNow + ' ' + year
		console.log(dateNow)
	}


	writeDate()
	setTime()
	writeTextLogo()
}
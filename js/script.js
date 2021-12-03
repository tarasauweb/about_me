window.onload = function () {
	function tranparentDotClock(){
		const spanDot = document.querySelector('.dot');
		let dotTimer = setInterval(() => {
			spanDot.classList.toggle('transparent')
		}, 700)
	}
	
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
		const spanMinutes = document.querySelector('.minutes');
		const oclockMoon = document.querySelector('.fa-cloud-moon');
		const oclockSun = document.querySelector('.fa-cloud-sun');
		spanHour.innerHTML = hour;
		minutes < 10 ? spanMinutes.innerHTML = `0${minutes }` : spanMinutes.innerHTML = minutes;
		if(hour>7&& hour<19){
			oclockMoon.style.display = 'none';
			oclockSun.style.display = 'block';

		}
		else if(hour>19){ 
			oclockMoon.style.display = 'block';
			oclockSun.style.display = 'none';
		}
		
		let time = ()=> setInterval(() => {
			++seconds
			if(seconds>=60){
				seconds = 0;
				minutes < 10 ? spanMinutes.innerHTML = `0${minutes+1 }` : spanMinutes.innerHTML = minutes+1;
			}
		},1000)
		let updateTimeIfFocusFalse = setInterval(function () {
			if(!document.hasFocus()){
				
			}
		},180000)
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
	}
	tranparentDotClock()
	writeDate()
	setTime()
	writeTextLogo()

	function anonimus() {
		let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		const boxHacker = document.querySelector('.hacker')
		let arr = []
	
		function randomNumber(number) {
			let num = Math.floor(Math.random() * number)
	
			return num
		}
	
		function randomWord(array) {
			let word = array[randomNumber(26)]
			// console.log(word)
			return word
		}
	
		for (let i = 0; i <= 1000; i++) {
			let box = document.createElement('div');
			box.classList.add('box');
			boxHacker.insertAdjacentElement('afterbegin', box)
			box.setAttribute('id', [i])
			box.textContent = randomWord(arr_EN)
			arr.push(box)
		}
	
	
		function randWord(arr) {
			setInterval(() =>{
				arr.map( item =>{
					item.textContent = randomWord(arr_EN)
				})
			},100)
		}
		randWord(arr)
	
		function newAddClass(start, end, arrayElem) {
			let newArr = arrayElem.slice(start, end)
			newArr.map(item => {
				item.classList.add('transparent')
				
			})
		}
		// eyes
		newAddClass(857, 863, arr)
		newAddClass(876, 879, arr)
		newAddClass(850, 855, arr)
		newAddClass(868, 871, arr)
	
		newAddClass(889, 890, arr)
		newAddClass(904, 907, arr)
		newAddClass(919, 923, arr)
		newAddClass(935, 937, arr)
	
		newAddClass(908, 910, arr)
		newAddClass(925, 928, arr)
		newAddClass(943, 947, arr)
		
		// head
		newAddClass(999, 1001, arr)
		newAddClass(983, 986, arr)
		newAddClass(967, 968, arr)
	
		newAddClass(840, 841, arr)
		newAddClass(823, 824, arr)
		newAddClass(806, 807, arr)
		newAddClass(789, 790, arr)
		newAddClass(772, 773, arr)
		newAddClass(755, 756, arr)
		newAddClass(738, 739, arr)
		newAddClass(721, 722, arr)
		newAddClass(790, 791, arr)
		newAddClass(757, 758, arr)
	
	
		newAddClass(700, 707, arr)
		newAddClass(724, 725, arr)
		newAddClass(716, 717, arr)
		newAddClass(742, 743, arr)
		newAddClass(760, 762, arr)
		newAddClass(796, 797, arr)
		newAddClass(745, 746, arr)
		newAddClass(779, 780, arr)
		newAddClass(732, 735, arr)
		newAddClass(745, 750, arr)
		newAddClass(764, 765, arr)
		newAddClass(780, 781, arr)
		newAddClass(728, 729, arr)
		newAddClass(729, 730, arr)
		newAddClass(712, 713, arr)
		// newAddClass(696, 697, arr)
		newAddClass(695, 696, arr)
		newAddClass(679, 680, arr)
		newAddClass(662, 663, arr)
		// newAddClass(663, 664, arr)
		newAddClass(646, 647, arr)
		newAddClass(630, 631, arr)
		newAddClass(614, 616, arr)
		// newAddClass(61, 615, arr)
		newAddClass(598, 600, arr)
		newAddClass(603, 605, arr)
		newAddClass(693, 694, arr)
		newAddClass(711, 712, arr)
		newAddClass(676, 677, arr)
		newAddClass(658, 659, arr)
		newAddClass(640, 641, arr)
		newAddClass(621, 623, arr)
		newAddClass(685, 687, arr)
		newAddClass(665, 666, arr)
	}
	anonimus()


	const btnMenu = document.querySelector('.btnMenu')
	let activeMenu = false;
	btnMenu.addEventListener('click' , ()=>{
		const btnMenu__lineTop = document.querySelector('.btnMenu__lineTop')
		const btnMenu__lineCenter = document.querySelector('.btnMenu__lineCenter')
		const btnMenu__lineBottom = document.querySelector('.btnMenu__lineBottom')
		
		if(!activeMenu){
			btnMenu__lineTop.classList.add('activeTop')
			btnMenu__lineCenter.classList.add('activeCenter')
			btnMenu__lineBottom.classList.add('activeBottom')
			activeMenu = true
			return activeMenu
		}
		else{
			btnMenu__lineTop.classList.remove('activeTop')
			btnMenu__lineCenter.classList.remove('activeCenter')
			btnMenu__lineBottom.classList.remove('activeBottom')
			activeMenu = false
			return activeMenu
		}
	})
}
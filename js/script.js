window.onload = function (){
	const signatureInnerText = document.querySelector('.signature__innerText');
	const divLink = document.querySelector('.link');
	const signatureBorder = document.querySelector('.signature__border')
	let textWriten = false ; 
	let borderSignature = false;
	divLink.addEventListener('mouseover' , ()=>{
		if(!textWriten){
			textWriten = true
			innerTextToDivSignature ()
			return textWriten
		}
		
	})
	const textForDivLink = `< bad coding />`;

	const textArr = [];
	for(let i = 0 ; i<textForDivLink.length ; i++){
		textArr.push(textForDivLink[i])
	}
	function innerTextToDivSignature (){
		signatureBorderActive ()
		let letter = 0;
		let writeText = setInterval(()=>{
			signatureInnerText.innerHTML += textArr[letter]
			letter++
			if(letter>textArr.length-1){
				clearInterval(writeText)
			}
		},100)
	}

	function signatureBorderActive (){
		const divSignature = document.querySelector('.signature')
		divSignature.style.textShadow = '0px 0px 8px #dc3545'
		borderSignature = true;
		let borderActive = setInterval(()=>{
           signatureBorder.classList.toggle('transparent')
		},500)
		
	}
	

	function setTime (){
		const hour = new Date().getHours();
		const minutes = new Date().getMinutes();
		const seconds = new Date().getSeconds();
		const spanHour = document.querySelector('.hours');
		const spanDot = document.querySelector('.dot');
		const spanMinutes = document.querySelector('.minutes')

		spanHour.innerHTML = hour;
		spanMinutes.innerHTML = minutes;
		console.log(seconds)

		let dotTimer = setInterval(()=>{
			spanDot.classList.toggle('transparent')
		},700)
	}
	
	setTime ()
}
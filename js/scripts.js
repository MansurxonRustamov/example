const btnInp = document.querySelector(".valBtn")
	minInp = document.querySelector(".min")
	maxInp = document.querySelector(".max")
	wrapResult = document.querySelector(".r-c")



function resultWindow() {
	let winResult = document.createElement("div")
		cardResult = document.createElement("div")
		scrollRes = document.createElement("div")
		resh1 = document.createElement("h1")
		spanbtn = document.createElement("span")
		xh1 = document.createElement("h1")
		ol = document.createElement("ol")
	winResult.classList.add("result")
	cardResult.classList.add("card-r")
	scrollRes.classList.add('scroll')
	resh1.classList.add("resh")
	spanbtn.classList.add("closeBtn")
	xh1.innerHTML = "X"
	resh1.innerHTML = `Your Result`
	ol.classList.add("r-r")

	spanbtn.appendChild(xh1)
	scrollRes.appendChild(resh1)
	scrollRes.appendChild(spanbtn)
	cardResult.appendChild(scrollRes)
	cardResult.appendChild(ol)
	winResult.appendChild(cardResult)
	document.querySelector(".r-c").appendChild(winResult)

	function getRandomNumber(min, max) {
  		return Math.floor(Math.random() *(max - min + 1) + min);
	}
	let result = getRandomNumber(minInp.value, maxInp.value)


	function answerWindow() {
		let li = document.createElement("li")
		li.classList.add("r-n")
		ol.appendChild(li)
		li.innerHTML = result
		li.type="none"
	}

	function closeWindow() {
		winResult.remove()
	}

	spanbtn.addEventListener("click", closeWindow)
	answerWindow()

	console.log(document.querySelector(".card-r").clientWidth)

}	


const OutResult = ()=>{
	resultWindow()

}


btnInp.addEventListener("click",OutResult)
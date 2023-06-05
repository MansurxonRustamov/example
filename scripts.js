document.addEventListener("DOMContentLoaded", ()=>{
	let minInp=document.querySelector(".min")
		maxInp=document.querySelector(".max")
		valBtn=document.querySelector(".valBtn")
		count =document.querySelector(".count")


		k=0
		text=[]
		i=0
	valBtn.addEventListener("click",()=>{
		function ran(min, max) {
			let a= Math.floor(Math.random()*(max-min)+min)
				///while
				
				////while end

				let result=document.createElement("div")
					cardR=document.createElement("div")
					scroll=document.createElement("div")
					hR=document.createElement("h1")
					hX=document.createElement("h1")
					oL=document.createElement("ol")
					close=document.createElement("span")
					rC=document.querySelector(".r-c")

				hX.innerHTML="X"
				hR.innerHTML="Your Result"
				result.classList.add("result")
				cardR.classList.add("card-r")
				scroll.classList.add("scroll")
				hR.classList.add("center")
				close.classList.add("closeBtn")
				oL.classList.add("r-r")

				close.appendChild(hX)
				scroll.appendChild(close)
				scroll.appendChild(hR)
				cardR.appendChild(scroll)
				cardR.appendChild(oL)
				result.appendChild(cardR)
				rC.appendChild(result)

				let closeBtn=document.querySelectorAll(".closeBtn")
					r=document.querySelectorAll(".result")
					Ol=document.querySelectorAll(".r-r")

				closeBtn.forEach(function(item) {
					item.addEventListener("click",()=>{
					r.forEach(function(item, i){
						r[i].classList.add("hidden")
					})
							
				})
				})

				if(count.value==""||count.value==1){
					let li=document.createElement('li')
					oL.appendChild(li)
					li.classList.add("r-n")
					li.innerHTML=`${a}`
				}else if(count.value>1){
					// while(i < count.value){
					// 	let b=a+=(Math.floor(max/min))
					// 	text.push(b)

					// 	let li=document.createElement('li')
					// 	li.classList.add("r-n")
					// 	li.innerHTML=`${text[i]}`


					// 	// oL.forEach(function(item,i) {
					// 	// 	item.appendChild(li)
					// 	// 	console.log(item)
						
					// 	// })
					// 	oL.appendChild(li)
					// 	i++;
					// 	console.log(text)
					// }
					let a= Math.floor(Math.random()*(max-min)+min)
					console.log("s" * 5)

				}
				
								
			}
			ran(minInp.value, maxInp.value) 
		
		})
	
})
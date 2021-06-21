
document.addEventListener('DOMContentLoaded', function() {

 // getGet my objects
 let input = document.getElementById('add'); 
 let btn = document.getElementById('btn');
 let list = document.getElementById('list');   


 //add element on button click function

  btn.addEventListener("click", () =>{
	let text = input.value;
	if (text === "") {
		alert('you must write something');
	}
	else{
	 	let li = document.createElement('li');
	 	li.innerHTML = text;
	 	list.insertBefore(li, list.childNodes[0]);
	 	
	 	input.value = ''; 
	}
	 	
	 })

  //mark the tasks done

  list.addEventListener('click', (e) =>{ 	
 	if(e.target.tagName == 'LI'){
 		e.target.classList.toggle('checked');
 	}
 })

})




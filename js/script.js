console.log("script loaded");
var form1 = document.getElementById("form-1");

form1.addEventListener("submit", function(event){
	event.preventDefault();
	console.log(event);
	console.log("submit");

});


var img1 = document.getElementById("image1");
var img2 = document.getElementById("image2");
var img3 = document.getElementById("image3");
var img4 = document.getElementById("image4");
var img5 = document.getElementById("image5");
var img6 = document.getElementById("image6");
var img7 = document.getElementById("image7");
var img8 = document.getElementById("image8");

//firstImage.onclick = firstImage.classList.add("card-img-topEdit");

//function that modify the class of the image

img1.addEventListener("click",function(){
	img1.classList.add("card-img-topEdit");
});
img2.addEventListener("click",function(){
	img2.classList.add("card-img-topEdit");
});
img3.addEventListener("click",function(){
	img3.classList.add("card-img-topEdit");
});
img4.addEventListener("click",function(){
	img4.classList.add("card-img-topEdit");
});
img5.addEventListener("click",function(){
	img5.classList.add("card-img-topEdit");
});
img6.addEventListener("click",function(){
	img6.classList.add("card-img-topEdit");
});
img7.addEventListener("click",function(){
	img7.classList.add("card-img-topEdit");
});
img8.addEventListener("click",function(){
	img8.classList.add("card-img-topEdit");
});

//capture name

form1.addEventListener("submit", function(event){

	/*
	var name = form1.elements["name"].value;
	var lastName = form1.elements["lastName"].value;
	var phoneNumber = form1.elements["phoneNumber"].value;
	var address = form1.elements["address"].value;
	var size = form1.elements["size"].value;
	var email = form1.elements["email"].value;
	var password = form1.elements["password"].value;
	var verifyEmail = form1.elements["verifyEmail"].value;
	var verifyPassword = form1.elements["verifyPassword"].value;
	var bio = form1.elements["bio"].value;
	let birthDate = new Date();
	birthDate = form1.elements["birthDate"].value;

	event.preventDefault();
	console.log(event);
	console.log(name 
		+ " " + lastName  
		+ " " + phoneNumber  
		+ " " + address  
		+ " " + size 
		+ " " + birthDate 
		+ " " + email  
		+ " " + password 
		+ " " + verifyEmail 
		+ " " + verifyPassword 
		+ " " + bio);

	document.write("Los datos que ingres?? son:" + name 
		+ " " + lastName  
		+ " " + phoneNumber  
		+ " " + address  
		+ " " + size 
		+ " " + birthDate 
		+ " " + email  
		+ " " + password 
		+ " " + verifyEmail 
		+ " " + verifyPassword 
		+ " " + bio);
	document.getElementById("data_result").value = (name 
		+ " " + lastName  
		+ " " + phoneNumber  
		+ " " + address  
		+ " " + size 
		+ " " + birthDate 
		+ " " + email  
		+ " " + password 
		+ " " + verifyEmail 
		+ " " + verifyPassword 
		+ " " + bio);

		*/

		/*
		var data = Object.fromEntries(new FormData(event.target).entries());
		var result = document.getElementById("data_result");
		var container = {
			data.name, data.lastName, data.birthDate
		};
		console.log(container);

		result.innerHTML = data.name 
			+ " " + data.lastName
			+ " " + data.birthDate;

		*/

		/*

		result.innerHTML = data.name
			+ " " + data.lastName
			+ " " + data.phoneNumber
			+ " " + data.address
			+ " " + data.size
			+ " " + data.birthDate
			+ " " + data.email
			+ " " + data.password
			+ " " + data.verifyEmail
			+ " " + data.verifyPassword
			+ " " + data.bio;
		*/

});

var count = 1;

form1.addEventListener("submit", function(event){
	var container = [];
	var data = Object.fromEntries(new FormData(event.target).entries());
	var result = document.getElementById("data_result");
	var result_localStorage = document.getElementById("data_storage");
	var name = data.name;
	var lastName = data.lastName;
	let birthDate = new Date();
	birthDate = data.birthDate;
	container.push(name, lastName, birthDate);

	localStorage.setItem(count, container);
	count++;
	var aux = "";

	for(i = 0; i < localStorage.length; i++){

		var data = localStorage.getItem(localStorage.key(i));
		aux += "Value: " + data + "\n"; 
	}
	console.log(aux);
	
	//var container = [data.name, data.lastName, data.birthDate];
	console.log(container);
	result_localStorage.innerHTML = aux;
	result.innerHTML = name 
			+ " " + lastName
			+ " " + birthDate;
	
});
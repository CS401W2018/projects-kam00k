document.getElementById("myForm").addEventListener("submit", function(event){
	
	event.preventDefault();
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const age = document.getElementById('age').value;
	const email = document.getElementById('email').value;

    const formData = {
        firstName: firstName,
        lastName: lastName,
        age: age,
		email: email
    }
	
	if (!firstName || !lastName){
		alert("Please enter your full name")
		return;
	}
	
	if (!email){
		alert("Please enter your email address")
		return;
	}
	
	if (!age || age < 18){
		alert("You must be 18 to post here")
		return;
	}
    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;characterset=UTF-8");
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            document.getElementById("legend").innerHTML = response.message;
        }
        else if(xhr.readyState === 4){
            alert('Error submitting form.');
        }
    };
    
    xhr.send(JSON.stringify(formData));
    console.log(formData);
})
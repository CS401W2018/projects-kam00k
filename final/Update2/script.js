document.getElementById("myForm").addEventListener("submit", function(event){
	
	event.preventDefault();
    const firstName = document.getElementById('fname').value;
	const email = document.getElementById('email').value;

    const formData = {
        firstName: firstName,
		email: email
    }
	
	if (!firstName){
		alert("Please enter your name or internet handle")
		return;
	}
	
	if (!email){
		alert("Please enter your email address")
		return;
	}
    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;characterset=UTF-8");
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
        }
        else if(xhr.readyState === 4){
            alert('Error submitting form.');
        }
    };
    
    xhr.send(JSON.stringify(formData));
    console.log(formData);
})
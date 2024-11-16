document.getElementById("myForm").addEventListener("submit", function(event){

    event.preventDefault();
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const age = document.getElementById('age').value;

    const formData = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
    
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;characterset=UTF-8");
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = "";
        }
        else if(xhr.readyState === 4){
            alert('Error submitting form.');
        }
    };
    
    xhr.send(JSON.stringify(formData));
    console.log(formData);
});
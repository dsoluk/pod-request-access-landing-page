function validateEmail() {
    let x = document.getElementById("email").value;
    let resultObj = document.getElementById("result");
    let successObj = document.getElementById("request-access");
    
    //format the request button
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x))
    {
        successObj.innerHTML = "Thanks!"
        return (true)
    }
        resultObj.style.display = "block";
        
        return (false)
}
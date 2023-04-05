// index.html javascript function

document.getElementById("btn-submit").addEventListener("click", function(){
    const inputMail = document.getElementById("input-mail");
    const inputMailValue = inputMail.value;

    const inputPass = document.getElementById("input-pass");
    const inputPassValue = inputPass.value;

    if(inputMailValue === "hnazmul748@gmail.com" && inputPassValue === "bangladesh"){
        window.location.href = "bank.html";
    }
    else{
        alert("fill up the input field please......");
    }
});





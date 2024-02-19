// import { ShowData } from "Some/resumePage.js";

class showMain{

    verify(){
        // const temp2=new ShowData();
        
        const email= document.getElementById("userName").value;
            const pass= document.getElementById("password").value;
            if(email=="sh@greatlearning.com" && pass=="Asdfgh@123"){
                // window.location.assign("./resume.html");
                document.getElementById("form1").action="Some/resume.html";
            }
            else{
                alert("Wrong User Name or Password");
            }
            
        
    }
}

const temp= new showMain();

document.getElementById("userName").addEventListener('input', function(){
    localStorage.setItem("Login", this.value);
})
document.getElementById("password").addEventListener("input", function(){
    localStorage.setItem("Pass", this.value);
})

const num=document.getElementById("loginBtn"); 
num.addEventListener("click", ()=>temp.verify());
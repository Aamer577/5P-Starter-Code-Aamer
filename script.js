let button= document.querySelector("button");
button.onclick = function() {
    let Q1= document.querySelector(".question1").value;
    let Q2= document.querySelector(".question2").value;
     let message = document.querySelector(".result").value;
     console.log(Q1);
     console.log(Q2);
     if (Q1<=5 && Q2=== "night"){
         document.querySelector(".result").innerHTML="volleyball"+Q1;
    } else if (Q1>5 && Q2==="morning"){
document.querySelector(".result").innerHTML="you are  soccer";
     } else if (Q1>5 && Q2==="night"){
document.querySelector(".result").innerHTML="you are  football";
    }  else if (Q1<=5&& Q2==="morning"){
document.querySelector(".result").innerHTML="you are  basketball";
    }  
 
};
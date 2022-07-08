outer_container1=document.getElementById("outer-container1");
outer_container2=document.getElementById("outer-container2");
loan_btn=document.getElementById("loan-btn");
amount=document.getElementById("amount");


 function toggle(){
    if(outer_container1.style.display!="block" && (amount.value>0 && amount.value<=100000)){
        outer_container2.style.display="none";
        outer_container1.style.display="block";
    }
    if(outer_container2.style.display!="block" && (amount.value>100000 && amount.value<=500000)){
        outer_container1.style.display='none';
        outer_container2.style.display="block";
    }
 }
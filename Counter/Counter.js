//without use of single class for multiple buttons
let count=0;
const ibtn=document.getElementById("ibtn");
const rbtn=document.getElementById("rbtn");
const dbtn=document.getElementById("dbtn");
const value=document.querySelector("#setnumber");

ibtn.addEventListener("click", function(){
    count+=1;
    //console.log(count);
    getcolor(count);
    value.innerHTML=count;
});
rbtn.addEventListener("click", function(){
    count=0;
    //console.log(count);
    getcolor(count);
    value.innerHTML=count;
});
dbtn.addEventListener("click", function(){
    count-=1;
    //console.log(count);
    getcolor(count);
    value.innerHTML=count;
});

function getcolor(count){
    if(count>0){
        value.style.color="green";
    }
    else if(count==0){
        value.style.color="black";
    }
    else{
        value.style.color="red";
    }
}

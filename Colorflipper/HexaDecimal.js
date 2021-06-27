const colors=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn=document.getElementById("btn");
const x=document.querySelector(".color");

btn.addEventListener("click", function(){
    let hex="#";
    for(var i=0;i<6;i++){
        var randomnumber=getRandomInt(colors.length);
        hex+=colors[randomnumber];
    }
    //console.log(randomnumber);
    document.body.style.backgroundColor=hex;
    x.textContent = hex;
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
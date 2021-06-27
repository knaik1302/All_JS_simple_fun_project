const colors=["red", "green", "blue"];
const btn=document.getElementById("btn");
const x=document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomnumber=getRandomInt(colors.length);
    //console.log(randomnumber);
    document.body.style.backgroundColor=colors[randomnumber];
    x.textContent = colors[randomnumber];
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
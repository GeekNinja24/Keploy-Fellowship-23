let a = document.getElementById("btn")
let setup = document.querySelector(".setup")
let punchline = document.querySelector(".punchline")


a.onclick=function(){
    fetch(`http://localhost:5500/list_fact`)
    .then((response) => response.json())
    .then((data) => {
        const random = Math.floor(Math.random()*10);
        const setupcontent = data[random].fact;
         //console.log(setupcontent);
         //console.log(punchlinecontent);
        setup.innerHTML= setupcontent;
    })
}
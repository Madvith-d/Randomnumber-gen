document.getElementById("generate-btn").onclick=function(){
    let min = document.getElementById("min-value").value;
    console.log(min);
    let max = document.getElementById("max-value").value;
    let number = Math.floor(Math.random()*(max-min+1)+min);
    document.getElementById("result-number").textContent = number;
}
document.getElementById("generate-btn").onclick=function(){
   let min = parseInt(document.getElementById("min-value").value);
    
    let max = parseInt(document.getElementById("max-value").value);
    if(min>max){
        document.getElementById("result-number").textContent = "you nigga dont know the difference between minimum amd maximum";

    }
    else{
    
      let number = Math.floor(Math.random()*(max-min+1)+min);
      document.getElementById("result-number").textContent = number;
    }
}

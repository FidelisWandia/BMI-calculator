const btn = document.getElementById("btn")
const weightInp = document.getElementById("weight")
const heightInp = document.getElementById("height")
const result = document.getElementById("result")

btn.addEventListener("click", function(){
    if(weightInp.value =="" || heightInp.value == ""){
        alert("Please enter your weight and height")
    }else{
        let heightInMtr = (heightInp.value/100)^2
        let weight = weightInp.value
        let bmi = weight/heightInMtr
        result.textContent = bmi
        weightInp.value = ""
        heightInp.value = ""
    }
})




















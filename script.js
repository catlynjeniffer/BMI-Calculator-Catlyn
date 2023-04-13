const body = document.body
document.querySelector('form').addEventListener('submit', handleEvent)
let result = document.getElementById("myDiv")
let bimNumber = document.createElement('p')
let statuss = document.createElement('p')

function handleEvent(e){
    e.preventDefault()
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value
    calcBMI (height, weight)
}

function calcBMI(height, weight){
    const bmi = (weight / Math.pow((height/100),2)).toFixed(2)
    if(bmi != 'NaN'){
        let nutritionStatus
        if(bmi <18.5){
            nutritionStatus = 'Underweight'
        }
        else if(bmi >= 18.5 & bmi <= 24.9){
            nutritionStatus = 'Normal Weight'
        }
        else if (bmi >=25 & bmi <= 29.9){
            nutritionStatus = 'Overweight'
        }
        else{
            nutritionStatus = 'Obese'
        }
        showResult (bmi, nutritionStatus)
    }
}

function showResult(bmi, nutritionStatus){
    bimNumber.textContent = `BMI : ${bmi}`
    statuss.textContent = nutritionStatus
    
    result.appendChild(bimNumber)
    result.appendChild(statuss)

}
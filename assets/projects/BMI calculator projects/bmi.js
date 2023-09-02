let button = document.querySelector('.btn');
button.addEventListener("click" , (e)=>{
    e.preventDefault();
    const weight = parseInt(document.querySelector('.weight').value);
    const height = parseInt(document.querySelector('.height').value);
    const namePerson = document.querySelector('.name').value
    const result = document.querySelector('.result');
    const message = document.querySelector('.if');

    if(weight === '' || weight < 0 || isNaN(weight)) {
        result.textContent = "Please " + namePerson + " Enter the valid weight"
    }
    else if(height === '' ||height < 0 || isNaN(height)) {
        result.textContent = "Please " + namePerson + " Enter the valid weight"
    }
    else{
        const Bmi = (weight / ((height * height) / 10000)).toFixed(1);
        result.innerHTML  = `<span> Bmi Result is : ${Bmi} </span>`

        if(Bmi < 18.5){
            message.textContent = namePerson + " you are underweight"
        }
        else if(Bmi >= 18.5 && Bmi <24.9 ){
            message.textContent = namePerson + " you are Normal"

        }
        else if(Bmi > 25 && Bmi <29.9 ){
            message.textContent = namePerson + " you are Overweight"

        }
        else{
            message.textContent = namePerson + " Extreme obesity"

        }

    }
})
console.log(button);
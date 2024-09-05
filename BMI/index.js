const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const bmi = weight /(Math.pow(height, 2)/10000) .toFixed(3);

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height ${height}`;

    }else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid weight ${weight}`;

    }else  {
       
        if (bmi < 18.5) {
            results.innerHTML = `Your BMI is ${bmi}. You are underweight.`
            } else if (bmi >= 18.5 && bmi < 25) {
                results.innerHTML = `Your BMI is ${bmi}. You are normal weight.`
                } else if (bmi >= 25 && bmi < 30) {
                    results.innerHTML = `Your BMI is ${bmi}. You are overweight.`
                    } else {
                        results.innerHTML = `Your BMI is ${bmi}. You are obese.`

                    }


        // results.innerHTML = `<span>${bmi}</span>`
    }
        
    
});



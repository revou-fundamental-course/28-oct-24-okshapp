document.addEventListener("DOMContentLoaded", function() {
    //Submit Button function and get Element by ID
    const calculateBtn = document.querySelector('button[type="button"]');
    const resultElement = document.getElementById("result-bmi");
    const resultBreakdownElement = document.getElementById("result-breakdown");

    calculateBtn.addEventListener("click", function() {
        
        // Get user input
        const weight = parseFloat(document.getElementById("body-weight").value);
        const height = parseFloat(document.getElementById("body-height").value) / 100;

        // Validasi number input
        if (!weight || !height) {
            resultBreakdownElement.textContent = "Please enter valid weight and height values.";
            resultElement.textContent = "";
            return;
        }

        // Variable untuk rumus perhitungan BMI
        const bmi = weight / (height * height);
        resultElement.textContent = bmi.toFixed(1); // Pembulatan satu desimal untuk hasil BMI

        // Scoring BMI dan breakdown
        let breakdown;
        if (bmi < 18.5) {
            breakdown = "Underweight: Your BMI indicates that you are below the ideal weight range. Consider consulting a healthcare professional for personalized advice.";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            breakdown = "Ideal: Congratulations! Your BMI is within the ideal range. Maintaining a healthy weight supports overall wellness.";
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            breakdown = "Overweight: Your BMI suggests you are above the ideal weight range. Consider lifestyle changes to support a healthier weight.";
        } else {
            breakdown = "Obese: Your BMI indicates a higher-than-ideal weight range. Consider consulting a healthcare professional for guidance on achieving a healthier weight.";
        }

        // Display hasil dari breakdown
        resultBreakdownElement.textContent = breakdown;
    });
});
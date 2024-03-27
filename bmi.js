function calc() {
    var w = parseFloat(document.getElementById("weight").value);
    var h = parseFloat(document.getElementById("height").value);

    // Check for valid input
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
        alert("Invalid input. Please enter valid weight and height.");
        return; // Exit the function if input is invalid
    }

    // Calculate BMI
    var c = Math.floor(w / (h * h));

    var result;

    // Determine BMI category
    if (c < 18.5) {
        result = "You are underweight.";
    } else if (c >= 18.5 && c <= 24.9) {
        result = "Normal Weight.";
    } else if (c >= 25 && c <= 29.9) {
        result = "You are overweight.";
    } else if (c >= 30 && c <= 34.9) {
        result = "Obesity class-I";
    } else if (c >= 35 && c <= 39.9) {
        result = "Obesity class-II";
    } else {
        result = "Obesity class-III";
    }

    // Update report element
    var reportElement = document.getElementById("report");
    reportElement.innerHTML = `BMI report: Measured value is ${c}. ${result}`;
}

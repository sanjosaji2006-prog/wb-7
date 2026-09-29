function calculate() {

    // Get values from the form
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let operation = document.getElementById("operation").value;

    let result;

    // Check whether numbers were entered
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML =
            "Please enter both numbers.";
        return;
    }

    // Perform calculation
    if (operation === "add") {
        result = num1 + num2;
    }

    else if (operation === "subtract") {
        result = num1 - num2;
    }

    else if (operation === "multiply") {
        result = num1 * num2;
    }

    else if (operation === "divide") {

        if (num2 === 0) {
            document.getElementById("result").innerHTML =
                "Cannot divide by zero.";
            return;
        }

        result = num1 / num2;
    }

    // Display result
    document.getElementById("result").innerHTML = result;
}


function clearResult() {
    document.getElementById("result").innerHTML = "0";
}

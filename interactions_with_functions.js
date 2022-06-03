const createFunction = function (newFunction) {
    if (typeof newFunction === "string") {
        return {
            newFunction,
            integrate (start, end, precision) {
                let x;
                let rectangleHeight = eval(newFunction);
                let integration = 0;
                for (let i = start; i <= end; i += precision) {
                    x = i;
                    rectangleHeight = eval(newFunction)
                    rectangleHeight = rectangleHeight < 0 ? rectangleHeight * -1 : rectangleHeight
                    integration += ((rectangleHeight)*(precision))
                }
                return integration;
            }
        }
    }
    else {
        console.log("You need to pass a function in the form of a string!");
    }
}

// EXAMPLES // 

// Method integrate(start, end, precision)  

/*
The smaller the number you put in the "precision" parameter, the longer the program execution time, 
but the more accurate the integral result will be.
*/

const secondDegreeEquation = createFunction("x*x + 2"); // The dependent term can only be "x"
console.log("Integral of " + secondDegreeEquation.newFunction + ": " + secondDegreeEquation.integrate(0, 2, 0.001)); // Integral from 0 to 2

const threeDegreeEquation = createFunction("(Math.pow(x,3)) + 10*x - 4"); // The dependent term can only be "x"
console.log("Integral of " + threeDegreeEquation.newFunction + ": " + threeDegreeEquation.integrate(5, 20, 0.001)); // Integral from 5 to 20
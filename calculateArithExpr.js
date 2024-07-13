/**
 * 2.	Write a function that takes a string input representing a simple arithmetic expression (only addition and subtraction) and returns the result.
 * 
 * @param {string} expression 
 */

function calculateArithExpr(expression) {

    // Removes spaces 
    const cleanedExpression = expression.replace(/\s/g, '');

    // Split the expression into terms
    const terms = cleanedExpression.split(/([+-])/);

    // Initialize the result with the first term
    let result = parseFloat(terms[0]);

    // Process the remaining terms
    for (let i = 1; i < terms.length; i += 2) {
        const operator = terms[i];
        const operand = parseFloat(terms[i + 1]);

        if (operator === '+') result += operand;
        else if (operator === '-') result -= operand;
    }

    return result;
}

const expr = "5 + 3 - 2";

console.log(calculateArithExpr(expr));


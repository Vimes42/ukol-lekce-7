// úkol č.1

const salary = (wage, hours, days) => {
    return wage * hours * days
}

const taxed = (grossWage, tax) => {
    return Math.round(grossWage * (tax + tax / 100)) + " CZK"
}

const wage = 300
const hours = 8
const days = 20
const tax = 15
const grossWage = salary(wage, hours, days)
const taxedWage = taxed(grossWage, tax)


document.body.innerHTML = `
    <p> Wage per hour: ${wage} CZK </p>
    <p> Hours per day: ${hours} h </p>
    <p> Days per month: ${days} days </p>
    <p> Tax: ${tax} % </p>
    <p> Gross wage before taxation: ${grossWage} </p>
    <p> Taxed wage: ${taxedWage} </p>
`

// úkol č.2
const calculate = (number1, operation, number2) => {
    if (operation === "+") {
        return number1 + number2
    } else if (operation === "-") {
        return number1 - number2
    } else if (operation === "*" ) {
        return number1 * number2
    } else if (operation ==="/") {
        return number1 / number2
    } else {
        return "wrong input"
    }
}

const addition = calculate(2, "+", 3)
const subtraction = calculate(2, "-", 3)
const multiplication = calculate(2, "*", 3)
const division = calculate(2, "/", 3)

document.body.innerHTML += `
    <p> 2 + 3 = ${addition} </p>
    <p> 2 - 3 = ${subtraction} </p>
    <p> 2 * 3 = ${multiplication} </p>
    <p> 2 / 3 = ${division} </p>
`

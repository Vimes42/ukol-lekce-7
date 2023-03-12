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
const grossWage = salary()
const taxedWage = taxed()


document.body.innerHTML = `
    <p> Wage per hour: ${wage} CZK </p>
    <p> Hours per day: ${hours} </p>
    <p> Day per month: ${days} </p>
    <p> Tax: ${tax} % </p>
    <p> Gross wage before taxation: ${grossWage} </p>
    <p> Taxed wage: ${taxedWage} </p>
`

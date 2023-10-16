const percentage = document.querySelectorAll('.percent')

percentage.forEach((item) => {
    item.parentElement.addEventListener('click', run)
    // entire button will be selected

    function run() {
        const billInput = document.getElementById('bill')
        const bill = billInput.value
        const commission = Number(item.textContent) / 100

        const peopleInput = document.getElementById('people')
        const people = peopleInput.value

        const tipAmount = document.getElementById('tipAmount')
        const totalAmount = document.getElementById('totalAmount')

        // Validation
        if (bill > 0 && people > 0) {
            tipAmount.textContent = `$${((bill * commission) / people).toFixed(2)}`

            totalAmount.textContent = `$${((bill * commission) / people + (bill / people)).toFixed(2)}`
        } else {
            billInput.style.borderWidth = '2px'
            billInput.style.borderStyle = 'solid'
            billInput.style.borderColor = '#f18181'

            peopleInput.style.borderWidth = '2px'
            peopleInput.style.borderStyle = 'solid'
            peopleInput.style.borderColor = '#f18181'

            const errorMessages = document.querySelectorAll('.errorMessage')
            errorMessages.forEach((item) => {
                item.style.display = 'block'
            })

            tipAmount.textContent = '$0.00'
            totalAmount.textContent = '$0.00'
        }
    }

})

/*Custom Input*/
const billInput = document.getElementById("bill");
const customInput = document.getElementById("custom");
const peopleInput = document.getElementById("people");
const tipAmount = document.getElementById("tipAmount");
const totalAmount = document.getElementById("totalAmount");

// Function to calculate the tip
function calculateTip() {
    // Get the input values
    const billAmount = parseFloat(billInput.value);
    const customTipPercentage = parseFloat(customInput.value);
    const numberOfPeople = parseInt(peopleInput.value);

    // Calculate the tip and total amount
    tipAmount.textContent = `$${((billAmount * (customTipPercentage / 100)) / numberOfPeople).toFixed(2)}`;
    totalAmount.textContent = `$${(((billAmount * (customTipPercentage / 100)) / numberOfPeople) + (billAmount / numberOfPeople)).toFixed(2)}`

}

// Add event listeners to input fields
billInput.addEventListener("input", calculateTip);
customInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);

// Add an event listener to the "Calculate" button to trigger the calculation
const calculateButton = document.querySelector("input[type='submit']");
calculateButton.addEventListener("click", calculateTip);

// Refresh Page
const resetButton = document.querySelector("input[type='submit']")
resetButton.addEventListener('click', refresh)

function refresh() {
    location.reload()
}

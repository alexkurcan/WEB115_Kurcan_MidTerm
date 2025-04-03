const button = document.getElementById("Button1");
const space = document.getElementById("space");

button.addEventListener('click', function(){
    let loanAmount = parseFloat(prompt("Please enter your loan amount (without commas)"));
    let initialDownPayment = parseFloat(prompt("Please enter the amount of your down payment"));
    let termYears = parseInt(prompt("Please enter the loan term in years (either 30 or 15)"));
    let interestRate = 0.0575;
    
    if (isNaN(loanAmount) || isNaN(initialDownPayment) || isNaN(termYears) || (termYears !== 15 && termYears !== 30)) {
        alert("Invalid input. Please enter numeric values and a valid loan term (15 or 30 years).");
        return;
    }
    
    let loanBalance = loanAmount - initialDownPayment;
    let monthlyInterestRate = interestRate / 12;
    let totalMonths = termYears * 12;
    
    let monthlyPayment = (loanBalance * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalMonths));
    
    space.innerHTML = "";

    function createParagraph(text) {
        let paragraph = document.createElement('p');
        paragraph.textContent = text;
        paragraph.classList.add('month-result');
        space.appendChild(paragraph);
    }
    
    createParagraph("Mortgage Term in Years: " + termYears);
    createParagraph("Loan Amount: $" + loanAmount.toFixed(2));
    createParagraph("Down Payment: $" + initialDownPayment.toFixed(2));
    createParagraph("Monthly Mortgage Payment: $" + monthlyPayment.toFixed(2));

    let remainingBalance = loanBalance;
    let totalInterestPaid = 0;
    
    let table = document.createElement("table");
    table.border = "1";
    let headerRow = table.insertRow();
    headerRow.innerHTML = "<th>Month</th><th>Payment</th><th>Principal</th><th>Interest</th><th>Remaining Balance</th>";
    
    for (let i = 1; i <= totalMonths; i++) {
        let interestPayment = remainingBalance * monthlyInterestRate;
        let principalPayment = monthlyPayment - interestPayment;
        totalInterestPaid += interestPayment;
        remainingBalance -= principalPayment;
        if (remainingBalance < 0) remainingBalance = 0;

        let row = table.insertRow();
        row.innerHTML = `<td>${i}</td><td>$${monthlyPayment.toFixed(2)}</td><td>$${principalPayment.toFixed(2)}</td><td>$${interestPayment.toFixed(2)}</td><td>$${remainingBalance.toFixed(2)}</td>`;

        if (remainingBalance <= 0) {
            break;
        }
    }

    space.appendChild(table);

    createParagraph("Total Interest Paid: $" + totalInterestPaid.toFixed(2));
    createParagraph("Total Amount Paid Over Loan Term: $" + (loanBalance + totalInterestPaid).toFixed(2));
});
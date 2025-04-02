const button = document.getElementById("Button1");
const space = document.getElementById("space");

button.addEventListener('click', function(){
    let loanAmount = prompt("Please enter your loan amount (without commas)");
    let intialDownPayment = prompt("Please enter the amount of your down payment");
    let termYears = prompt("Please enter the loan term in years (either 30 or 15)");
    let interestRate = 0.0575
    paragraphtermYears = document.createElement('p');
    paragraphtermYears.textcontent = "Moragage term in years: " + termYears;
    paragraphloanAmount = document.createElement('p');
    paragraphloanAmount.textcontent = "Loan Amount: " + loanAmount;
    paragraphintialDownPayment = document.createElement('p');
    paragraphintialDownPayment.textcontent = "Down Payment: " + ((intialDownPayment/100)*loanAmount);
    space.appendChild(loanAmount);
    space.appendChild(intialDownPayment);
    space.appendChild(loanTermYears);
    space.appendChild(monthlyPayment);
    space.appendChild(totalInterest);
    space.appendChild(morgargeTotalAmt);
    monthlyPayment = (((interestRate/12)*loanAmount)/(1-(1+(interestRate/12)**(termYears*-12)))).toFixed(2); 
    monthlyPayment = monthlyPayment.toFixed(2);
    paragraphmonthlyPayment = document.createElement('p');
    paragraphmonthlyPayment.textcontent = "Monthly Morgarge Payment: " + monthlyPayment;
    totalInterest = (monthlyPayment*termYears*12)-loanAmount;
    paragraphtotalInterest = document.createElement('p');
    paragraphtotalInterest.textcontent = "Total Interest Amount: " + totalInterest;
    morgargeTotalAmt = loanAmount + totalInterest;
    paragraphmorgargeTotalAmt = document.createElement('p');
    paragraphmorgargeTotalAmt.textcontent = "Total Mortgage Amount: " + morgargeTotalAmt;
    for(let i = 0; i < (termYears*12); i++){
        loanBalenceMonthly = morgargeTotalAmt-(monthlyPayment)
        paragraphMonth = document.createElement('p')
        paragraphMonth.textcontent = "Month " + (i + 1) + " " + loanBalenceMonthly
        space.appendChild(paragraphMonth)
    }
})
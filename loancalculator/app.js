// listen 
document.getElementById('loan-form').addEventListener('submit',function(e){
    document.getElementById('results').style.display='none';
    document.getElementById('loading').style.display='block';

    setTimeout(calculateResults,2000);
    e.preventDefault();
});

function calculateResults(){
    // alert('working');
    // ui variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
  
    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);
  
    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value= (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

        
    // Show results
    document.getElementById('results').style.display = 'block';

    // Hide loader
    document.getElementById('loading').style.display = 'none';


    }else{
        showError('Check your numbers please');
    }


    // e.preventDefault();
}


// error message function
function showError(error){
    // alert(error);

    
    // Show results
    document.getElementById('results').style.display = 'none';

    // Hide loader
    document.getElementById('loading').style.display = 'none';

    // create div
    const errorDiv=document.createElement("div");

    
    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // add class
    errorDiv.className="alert alert-danger";

    // append text node
    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    setTimeout(clearError,3000);

}

function clearError(){
    document.querySelector(".alert-danger").remove();
}


const budgetForm = document.getElementById ('budget-form');
// console.log(budgetForm, 'budgetForm');
const budgetInput = document.getElementById ('budget-input');
// console.log (budgetInput, "budgetInput");
const budgetFeedback = document.querySelector ('.budget-feedback');
// console.log (budgetFeedback,'budgetFeedback');
const budgetAmount = document.getElementById ('budget-amount');
// console.log(budgetAmount, 'budgetAmount');
const expenseForm = document.getElementById ('expense-form');
// console.log(expenseForm, 'expenseForm');
const expenseInput = document.getElementById ('expense-input')
// console.log (expenseInput, 'expenseInput');
const amountInput = document.getElementById ('amount-input');
// console.log (amountInput, 'amountInput');
const expenseFeedback = document.querySelector ('.expense-feedback');
// console.log(expenseFeedback, 'expenseFeedback');
const expenseList = document.getElementById ('expense-list');
// console.log (expenseList, 'expenseList');
const expenseAmount = document.getElementById ('expense-amount');
// console.log(expenseAmount, 'expenseAmount');
const balanceAmount = document.getElementById ('balance-amount');
// console.log(balanceAmount, 'balanceAmount');


let budgetValue = 0;
let expenseValue = 0;
let balanceValue = 0;

budgetForm.addEventListener('submit', function (event){
    event.preventDefault ();
    budgetValue = parseInt(budgetInput.value);
    if(isNaN(budgetValue), budgetValue === 0 ){
        budgetFeedback.style.display = 'block';
        budgetFeedback.innerHTML= 'please enter a valid amount'; 
    } else{
        budgetAmount.textContent = budgetValue;
        budgetInput.value = "";
        showBalance ();
    }
})



expenseForm.addEventListener ('submit', function(event){
    event.preventDefault();
    const expenseTitle = expenseInput.value;
    const expenseAmountValue = parseInt(amountInput.value);
    if(isNaN(expenseAmountValue), expenseAmountValue === 0 ){
        expenseFeedback.style.display= 'block';
        expenseFeedback.innerHTML= 'please enter a valid expense';
    } else{
        expenseInput.value = '';
    amountInput.value = '';
    let expenseItem = document.createElement('div');
    expenseItem.classList.add('expense');
    expenseItem.innerHTML = `
      <div class="expense-item d-flex justify-content-between align-items-baseline">
        <h6 class="expense-title mb-0 text-uppercase list-item">${expenseTitle}</h6>
        <h5 class="expense-amount mb-0 list-item">$ ${expenseAmountValue}</h5>
        <div class="expense-icons list-item">
          <a href="#" class="delete-icon">
            <i class="fas fa-trash"></i>
          </a>
        </div>
      </div>
    `;
    expenseList.appendChild(expenseItem);
    expenseValue += expenseAmountValue;
    showBalance();
    }
})



expenseList.addEventListener('click', function (e) {
  if (e.target.classList = document.querySelector ('.delete-icon')) {
    const expenseItem = e.target.closest('.expense');
    const expenseAmountValue = parseInt(expenseItem.querySelector('.expense-amount').textContent.slice(1));
    expenseValue -= expenseAmountValue;
    expenseItem.remove();
    showBalance();
  }
});




function showBalance() {
    balanceValue = budgetValue - expenseValue;
    expenseAmount.textContent = expenseValue;
    balanceAmount.textContent = balanceValue;
    if (balanceValue < 0) {
      balanceAmount.classList.add('negative');
    } else {
      balanceAmount.classList.remove('negative');
    }
  }

  
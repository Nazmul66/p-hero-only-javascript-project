// select all dom
const buttons = document.querySelectorAll('.btn');
const selectedPlayer = document.getElementById('selected');

// Button click and selected player update
function addPlayer(playerName) {
    console.log(playerName)
    const li = document.createElement('li');
    li.innerText = playerName;
    selectedPlayer.appendChild(li);
}

for (const button of buttons) {
    button.addEventListener('click', (e) => {
        if (selectedPlayer.children.length <= 4) {
            button.classList.add('disabled');
            addPlayer(button.parentNode.children[0].innerText);
        } else {
            button.classList.remove('disabled');
            addPlayer(button.parentNode.children[0].innerText)
            alert('5 Played already Selected');
            return;
        }
    })
}

// A common function for getInput value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    inputField.value = "";
    return inputFieldValue
};

function getValueOfElement(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}



// Budgets add event listeners
document.getElementById('calculate_budget').addEventListener('click', function() {
    const inputField = document.getElementById('per_player_budget');
    if(inputField.value === "" || inputField.value < 0){
        inputField.value = "";
       alert("please set values $ negative number not concern");
    }
    else{
        const perPlayerBudget = getInputValue('per_player_budget');
        let totalPlayerExpense = perPlayerBudget * 5;
        getValueOfElement('player_expense', totalPlayerExpense);
    }
})

document.getElementById('calculate_total_budget').addEventListener('click', function() {
    const perPlayerBudget = document.getElementById('player_expense');
    const playerTotalBudget = parseFloat(perPlayerBudget.innerText)

    const inputField1 = document.getElementById('manager_budget');
    const inputField2 = document.getElementById('coach_budget');
   if(inputField1.value === "" || inputField1.value < 0 || inputField2.value === "" || inputField2.value < 0){
    inputField1.value = "";
    inputField2.value = "";
    alert("please set values $ negative number not concern");
   }
   else{
    const managerBudget = getInputValue('manager_budget');
    const coachBudget = getInputValue('coach_budget');

    let totalExpense = playerTotalBudget + parseFloat(managerBudget) + parseFloat(coachBudget);
    getValueOfElement('player_total_expense', totalExpense)
   }
})
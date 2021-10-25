// HW3: on<event> = "Action(event) ---> event Object (.target) -> .value"
const ActionOne = (e) => {
    alert(e.target.value)
}

const ActionTwo = (e) => {
    alert(e.target.value)
}

const ActionThree = (e) => {
    alert(e.key)
}

inputAmount(inputMoney, 'enter amount ...', 'ActionThree');
selectList(inputList, 'ActionOne');
selectList(outputList, 'ActionTwo');

  
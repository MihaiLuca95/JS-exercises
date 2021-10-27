const ActionOne = (e) => {
    let c_in   = e.target.value;
    let c_out  = outputList.firstElementChild.value;
    let amount = parseFloat(inputMoney.firstElementChild.value);

    let result = convert(c_in, c_out, amount, data.rates);
    displayResult(display, result);
}
////////////////////////////////////////////////
const ActionTwo = (e) => {
    let c_in   = inputList.firstElementChild.value;
    let c_out  = e.target.value;
    let amount = parseFloat(inputMoney.firstElementChild.value);

    let result = convert(c_in, c_out, amount, data.rates);
    displayResult(display, result);
}
/////////////////////////////////////////////////
const ActionThree = (e) => {
    let c_in   = inputList.firstElementChild.value;
    let c_out  = outputList.firstElementChild.value;
    let amount = parseFloat(e.target.value);

    let result = convert(c_in, c_out, amount, data.rates);
    displayResult(display, result);

    //HW: format the output --> 1,100,456.00
}
/////////////////////////////////////////////////
const convert = (c_in, c_out, amount, rates) => {
    let k_c_in  = rates[c_in];
    let k_c_out = rates[c_out];

    let k_c = k_c_in / k_c_out;
    let result = amount / k_c;
    return result.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

//////////////////////////////////////////////////////////
inputAmount(inputMoney, 'enter amount ...', 'ActionThree');
selectList(inputList, 'ActionOne');
selectList(outputList, 'ActionTwo');
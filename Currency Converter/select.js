//HM1: data.rates ----> filter ----> selectList
const activeCurrencies = ['EUR', 'USD', 'MDL', 'RON']
let usedRates = Object.keys(data.rates).filter(key => activeCurrencies.includes(key));

const selectList = (root, cbName) => {
    let html = `<select onchange = "${cbName}(event)">`
    // HM2: rewrite code -> .forEach() or another variante
    
    usedRates.forEach(i => {
        html += `<option>${i}</option>`
    })
    // for(let i = 0; i < usedRates.length; i++) {
    //     let code = usedRates[i];
    //     html += `<option>${code}</option>`
    // }

    html += `</select>`;

    root.innerHTML = html;
}
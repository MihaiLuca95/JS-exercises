class Button {
    constructor(n, text, type, action) {
        this.n      = n
        this.text   = text
        this.type   = type
        this.action = action
    }
    
    render(root) {
        root.innerHTML += `<button id="button_${this.n}" class ="${this.type}" onclick ="${this.action}()">${this.text}</button>`
    }
}

function okAction() {
    alert("You've accepted")
}

function cancelAction() {
    alert("You've canceled")
}

let button = new Button(1, 'OK', 'success', 'okAction')
button.render(actions)
let button1 = new Button(2, 'Cancel', 'danger', 'cancelAction')
button1.render(actions)




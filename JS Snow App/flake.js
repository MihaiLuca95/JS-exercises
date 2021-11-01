class Flake {  

    constructor(n, left, top, color, size, speed, wind) {
        this.n     = n
        this.left  = left
        this.top   = top
        this.color = color
        this.size  = size
        this.speed = speed
        this.wind  = wind
        console.info(`FLAKE ${this.n}: APPEARED`)
    }

    // Falling phase
    fall(cw, ch, cb) {
        this.timerId = setInterval(() => {
            this.top += this.speed

            if(this.wind > this.n) {
                this.left+= this.speed
            } 
            //console.log(`FLAKE ${this.n}: FALL`, this)

            // update the rendered
            this.update()

            if(this.top >= ch || this.left >= cw) {
                this.disappear(cb)
            }
        }, 20)
    }

    // DISAPPEAR
    disappear(cb) {
        clearInterval(this.timerId)
        //console.log(`FLAKE ${this.n}: DISAPPEARED`, this)
        window[`flake__${this.n}`].style.display = `none`
        cb()

    }

    update() {
        // SEARCH THE div of the current
        window[`flake__${this.n}`].style.top = `${this.top}px`
        window[`flake__${this.n}`].style.left = `${this.left}px`
    }

    // PREZENTATION
    render(root) {
        root.innerHTML += `<div id="flake__${this.n}" class="flake" 
                               style = "left: ${this.left}px;
                                        top: ${this.top}px; 
                                        background: ${this.color};
                                        transform: scale(${this.size})">
                            ${this.n}</div>`
    }
    
}
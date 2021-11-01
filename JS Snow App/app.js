// SETTINGS
const containerW = 800
const containerH = 700

let count = 1
// initial WAVE 
setInterval(() => {
    if(count < 80) {
        addAnotherFlake()   
    }
}, randDelay(10))


const addAnotherFlake = () => {
    count++
    let scale = randFloat(1.7)
    let f = new Flake(count, randCoord(0, containerW), 0, getRandomColor(), scale, scale, randWind(count+50));
    f.render(scene)
    f.fall(containerW, containerH, addAnotherFlake)
}
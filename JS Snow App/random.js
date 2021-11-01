const randCoord = (min, max) => Math.floor(min + (max - min) * Math.random())
const randDelay = (delay) => Math.floor(delay * Math.random())
const randFloat = (value) => value * Math.random()
const randWind  = (wind) => Math.floor(wind * Math.random())
const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

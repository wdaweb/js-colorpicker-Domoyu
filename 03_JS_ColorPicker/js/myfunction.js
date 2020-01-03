var redChange = document.getElementById('redRange')
var greenChange = document.getElementById('greenRange')
var blueChange = document.getElementById('blueRange')
var hexColorCode = document.getElementById('hexColor')

function rgbToHex() {
  let redValue = Number(redChange.value).toString(16)
  let greenValue = Number(greenChange.value).toString(16)
  let blueValue = Number(blueChange.value).toString(16)
  return hexColorCode.innerHTML = `#${redValue.padStart(2, '0')}${greenValue.padStart(2, '0')}${blueValue.padStart(2, '0')}`
}

function bgColor() {
  return document.body.style.backgroundColor = hexColorCode.innerText
}
bgColor()

function red(event) {
  let red = document.getElementById('red')
  let color = event.target.value
  red.innerHTML = `${color}`
  rgbToHex()
  bgColor()
}

function green(event) {
  let green = document.getElementById('green')
  let color = event.target.value 
  green.innerHTML = `${color}`
  rgbToHex()
  bgColor()
}

function blue(event) {
  let blue = document.getElementById('blue')
  let color = event.target.value
  blue.innerHTML = `${color}`
  rgbToHex()
  bgColor()
}

redChange.addEventListener('mousemove', red)
greenChange.addEventListener('mousemove', green)
blueChange.addEventListener('mousemove', blue)
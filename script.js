const inputEl = document.getElementById("num-input")
const cleatBtn = document.getElementById("clear")
const submitBtn = document.getElementById("submit-btn")
const volumeField = document.getElementById("volume-field")
const massField = document.getElementById("mass-field")
const lenField = document.getElementById("length-field")


submitBtn.addEventListener("click", function() {
   const inputVal = inputEl.value
    
    const volume = getVolume(inputVal)
    const mass = getMass(inputVal)
    const len = getLength(inputVal)

    render(volume, "Liters", "Gallons" , "Volume", volumeField)
    render(mass, "Kilograms", "Pounds", "Mass", massField)
    render(len, "Meter", "Feet", "Length", lenField)
})

cleatBtn.addEventListener("click", function() {
    inputEl.value = ""
})

function getVolume(vol) {
   const litre = vol *  3.78
   const gallon = vol *  0.26
   return [litre.toFixed(2), gallon.toFixed(2), vol]
}

function getMass(val) {
    const kilo = val / 2.20462
    const pound = val * 2.20
    return [kilo.toFixed(2), pound.toFixed(2), val]
}

function getLength(val) {
    const meter = val / 3.28084
    const feet = val * 3.28
    return [meter.toFixed(2), feet.toFixed(2), val]
}

function render(arr, unit1, unit2 , type, field) {
     const domtext = ` 
     <h4>${type} (${unit1}/${unit2})</h4>
     <p>${arr[2]}  ${unit1} =  ${arr[1]}  ${unit2} | ${arr[2]} ${unit2} =  ${arr[0]} ${unit1}</p>
     ` 
     field.innerHTML = domtext
}







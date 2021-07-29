    
let id1 = document.getElementById("t1")


const botones = document.querySelectorAll(".tipo")

botones.forEach( boton => {
    
    boton.addEventListener("click", () => {

        let tips = boton.getAttribute("tip")
        let cuenta = document.getElementById("cuenta").value
        let personas = document.getElementById("personas").value
        total = cuenta * tips
        subtotal = total/personas
        
    
        document.getElementById("total").innerHTML = `$ ${total.toFixed(2)}`
        document.getElementById("solo").innerHTML = `$ ${subtotal.toFixed(2)}`
    })

});

let custom = document.getElementById("t6")

custom.addEventListener("change", () => {
    
    let valor = document.getElementById("t6").value
    valor = valor/100
    
    let cuenta = document.getElementById("cuenta").value
    let personas = document.getElementById("personas").value
    total = cuenta * valor
    subtotal = total/personas
        
    
    document.getElementById("total").innerHTML = `$ ${total.toFixed(2)}`
    document.getElementById("solo").innerHTML = `$ ${subtotal.toFixed(2)}`
    
})

let btnreset = document.getElementById("reset")

btnreset.addEventListener("click", () => {
    document.getElementById("cuenta").value = ''
    document.getElementById("personas").value = ''
    document.getElementById("t6").value = ''
    document.getElementById("total").innerHTML = `$ 0.00`
    document.getElementById("solo").innerHTML = `$ 0.00`
})


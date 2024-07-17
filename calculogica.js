function calculatip(event) {
    event.preventDefault()
    let bill = document.getElementById('bill').value
    let servicequal = document.getElementById('servicequal').value
    let people = document.getElementById('people').value

    if (bill == '' | servicequal == 0){
        alert('Por favor preencha os campos')
        return
    }
    if (people == '' | people <= 1) {
        people = 1
        document.getElementById('each').style.display = 'none'
    } else {
        document.getElementById('each').style.display = 'block'
    }
    let total = (bill * servicequal) / people
    total = total.toFixed(2)
    document.getElementById('total').innerHTML = total
    document.getElementById('resp').style.display = 'block'
}

document.getElementById('resp').style.display = "none"
document.getElementById('each').style.display = 'none'

document.getElementById('tipoform').addEventListener('submit', calculatip)
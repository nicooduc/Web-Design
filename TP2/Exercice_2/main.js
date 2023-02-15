function Calculer_Multiply() {
    var number_1
    var number_2
    var result
    var champ_result
    number_1 = parseFloat(document.getElementById('NB1').value)
    number_2 = parseFloat(document.getElementById('NB2').value)
    champ_result = document.getElementById('RESULT')
    result = (number_1 * number_2)
    champ_result.value = result
}
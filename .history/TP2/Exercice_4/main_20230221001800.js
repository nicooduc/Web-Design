function Ecrire_Prop() {
    var entree
    var plat
    var dessert
    var champ_prix_entree
    var champ_prix_plat
    var champ_prix_dessert
    var prix_total
    var champ_prix_total
    entree = document.getElementById('IN_ENTREE')
    plat = document.getElementById('IN_PLAT')
    dessert = document.getElementById('IN_DESSERT')
    champ_prix_entree = document.getElementById('OUT_ENTREE')
    champ_prix_plat = document.getElementById('OUT_PLAT')
    champ_prix_dessert = document.getElementById('OUT_DESSERT')
    champ_prix_total = document.getElementById('OUT_TOTAL')

    champ_prix_entree.value = entree.value + " €"
    champ_prix_plat.value = plat.value + " €"
    champ_prix_dessert.value = dessert.value + " €"
    prix_total = (parseFloat(entree.value) + parseFloat(plat.value) + parseFloat(dessert.value)).toFixed(2)
    champ_prix_total.value = prix_total + " €"
}
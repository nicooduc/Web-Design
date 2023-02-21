function Ecrire_Prop() {
    var bordure
    var hauteur
    var largeur
    var nom
    var source
    bordure = document.getElementById('bordure')
    hauteur = document.getElementById('hauteur')
    largeur = document.getElementById('largeur')
    nom = document.getElementById('nom')
    source = document.getElementById('source')

    champ_prix_entree.value = entree.value + " €"
    champ_prix_plat.value = plat.value + " €"
    champ_prix_dessert.value = dessert.value + " €"
    prix_total = (parseFloat(entree.value) + parseFloat(plat.value) + parseFloat(dessert.value)).toFixed(2)
    champ_prix_total.value = prix_total + " €"
}
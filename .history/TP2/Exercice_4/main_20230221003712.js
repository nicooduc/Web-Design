function Ecrire_Prop() {
    var bordure
    var hauteur
    var largeur
    var nom
    var source
    bordure = document.getElementById('bordure').value
    hauteur = document.getElementById('hauteur').value
    largeur = document.getElementById('largeur').value
    nom = document.getElementById('nom').value
    source = document.getElementById('source').value

    let img_midify = document.getElementById("img_midify");
    img_midify.setAttribute("src", source);
    img_midify.setAttribute("width", largeur);
    img_midify.setAttribute("height", hauteur);
    img_midify.setAttribute("border", bordure);
    img_midify.setAttribute("alt", nom);
}

function Lire_Prop() {
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

    let img_midify = document.getElementById("img_midify");
    source.value = img_midify.getAttribute("src");
    largeur.value = img_midify.getAttribute("width");
    hauteur.value = img_midify.getAttribute("height");
    bordure.value = img_midify.getAttribute("border");
    nom.value = img_midify.getAttribute("alt");
}
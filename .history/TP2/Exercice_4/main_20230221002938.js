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

    var img_midify = document.getElementById("img_midify");
    img_midify.setAttribute("src", source);
    img_midify.setAttribute("width", largeur);
    img_midify.setAttribute("height", hauteur);
    img_midify.setAttribute("border", bordure);
    img_midify.setAttribute("alt", nom);
}
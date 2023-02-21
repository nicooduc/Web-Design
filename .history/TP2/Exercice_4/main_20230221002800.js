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

    var img_midify = document.getElementById("myImg");
    img.setAttribute("width", largeur);
    img_midify.width = largeur;
    img_midify.height = hauteur;
    img_midify.src = source;
}
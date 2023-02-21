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
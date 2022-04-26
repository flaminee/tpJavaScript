
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(formes){
    this.formes =  []
};

function Formes(InitX, InitY, FinalX, FinalY, epaisseur, couleur){
    this.couleur = couleur;
    this.epaisseur = epaisseur;
    this.InitX = InitX;
    this.InitY = InitY;
    this.FinalX = FinalX;
    this.FinalY = FinalY;
};



function Rectangle(InitX, InitY, FinalX, FinalY, epaisseur, couleur){
    Formes.call(this, InitX, InitY, FinalX, FinalY, epaisseur , couleur);
};
Rectangle.prototype = new Formes();



function Line(InitX,InitY, FinalX, FinalY, epaisseur, couleur){
    Formes.call(this, InitX, InitY, FinalX, FinalY, epaisseur, couleur);
};
Line.prototype = new Formes();
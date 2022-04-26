
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.


Rectangle.prototype.paint = function(ctx) {
  //TODO Manager color

  ctx.strokeStyle = this.couleur;
  ctx.lineWidth = this.epaisseur;
  ctx.strokeRect(this.InitX, this.InitY, this.FinalX,   this.FinalY);
};

Line.prototype.paint = function(ctx) {
  //TODO Manager color

  ctx.strokeStyle = this.couleur;
  ctx.lineWidth = this.epaisseur;

  ctx.beginPath();
  ctx.moveTo(this.InitX, this.InitY);
  ctx.lineTo(this.FinalX, this.FinalY);
  ctx.stroke();
};

Drawing.prototype.paint = function(ctx, canvas) {
  //console.log(this.getForms());
  ctx.fillStyle = '#F0F0F0'; // set canvas' background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  this.formes.forEach(function (eltDuTableau) {
    // now fill the canvas
    eltDuTableau.paint(ctx);
  });
};

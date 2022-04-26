

// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {

	// Définir ici les attributs de la 'classe'
    this.InitX = 0;
	this.InitY = 0;
	this.FinalX = 0;
	this.FinalY = 0;
    this.interactor = interactor;

	this.pression_effectuee = false;

	// Developper les 3 fonctions gérant les événements
    this.pression = function(evt){

        this.pression_effectuee = true;
        var pos = getMousePosition(canvas, evt);
        this.InitX = pos.x;
        this.InitY = pos.y;
        this.interactor.onInteractionStart(this);

    }.bind(this);

    this.deplacements = function(evt){

        if(this.pression_effectuee){
            var pos = getMousePosition(canvas, evt);
            this.FinalX = pos.x;
            this.FinalY = pos.y;
            this.pression_effectuee = true;
            this.interactor.onInteractionUpdate(this);
        }

    }.bind(this);

    this.relachement = function(evt){
        var pos = getMousePosition(canvas, evt);
        this.FinalX = pos.x;
        this.FinalY = pos.y;
        this.pression_effectuee = false;
        this.interactor.onInteractionEnd(this);

    }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
	canvas.addEventListener('mousedown', this.pression, false);
    canvas.addEventListener('mousemove', this.deplacements, false);
    canvas.addEventListener('mouseup', this.relachement, false);

};

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};




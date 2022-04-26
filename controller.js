
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.


	document.getElementById('butRect').onclick = (_) => this.
		currEditingMode = editingMode.rect
	document.getElementById('butLine').onclick = (_) => this.
		currEditingMode = editingMode.line
	document.getElementById('spinnerWidth').onchange = (e) => this.
		currLineWidth = e.target.value;
	document.getElementById('colour').onchange = (e) => this.
		currColour = e.target.value;


	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (dnd){
		//this.currentShape = new Rectangle();


	}.bind(this);

	this.onInteractionUpdate = function (dnd){

		if (this.currEditingMode === editingMode.rect){
			this.currentShape = new Rectangle(dnd.InitX, dnd.InitY, dnd.FinalX - dnd.InitX, dnd.FinalY - dnd.InitY, this.currLineWidth, this.currColour );
		} else {
			this.currentShape = new Line(dnd.InitX, dnd.InitY, dnd.FinalX , dnd.FinalY, this.currLineWidth, this.currColour );

		}
		drawing.paint(ctx, canvas);
		this.currentShape.paint(ctx);


	}.bind(this);

	this.onInteractionEnd = function (dnd){

		drawing.formes.push(this.currentShape);
		drawing.paint(ctx, canvas);
		this.currentShape.paint(ctx, canvas);


	}.bind(this);



}



// Put this file in Program Files\Adobe\Photoshop\Presets\Scripts\
// In PhotoShop menu File > Automate > Scripts: layersToSprite.js

// Arrange layers into a sprite sheet. 

if (documents.length > 0) 
{
	var cols = 5;
	
	// --------------------------
	docRef = activeDocument;    
	var activeLayer = docRef.activeLayer;

	numLayers = docRef.artLayers.length; 	
	
// 	layertext = "There are " + numLayers + " layers.";
// 	
// 	dialog{text:'Script Interface',bounds:[100,100,420,240],panel1:Panel{bounds:[10,10,310,100] , text:'Layers To Sprite' ,properties:{borderStyle:'etched',su1PanelCoordinates:true},			edittext0:EditText{bounds:[170,50,220,70] , text:cols ,properties:{multiline:false,noecho:false,readonly:false}}, statictext0:StaticText{bounds:[60,50,161,67] , text:'Number of Columns' ,properties:{scrolling:undefined,multiline:undefined}},layernumtext:StaticText{bounds:[30,20,270,37] , text:layertext ,properties:{scrolling:undefined,multiline:undefined}}},okay:Button{bounds:[210,110,310,130] , text:'Okay' },cancel:Button{bounds:[100,110,200,130] , text:'Cancel' }	};
	
	var rows = Math.ceil(numLayers/cols);
	
 	var spriteX = docRef.width;
 	var spriteY = docRef.height;	
	
	// put things in order
	app.preferences.rulerUnits = Units.PIXELS;
	
	// resize the canvas
 	newX = spriteX * cols;
 	newY = spriteY * rows;
 	
 	docRef.resizeCanvas( newX, newY, AnchorPosition.TOPLEFT );
 	 	
	// move the layers around
 	var rowi = 0;
 	var coli = 0;
 	
 	for (i=(numLayers - 1); i >= 0; i--) 
 	{ 	
 		docRef.artLayers[i].visible = 1;
 		
  		var movX = spriteX*coli;
  		var movY = spriteY*rowi;
  		
 		docRef.artLayers[i].translate(movX, movY);
 		
 		coli++;
 		if (coli > (cols - 1)) 
 		{
	 		rowi++;
	 		coli = 0;
 		}
 	}
}
 	
 	

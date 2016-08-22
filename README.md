#spriteAnimation.js
A JavaScript class for sprite-based animation in canvas.   
Also includes a version that returns a promise when the sprite sheets load.
## Usage
First you need to create a sprite sheet. I create mine from short video clips using a Photoshop script called layersToSprite created by [Mark McCoy.](http://www.garagegames.com/community/blogs/view/11527) 

Then simply call the constructor:  
`var demo = new CanvasSprite(canvas-element, width, height, url, sprite-rows, sprite-columns, number-of-sprites);` 

And simply select the sprites however you'd like using a number between 0 and 1:  
`demo.setFrame(.1); //10% (rounded down) through the sprite sheet`
## Demos
These demos all use three instances of the class and are based on [the final scene from Andrei Tarkovsky's Stalker](https://www.youtube.com/watch?v=dNiVFCWMrqI). They map frames to the vertical position of the mouse to seemingly control the position of three distinct objects separetely in one image. This is one way I like to use spriteAnimation.js: the other is to create loops and vary their speed, which is easy to implement with a function looping calls to setFrame(). Included are three variations: 
* A vanilla implementation with all the data hardcoded. **Example [here]().**
* One that uses react.js, loads the image data from a JSON file using the Fetch API, and renders the canvases and object instances into arrays. **Example [here]().**
* Another that uses react.js, but first renders each animation to a hidden buffer canvas, then draws those canvases into one larger one, and applies a Gaussian blur function (provided by [Mario Klingemann](http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html)) based on the summed positions of the object in each buffer. **Example [here](http://sretaeper.ucoz.com/stalker_blur/index.html).**

Many more examples can be found [here](http://repeaters.tumblr.com). Enjoy!

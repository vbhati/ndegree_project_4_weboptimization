## Website Performance Optimization portfolio project

Improved performance of online portfolio by optimizing critical rendering path.
### Criterias met:
1. Critical Rendering path for index.html: Achieved score 93 for mobile and 94 for desktop out of 100.

2. Framerate for pizza.html: Identified and optimized main.js to achieve target frame rate of 60fps. Refer FPS_screenshot.jpg above. 

3. Computation Efficiency for pizza.html: Optimized main.js to resize pizzas in 1.31ms.

4. Build tools: Used Grunt (JS Task Runner) to optimize and minify CSS and JS files in project.

5. Comments: Detailed code changes in main.js  

### Application url: http://portfolio-optimization.appspot.com/

Performance can be observed using Google developer tools -> Timeline and console logs.
Note: Differences in numbers were observed running the app on local machine using ngrok and through website url.


### Optimizations:

1. Minified JS and CSS files

2. Used "async" property within script tags.

3. Compressed images.

4. Moved style.css content to respective html files to improve performance.

5. Optimizations done to achieve 60fps frame rate (main.js):
	1. Used requestAnimationFrame logic to optimize frames per second by Paul Lewis
		http://www.html5rocks.com/en/tutorials/speed/animations/
		Section: Debouncing Scroll Events
		
	2. Modified updatePositions() logic. For detailed comments please refer code.
	  * Moved calculation of phase value out of for loop, since it need not be repeated for all the elements in for loop.
	  * Used window height to perform animation/style for only visible elements on the screen not all in the array.
	  * Updated element style for animation using "cssText" property instead of "elem.style.left" as later one is expensive.
		http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/
	
6. Optimizations for pizza resize below 5ms (main.js):
	1. Moved calculation of newWidth involving element's offsetwidth and size out of for loop as it need not be calculated every time. And is also expensive for browser.
	2. Removed function "determineDx (elem, size) {}" as is no longer needed. Please refer code for details.
	3. Setting newsize value within changeSliderLabel function to avoid redundancy.


### Resources used as reference:

http://www.html5rocks.com/en/tutorials/speed/animations/

http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/

http://www.html5rocks.com/en/tutorials/speed/scrolling/

https://ngrok.com/

http://gruntjs.com/getting-started

https://github.com/udacity/frontend-nanodegree-mobile-portfolio

https://developer.chrome.com/devtools/docs/tips-and-tricks


### Tools Used:

Chrome canary developer tools.

ngrok

Grunt

### Files and folders:

Gruntfile.js : is used to configure, define tasks, and load Grunt plugins.

production-code : is the original code that is used for optimization.

js and css folders : contains respective javascript, css and html files.

views: contains required resources for Pizzeria
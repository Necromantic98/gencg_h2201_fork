# Day 04 Elp

## Drawing machine

### Random Lines

The first idea that i had, was to set lines randomly across the canvas.

{% raw %}
<iframe src="content/day04/01/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

### Line-Pattern

The next idea i had, was a line-based drawing machine as well. I set points around the canvas and connected two points, after that there is a counter which goes around the canvas. To create more complex patterns, i had to set different counter-increases to one or more sides of the canvas.

{% raw %}
<iframe src="content/day04/02/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

### Circle Pendulum

The last idea i had for this, was to draw a circle around the center and as the first circle is drawn, i drew another circle around the first and so on. Once finished there were some interesting patterns visible and pretty much all the time mirrored on the x-axis

{% raw %}
<iframe src="content/day04/02/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

I took this idea a step further and made a bunch of copies the whole circle-mess and started it from a different angle and/or different starting radius. Additionally i made a fade-out effect as well and gave it some color.

{% raw %}
<iframe src="content/day04/03/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

# Day 03 Elp

## Clock

I didnt have any great ideas at first, but as time passed on i wanted to create a clock, which represents the solar system. I wanted to have a second-, minute- and hourplanet that orbits around teh sun in the middle. Additionally i wanted to calibrate my clock to the real time, which ment that i had to use the date object from js. At first i had a top view of the solar system, which i found pretty boring since there were 'only' circles.

{% raw %}
<iframe src="content/day03/01/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

To make it a bit more interesting, i created a pseudo 3D solar system. the planets were now following an ellipsoid path. To make it more 3D i made the second-planet go behind the sun and when he is in the foreground, before the sun.

{% raw %}
<iframe src="content/day03/02/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

# Day 02 Elp

## Grids & Patterns

In terms of grids i had the idea of dots that move in a grid-like pattern. Additionally i wanted to make the dots move in different directions without touching each other. Another criteria that i wanted to implement was to set the amount of dots per axis. The dots should also have a fade-out-effect, since i lked it on my sollewit wall drawing. The last criteria for me was that it should loop perfectly, so that it doesnt have an end.

{% raw %}
<iframe src="content/day02/01/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

The black border around the canvas was necessary because of the loop-effect of the dots. I could have done it without the border, but this was the easier solution and far less time consuming.

# Day 01 Elp

## Struggle with git

On the first day i learned quite a bit about git and its functions. Since noone has ever used git before, we had to do a bit of an unplanned introduction to github. It is pretty confusing at first, but if you get the hang out of it, its actually a nice tool.

## Sollewit: Wall drawing

I felt very inspirated on the Wall drawing from Sollewit and wanted to recreate it for myself. 

{% raw %}
<iframe src="content/day01/01/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

The points are randomly generated on the canvas and connected to each other. To make a single point more visible, i made them a bit bigger than the lines.
On my next step i wanted to move them around and interacting with the border.

{% raw %}
<iframe src="content/day01/02/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

Here they are bouncing around inside the canvas. Additionally i made a function wich wich made the bouncing angle random.

{% raw %}
<iframe src="content/day01/03/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

After that i wanted to bring more color to the drawing. I made it so that it cycles through the color spectrum.

{% raw %}
<iframe src="content/day01/04/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

Or a variant that every point has a different color and the lines have a gradient.

{% raw %}
<iframe src="content/day01/05/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

On my next step i had the idea to make the points as circles. The circles should have the property to be as large as they can, without overwriting each other. This turned out to be much more complex than i anticipated. In this current version the circles' radius is half the distance from the nearest point. But this rule isn't true 100% the time, thats why there are only two circles touching each other. But after all it doesn't look that bad...

{% raw %}
<iframe src="content/day01/06/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

The final minor adjustment that i did, was a 'fade-out-effect', which gave it a more dynamic effect. 

{% raw %}
<iframe src="content/day01/07/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

All the functions mentioned above can be removed or combined. For example if you dont like the lines that connect the dots, you can draw just the dots.

{% raw %}
<iframe src="content/day01/08/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}



```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
``` 

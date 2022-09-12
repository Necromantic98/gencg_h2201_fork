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

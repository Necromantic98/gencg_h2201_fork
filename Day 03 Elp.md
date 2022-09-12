# Day 03 Elp

## Clock

I didnt have any great ideas at first, but as time passed on i wanted to create a clock, which represents the solar system. I wanted to have a second-, minute- and hourplanet that orbits around teh sun in the middle. Additionally i wanted to calibrate my clock to the real time, which ment that i had to use the date object from js. At first i had a top view of the solar system, which i found pretty boring since there were 'only' circles.

{% raw %}
<iframe src="content/day03/1/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

To make it a bit more interesting, i created a pseudo 3D solar system. the planets were now following an ellipsoid path. To make it more 3D i made the second-planet go behind the sun and when he is in the foreground, before the sun.

{% raw %}
<iframe src="content/day03/2/index.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

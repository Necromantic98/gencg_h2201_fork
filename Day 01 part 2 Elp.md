# Day 01 part 2 Elp

## Sollewit: Wall drawing

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


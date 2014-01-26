---
layout: post
title:  Making the Switch to Jekyll
date:   2013-11-18 010:48:26
categories: posts
---
For the past couple of years, I have been using ExpressionEngine for my personal site. I was sold on the customization and the ability to easily mold the backend to my needs. However, updating, maintaining and moving these setups was always a pain point for me, not to mention having such a powerful backend was overkill for my site. This is where Jekyll comes in.

Jekyll is a blog aware static site generator and it was a no brainer to use to re-build my personal site. Lately, it seems like a lot of web developers are making the switch to static site generators like Jekyll and it's easy to understand why when you weigh all of the benefits:

- No database to maintain or update.
- No CMS updates that potentially break your custom theme or installed plugins.
- Hosting a Jekyll site is totally free with [Github Pages][gPages] even with a custom domain.
- Jekyll is free, open source and the [documentation][jekyll-docs] is superb.
- Serving static pages is blazing fast.
- Maintains blog functionality.

My site now benefits from all of the listed examples. All of my posts are written with [markdown][markdown] in sublime text which allows me to have greater control of how my posts are formatted compared to using finicky WYSIWYG editors and allows them to be under version control.

If you're interested, installing Jekyll takes just a matter of seconds if you have ruby gems installed and ready to go on your system. Install the jekyll ruby gem through your command line and cd over to where you keep all of your projects to create the new jekyll site.

{% highlight bash %}
~ $ gem install jekyll
~ $ jekyll new name-of-project
{% endhighlight %}

Done. A default jekyll setup has been created and is ready to be worked on. Cd into your newly created site to fire it up.

{% highlight bash %}
~/name-of-project $ jekyll serve
{% endhighlight %}

Your site is now being served up on http://localhost:4000. Awesome, but I like to take this one step further by running:

{% highlight bash %}
~/name-of-project $ jekyll serve --watch
{% endhighlight %}

Running this will serve up your site at the aforementioned URL like before, but this will also listen on your project files and automatically generate your site when changes have been made.

I am really only scratching the surface when it comes to Jekyll but I would highly recommend checking it out. I have also found a use lately using Jekyll as a tool for building front end templates that need to be handed off to a separate party for implementation.


[jekyll-docs]: http://jekyllrb.com/docs/home/
[gPages]: http://pages.github.com/
[markdown]: http://daringfireball.net/projects/markdown/
---
layout: post
title:  "New site, who dis? 💅"
image:  'https://media.giphy.com/media/3o85xrhcwk5SnS8bvi/source.gif'
tags:   [life]
---

### New year, same ol' me.

It's officially the fourth week of 2020 and I've probably taken 16 mondo dukes — hashtag *blessed* 🙏

Started off the new year with a severe cold (medically speaking, from a self-diagnosis, it was the flu). Alexandra got hit with it pretty hard while we were in Florida, celebrating her bachelorette week with her family. Three days in, she had a 104-degree fever and had to bow out for the rest of the trip. Felt real bad, man.

Then, Arro was burning up. That'll have any new parent on edge. We took him to urgent care and he showed signs of having the flu, too. Medicated the shit out of him and homie was up and at 'em within a few days. Then, when we landed back in Los Angeles, I got hit with it myself. It was not a good look — none of us could function 🤧

Thankfully, we're all feeling better now.

![Lawd](https://media.giphy.com/media/HhWpLFOMqNTgI/source.gif)

***

### New site, who dis is?

I went back and forth on what I should run my site on. It was between [WordPress][url-wordpress], [Tumblr][url-tumblr], [Squarespace][url-squarespace], basic ass HTML, [Hugo][url-hugo] and [Jekyll][url-jekyll]. Ultimately, I went with Jekyll because I've been hollerin' at it for a minute, seems easy and I like how it sounds when you whisper it in a Russian accent.

Not to mention, Jekyll is written in [Ruby][url-ruby], a language I've been flirting with lately, and uses [Sass][url-sass] and [Liquid][url-liquid], Shopify's templating language, which I've also been tryna holler at (mainly because my most recent project was a Shopify e-commerce store).

The installation and setup was mad easy. All I had to do was open up Terminal.app and bang in the following commands:

{% highlight console %}
~ $ gem install bundler jekyll
~ $ jekyll awwwry
~ $ cd awwwry
~/awwwry $ bundle exec jekyll serve --watch
# => Open browser and go to http://localhost:4000
# => Or if you nerdy as fuck, http://127.0.0.1:4000
{% endhighlight %}

The directory structure *should* look something like this (or not all):

```
├── _config.yml
├── _data
|   └── members.yml
├── _drafts
|   ├── how-to-take-bomb-ass-shits.md
|   └── cures-for-an-itchy-asshole.md
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2019-12-25-christmas-made-me-broke.md
|   └── 2020-01-01-hapy-new-year-fool.md
├── _sass
|   ├── _base.scss
|   └── _layout.scss
├── _site
├── .jekyll-metadata
└── index.html
```

And when I wanted to see this bad bitch in action, I just ran the command line: `bundle exec jekyll serve --watch`.

![Lizzo, bitch](https://media.giphy.com/media/8cDK4PFuFVakeuNL7S/giphy.gif)

* `bundle exec` looks for a Gemfile in your current directory; you should run that in the root folder where you have your Jekyll files
* If you don't have a Gemfile, you can create one by running the command `bundle init` in Terminal.app and adding all the gems you need
* `jekyll serve` fires-up your site locally for development purposes
* `--watch` rebuilds your Jekyll site whenever a file is saved with any updates/changes
* And deployment is supes easy — open up `Terminal`, change directory to whatever folder you have your Jekyll files and run the `jekyll build` command — then open your favorite FTP program and move all the contents inside the `_site` folder into your server in whatever folder you want (root or sub, shit's up to you, boo)

***

### What's the future of this site?

For now, this is where I'll be sharing stories about my life, progress on my work and everything in between.

Alexandra and I recently took engagement photos with my homie, [David Bowles](url-david-bowles), behind the camera and his amazing wife, Nia, giving amazing directions during the shoot. We're supes stoked how they came out and I can't wait to share 'em in my next story. Here's a little preview:

![Engagement photo of Alexandra and Ary](/assets/img/engagement-photos-preview.jpg)

***

[url-jekyll]: https://jekyllrb.com
[url-hugo]: https://gohugo.io
[url-ruby]: https://www.ruby-lang.org/en/
[url-liquid]: https://shopify.github.io/liquid/
[url-wordpress]: https://wordpress.org
[url-tumblr]: https://www.tumblr.com
[url-squarespace]: https://www.squarespace.com
[url-sass]: https://sass-lang.com
[url-david-bowles]: https://davidscottbowles.com
[url-music]: http://www.youtube.com/watch?v=sLobgQ_oAho
[url-github]: https://github.com/awwwry
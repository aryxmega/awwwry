---
title: Grid System
subtitle: A super-fluid grid system template for all your nasty desires.
date: 2020-02-10
description: '#Front-End #HTML #SCSS'
featured_image: grid-system/grid-system-desktop.png
accent_color: '#2D8EFF'
gallery_images:
  - grid-system/grid-system-desktop.png
  - grid-system/desktop-mobile.png
  - grid-system/files.png
---

#### **Supes Simps Grid Sys** (aka SSGS) is a super simple grid system that's mad easy to customize to fit your millennial needs.

It currently supports Chrome, Firefox, Safari, Opera, IE and major mobile devices — especially on the [T-Mobile Sidekick][url-tmobile-sidekick].

#### Gettin' started is supes eaze

You can either clone the repo or download the latest `.zip` file:

- Clone: [https://github.com/awwwry/supes-simps-grids-sys.git][url-git-clone]
- Download latest .zip file: [https://github.com/awwwry/supes-simps-grids-sys/archive/master.zip][url-git-zip]

Then, you'll need to link-up the stylesheet to that `<head>` of yours:

{% highlight html %}
<link rel="stylesheet" type="text/css" href="style/sheet.css">
{% endhighlight %}

#### Structurin' your layout is ever so simple

{% highlight html %}
<div class="wrap">
	<div class="block-3">Content here</div>
	<div class="block-3">Content here</div>
	<div class="block-3">Content here</div>
</div>
{% endhighlight %}

**For example:** in order to create a three-column layout or section, hug your `.block-` children with a parent `.wrap` to clear the left floats associated with `.block-`.

#### Customizin' your grid

But maybe you want to kick it ol' school and create a two-column section where one column has a 25% width and the other a 75% width. As long as the `.block-` classes equal 100%, it'll be fire 🔥

{% highlight html %}
<div class="wrap">
    <div class="block-25">Some rad content here</div>
    <div class="block-75">Some dope content here</div>
</div>
{% endhighlight %}

[url-tmobile-sidekick]: https://www.t-mobile.com/brand/sidekick
[url-git-clone]: https://github.com/awwwry/supes-simps-grids-sys.git
[url-git-zip]: https://github.com/awwwry/supes-simps-grids-sys/archive/master.zip
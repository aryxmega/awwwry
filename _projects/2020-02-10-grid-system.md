---
title: Grid System
subtitle: A super-flexible grid system template to fulfill all of your nasty desires.
date: 2020-02-10 00:00:00
description: "#Front-End #HTML #SCSS"
featured_image: grid-system/desktop.png
accent_color: '#2D8EFF'
gallery_images:
  - grid-system/desktop.png
  - grid-system/desktop-mobile.png
  - grid-system/files.png
---

#### Supes Simps Grid Sys (aka SSGS) is a super simple grid system that's mad easy to customize to fit your millennial needs.

It currently supports Chrome, Firefox, Safari, Opera, IE and major mobile devices.

#### Installation is supes eaze

You can either clone the repo:  
[https://github.com/awwwry/supes-simps-grids-sys.git](https://github.com/awwwry/supes-simps-grids-sys.git)

Or download latest .zip file:  
[https://github.com/awwwry/supes-simps-grids-sys/archive/master.zip](https://github.com/awwwry/supes-simps-grids-sys/archive/master.zip)


#### Getting started is a piece of 🎂

First, you need to link-up the stylesheet:

{% raw %}
```html
<link rel="stylesheet" type="text/css" href="style/sheet.css">
```
{% endraw %}

Then, you can structure your layout like so:

{% raw %}
```html
<div class="wrap">
    <div class="block-3">Content here</div>
    <div class="block-3">Content here</div>
    <div class="block-3">Content here</div>
</div>
```
{% endraw %}

Creating a three-column layout is supes simps (this will scale each column down to 100% width on mobile). Wrap the `.block`'s in a `.wrap` class to clear the left floats that floatin' around `.block`.

#### Customizing your grid
Maybe you want to kick-it old school and create a two-column layout based on percentage. It's mad simps. All you need to know is basic math. As long as the `.block-` classes equal 100%, shit'll be fire, son.

{% raw %}
```html
<div class="wrap">
    <div class="block-75">Some rad content here</div>
    <div class="block-25">Some informational content here</div>
</div>
```
{% endraw %}

Creating the css is also simps:

{% raw %}
```css
.block-75 { width: 75%; }
.block-25 { width: 25%; }
```
{% endraw %}

{% include post-components/gallery.html
	columns = 1
	full_width = true
	images = "/images/projects/grid-system/desktop.png, /images/projects/grid-system/desktop-mobile.png, /images/projects/grid-system/files.png
	"
%}

<a href="https://github.com/awwwry/supes-simps-grid-sys" class="button--fill">Git it on GitHub</a>
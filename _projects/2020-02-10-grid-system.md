---
title: Grid System
subtitle: A super-flexible grid system template to fulfill all of your nasty desires.
date: 2020-02-10 00:00:00
description: "#Front-End #HTML #SCSS"
featured_image: grid-system/desktop.png
accent_color: '#4C60E6'
gallery_images:
  - grid-system/desktop.png
  - grid-system/desktop-mobile.png
  - grid-system/files.png
---

#### Supes Simps Grid Sys (aka SSGS) is a a super simple grid system that's mad easy to customize to fit your millennial needs

It currently supports Chrome, Firefox, Safari, Opera, IE and major mobile devices.

#### Installation is supes eaze

-   Clone: https://github.com/awwwry/supes-simps-grids-sys.git
-   Download latest .zip file: https://github.com/awwwry/supes-simps-grids-sys/archive/master.zip


#### Getting started is cake

First you need to link the stylesheet:

{% raw %}
```html
<link rel="stylesheet" type="text/css" href="style/sheet.css">
```
{% endraw %}

#### Structuring your layouts

{% raw %}
```html
<div class="wrap">
    <div class="block-3">Content here</div>
    <div class="block-3">Content here</div>
    <div class="block-3">Content here</div>
</div>
```
{% endraw %}

Creating a three-column layout is supes simps (this will scale each column down to 100% width on mobile). Wrap the .block's in a .wrap class to clear the left floats.

#### Customizing your grid
Maybe you want to kick-it old school and create a two-column layout — it's mad simps. All you need to know is basic math (as long as the .block- classes equal 100%, it will be fire).

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


#### Image carousels

Here's another gallery with only one column, which creates a carousel slide-show instead.

A nice little feature: the carousel only advances when it is in view, so your visitors won't scroll down to find it half way through your images.

{% include post-components/gallery.html
	columns = 1
	full_width = true
	images = "/images/projects/grid-system/desktop.png, /images/projects/grid-system/desktop-mobile.png, /images/projects/grid-system/files.png
	"
%}

#### Pretty cool, huh?

We've packed this theme with powerful features to show off your work.
Why not put them to use on your new website?

<a href="https://jekyllthemes.io/theme/made-portfolio-jekyll-theme" class="button--fill">Get This Theme</a>
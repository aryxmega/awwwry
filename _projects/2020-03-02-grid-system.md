---
title: Grid System
subtitle: A supes-flexible grid template for all of your millenial needs and desires.
date: 2019-07-24 00:00:00
description: Supes Simps Grid Sys (aka SSGS) is a a super simple grid system that’s mad easy to customize to fit your millennial needs.
featured_image: '/grid-system/desktop.png'
accent_color: '#2D8EFF'
gallery_images:
  - /grid-system/desktop.png
  - /grid-system/desktop-mobile.png
  - /grid-system/files.png
---

Supes Simps Grid Sys (aka SSGS) is a a super simple grid system that's mad easy to customize to fit your millennial needs. It currently supports Chrome, Firefox, Safari, Opera, IE and major mobile devices.

#### Installation is supes eaze:

-   Clone: [https://github.com/awwwry/supes-simps-grids-sys.git](https://github.com/awwwry/supes-simps-grids-sys.git)
-   Download latest .zip file: [https://github.com/awwwry/supes-simps-grids-sys/archive/master.zip](https://github.com/awwwry/supes-simps-grids-sys/archive/master.zip)


#### Link-up the stylesheet in your <head>

```html
<link rel="stylesheet" type="text/css" href="style/sheet.css">
```

#### Structurin' your layouts real nasty.
```html
<div class="wrap">
    <div class="block-3">Content here</div>
    <div class="block-3">Content here</div>
    <div class="block-3">Content here</div>
</div>
```
Creating a three-column layout is supes simps (this will scale each column down to 100% width on mobile). Wrap the `.block`'s in a `.wrap` class to clear the left floats.

#### Gettin' fluid widdit.
Maybe you want to kick-it old school and create a two-column layout based on percentage. It's mad simps — you just need to know basic math (as long as the `.block-` classes equal 100%, it will be fire 🔥).
```html
<div class="wrap">
    <div class="block-75">Some rad content here</div>
    <div class="block-25">Some informational content here</div>
</div>
```

{% include post-components/gallery.html
	columns = 1
	full_width = true
	images = "/images/projects/grid-system/desktop.png,/images/projects/grid-system/desktop-mobile.png,/images/projects/grid-system/files.png
	"
%}

#### That's it.

If you have any questions, don't hesitate to holler at <a href="https://media.giphy.com/media/Yq9Qvg8yqfiQtWP6gn/giphy.gif" title="Really bruh" target="_blank">no-reply@gmail.com</a>.
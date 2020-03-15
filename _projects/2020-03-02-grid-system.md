---
title: Grid System
subtitle: A supes-flexible grid template for all of your millenial needs and desires.
date: 2019-07-24 00:00:00
description: "#Front-End #HTML #SASS"
featured_image: '/grid-system/desktop.png'
accent_color: '#000000'
gallery_images:
  - /grid-system/desktop.png
  - /grid-system/desktop-mobile.png
  - /grid-system/files.png
---

Supes Simps Grid Sys (aka SSGS) is a a super simple grid system I whipped up that's mad easy to customize to fit your millennial needs. It currently supports Chrome, Firefox, Safari, Opera, IE and major mobile devices.
{: .lead}

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
Creating a three-column layout, for example, is supes simps. Wrap the `.block`'s in a `.wrap` class to clear the left floats.

**Note:** this will scale each column down to 100% width on mobile.

#### Gettin' fluid widdit.
Maybe you want to kick-it old school and create a two-column layout based on percentage. It's mad simps. As long as the `.block-` classes equal 100%, shit'll will be fire 🔥
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
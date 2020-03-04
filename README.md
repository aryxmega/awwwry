# @AWWWRY

A supes simps theme for Jekyll, currently being used and reused on my personal blog, [https://awwwry.com](url-awwwry).

[![Netlify Status](https://api.netlify.com/api/v1/badges/6ca6a802-8b98-491e-9aeb-e41597f4694f/deploy-status)](https://app.netlify.com/sites/awwwry/deploys)

* * *

Table of Contents
-----------------
*   [Features](#features)
*   [Preview](#preview)
*   [Development](#development)
*   [Create Posts](#CreatePosts)
*   [Google Analytics](#GoogleAnalytics)
*   [Update Favicon](#UpdateFavicon)
*   [Support](#Support)

* * *

### Features

* 100% responsive and 48% clean theme
* Looks rad on mobile devices
* Minimal design
* Valid HTML5
* Supports Disqus Comments
* Supports Google Analytics
* Google Fonts (I know, sick right?)

* * *

### Preview

Check it in action: [https://awwwry.com][url-awwwry]

* * *

### Development

To run the theme locally, go to the theme's directory and run `bundle install` in Terminal (or any command line interface) to install the dependencies, then run `jekyll serve` or `bundle exec jekyll serve` to fire-up the Jekyll server.

Check out the [Deployment Methods](https://jekyllrb.com/docs/deployment-methods/) page on Jekyll's website to see your creation on the internets.

* * *

### Create Posts

To create a new post, you can create a new markdown file inside the `\_posts` folder by following the [recommended file structure](https://jekyllrb.com/docs/posts/#creating-post-files).

      ---
      layout: post
      title: "Awe shit, Jekyll in the house, y'all!"
      image: '/assets/img/jekyll.jpg'
      tags: [life, case-studies]
      ---

You can set the tags and the post image.

Add post images to **/assets/img/** directory.

For tags, try to not add space between two words, for example, `Ruby on Rails`, could be something like (`ruby-on-rails`, `Ruby_on_Rails`, or `Ruby-on-Rails`).

* * *

### Google Analytics

To integrate Google Analytics, open `_config.yml`, and add your Google Analytics identifier.

    # Google Analytics
    google-analytics: # Add your identifier. For example UA-931139315-1


* * *

### Update Favicon

You can find the current favicon (favicon.ico) inside the theme root folder — just replace it with your new favicon.

* * *
### License

MIT License

* * *
  
[url-awwwry]: https://awwwry.com

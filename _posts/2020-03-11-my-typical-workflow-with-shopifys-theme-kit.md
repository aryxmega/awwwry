---
title: "My typical workflow with Shopify's Theme Kit"
date: 2020-03-11 00:00:00
description: "If you make changes locally, on your machine, does a bear really shit in the woods?"
featured_image: 'https://media.giphy.com/media/ZltMhhciMVpK0/giphy.gif'
cta: "Let's find out"
---

Straight up, Theme Kit is a tool used to create and party with Shopify themes, not to mention:
{: .lead}

- Download and upload theme files from multiple environments at speeds beyond your nasty imagination
- Watch for saved changes on your computer and automatically upload 'em to your Shopify theme
- And a bunch of other things

You may be thinking, **"Why don't you just use Shopify's online editor?"** It's simple, really: I like to overcomplicate things and throw in a version control service for shits and gigs. For a comprehensive breakdown of Theme Kit, you can [visit their websiiite][url-theme-kit]. This will be a quick post on my workflow with it.

#### How I party with Theme Kit.

- Create a new branch with `git checkout -b <feature_name>`
- Mosey over to the Shopify store and duplicate the active theme and rename it to `<feature_name>`
- Update the `config.yml` file by adding a new environment to the party and `<feature_name>`'s Theme ID
- Download the `<feature_name>` theme from the Shopify store by smashing the following command in Terminal: `theme download --env=<feature_name>`
- Once that's done, while still in Terminal, I'll type `theme watch --env=<feature_name>` so that any edits I make and save to any files will automatically be uploaded to my `<feature_name>` theme to preview
- How do I preview? By hollering `theme open --env=<feature_name>` in Terminal

#### Once I've made all the necessary edits, I start to merge all them shits to my develop and master branches:

- First, I'll `git pull origin develop` while being in the `<feature_name>` branch
- Then, I'll `git checkout develop`, followed by `theme download --env=develop` to get the latest changes and see if there are any new/modified files I'll need to commit before continuing
- If there are new/modified files, I'll `git commit -am "Theme download"`
- Otherwise, I'll just `git merge <feature_name>`, then `theme deploy --env=develop` to upload all my files I worked on to my dev environment
- Once all the files are upload, I'll finally `git push origin develop` so all the files can be safe in the develop branch up in the cloud somewhere

#### And if all's good in the hood and no edits need to be made in the dev environment, I'll push all them shits to production:

- While chilling in the `develop` branch, with all the latest changes, I'll `git pull origin master`
- Then, I'll `git push origin develop` so that there be no conflicts between the two honies, ya dig?
- Afterwards, I'll `git checkout master` and `theme download --env=production` to get the latest files from my Shopify's production store
- Once again, if there be any new/modified files, I'll `git commit -am "Theme download"` to have that on record
- Then, I'll `git merge develop` so that all the files I worked on in `<feature_name>` gets passed around like a juicy blunt — from `<feature_name>`, to `develop` to `master`
- And as soon as that's done, I'll upload all the files to the production store with `theme deploy --env=production`
- Last, but not least, I'll `git push origin master` so that it's safe and sound up in the cloud with the other homies

#### Tools I use.

- Shout out to [Visual Studio Code][url-vsc] for always havin' my back in the code editor game
- Big ups to [SourceTree][url-sourcetree] for helpin' a ninja pull, commit and push nasty ass files
- [Bitbucket][url-bitbucket], I see you dawg — thanks for hostin' the party

#### And that's about it.

![What kind of foolishness...](https://media.giphy.com/media/26tPoyDhjiJ2g7rEs/giphy.gif)

If you have any questions, please don't hesitate to holler via email at **no-reply@gmail.com** 🤙

[url-theme-kit]: https://shopify.github.io/themekit/
[url-sourcetree]: https://www.sourcetreeapp.com/
[url-vsc]: https://code.visualstudio.com/
[url-bitbucket]: https://bitbucket.org/product/
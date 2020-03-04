---
layout: post
title:  "How to show, hide and create hidden files and folders on a MacOS 👀"
image:  'https://media.giphy.com/media/YQitE4YNQNahy/giphy.gif'
tags:   [life, work, technology, hacks]
---

### Dawg

So imagine you're living in a time where security is the utmost (ut•most? up•most? upt•most? 🤔) important thing in a digital world and you're just like, tryna log into Spotify with the password `Test123`. Bruh, really?

Or say you're jammin' away on the computer that was provided by your employer (if you have any class whatsoever, you'd get a Mac) and you got personal shit saved on it. They can easily access it in a number of ways. That's why you need a ninja like me to drop some tips and tricks on dat ass to keep you, at least, 2.75 steps ahead of the game.

> In this post, I'm going to teach you how to show, hide and create hidden files and folders on a MacOS.

***

### Let's get started

![Empty Google Drive folder](/assets/img/finder-empty.png)
*Empty Google Drive folder*

For the sake of example, here's a screenshot of my Google Drive folder — empty. That's because I moved all my files and folders into a hidden folder.

I'll show you how to do the same.

***

### Holler at Spotlight and fire-up Terminal

![Empty Spotlight](/assets/img/spotlight-empty.png)
*Spotlight*

- Hold down the Command ⌘ (or CMD) key and hit that space bar one time
- Type in `Terminal` and either hit the Enter/Return key or double click from the Spotlight menu like a [jabroni][url-jabroni]

![Spotlight Terminal](/assets/img/spotlight-terminal.png)
*Typing 'Terminal' in Spotlight*

![Empty Terminal](/assets/img/terminal-empty.png)
*Empty Terminal*

***

### This is what I banged out in Terminal

![Terminal commands](/assets/img/terminal-commands.png)
*Smashin' away on that command line*

1. I typed in `ls` and hit the Return/Enter key and it displayed a list of folders on my drive (Applications, Bitbucket, etc.)
2. One of them was my **Google Drive** folder and that's where I wantd to slide into to create my hidden files and folders, so I typed in `cd 'Google Drive'` and pressed the Return/Enter key
3. Then, I typed `ls` and pressed the Return/Enter key to see what files are in my **Google Drive** folder — turns out shit's empty, otherwise it would've listed 'em like it previously
4. I typed `mkdir .display-none` to make a directory/folder called **.display-none**; I could've named it anything — as long as I had a period `.` before the name because **all hidden files/folders need a period before the name to be invisible**
5. I typed in `ls` again to see if that folder I just created would show — pfft, nah dawg, it did its job and stayed hidden
6. I wanted to slide into that new, hidden folder to create a hidden file, so I typed `cd .display-none` and pressed the Return/Enter key
7. Now that I'm in that folder, I typed `touch .on-em-haters-lol.md` to create a hidden file
8. Finally, I did a `ls` one last time to see if that hidden file would show up, but just like my obsession with One Direction, it stayed hidden

Once you create a hidden directory/folder, you can throw invisible or visible files/folders in there — that initial hidden folder is like one of those bookshelves against the wall that leads into a secret dungeon.

**Terminal commands I used**

- `ls` lists the names of files and folders within the file system; supes basic
- `cd` changes directory (AKA folder) into whatever folder is available
- `mkdir` creates a folder
- `touch` creates a file

***

### How to show and hide hidden folders/files

Here's a screenshot of my **Google Drive** folder after I created my hidden folder and file from above:

![Empty Google Drive folder](/assets/img/finder-empty.png)
*A sad and lonely Google Drive folder*

In order to see any hidden folders/files, I clicked on my **Google Drive** Finder window, so that it's active, and held down the following keys in order:

`Command ⌘ (or CMD)` + `Shift` + `Period (.)`

![Hidden files shown](/assets/img/finder-show-file.png)
*Hidden files, rise up*

To hide the files, I just smashed the same keys again:

`Command ⌘ (or CMD)` + `Shift` + `Period (.)`

![Empty Google Drive folder](/assets/img/finder-empty.png)
*Bye Felicia 👋*

***

### Opening, showing and hiding hidden files in an application

Say you're about 5'7" (5'8" when your ego's boosted), tan, tattooed and named Ary. You open a code editor to work on some files, but they inside a hidden folder. What do you do?

![Visual Studio Code](/assets/img/app-open-empty.png)
*Visual Studio Code tryna holler at a file that ain't there*

No lie, I would fire-up that program or application (Sketch, Photoshop, Microsoft Office, etc.), in this case **Visual Studio Code**, go to `File => Open...` or press `Command (⌘) + O` on the keys, and in that little mark ass window, press and hold `Command ⌘ (or CMD)` + `Shift` + `Period (.)` to show or hide them hidden gems.

![Visual Studio Code showing hidden files](/assets/img/app-open-show.png)
*Fuck yeah, dawg 🤙*

***

[url-jabroni]: https://www.urbandictionary.com/define.php?term=Jabroni
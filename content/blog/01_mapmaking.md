+++
title = "How We Make Our Maps"
date = 2021-01-07

extra.image = "assets/images/blog/mapmaking.png"
+++

Any fun, playable game needs an interesting map to be played on! This makes map building one of the most important parts of the minigame creation process.
In this blog, we will showcase the process that contributors may take when building a map.

</br>

When a builder decides that they want to make a map, the first step is to head over to a server with Plasmid installed. Plasmid is our custom game library which allows us to create minigames with ease- but most importantly here, it introduces a helpful map-making system, of which we will be making full use.

If you are interested in exploring much deeper detail into the workings of Plasmid's map system, see the [Creating a Map](https://github.com/NucleoidMC/plasmid/wiki/Creating-a-Map) wiki page.

</br>

For ease of collaboration between contributors, we have an official whitelisted build server with Plasmid already installed. One of our builders is creating a map for [King of the Hill](https://github.com/NucleoidMC/koth). So, our builder joins the server and creates an empty map with a handy command:

![Opening a map](/assets/images/blog/Kg34kl.jpg)

All interaction with the map system in Plasmid works through a `/map` command, which allows the swift creation of maps, editing, and exporting for use in production. 

</br>

One important concept within the map system is *regions*. A region is a helpful way of communicating information about the map to the game logic itself. This may be to communicate where players should spawn, or where an item generator should be placed. Regions, essentially, are just _a named area of the world_. When the game runs, it is able to request these regions from the map, and, from there, can decide how the game should run.

For example, in KotH, we require two vital regions:
- `spawn` - Where the players will spawn after being knocked off or at the start of the game.
- `throne` - Where the "top of the hill" is considered.

</br>

For showcase purposes, our builder has set the regions to visible:
![Regions](/assets/images/blog/Kg3ZBe.png)

"But what do the colors mean?" you might say;
- **Red** - The bounding box, anything built outside this red cube will not be saved.
- **Blue** - Regions, the lower region is the spawn and the topmost region is the throne.

</br>

By the looks of it, our builder has finished their map, and it is now ready to be implemented! 
All they need to do is run `/map export`, which will save the map to a file that can be read by Plasmid.

In the case of our build server, we [expose public file system access](https://build.nucleoid.xyz/plasmid/export) to the map export folder to make accessing these files much easier!
